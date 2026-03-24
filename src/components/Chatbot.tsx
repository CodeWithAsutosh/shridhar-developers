import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant from Shridhar Developers. How can I help you with your real estate needs today?',
      role: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const checkLocalRules = (input: string): string | null => {
    const lowerInput = input.toLowerCase();

    if (/\b(contact|phone|email|address|location|call|reach|office)\b/.test(lowerInput)) {
      return "You can reach us at +91 7858080838 or email us at srepl2011@gmail.com. Our main office is at Sarat Kanya Heights, Navin Mitra Lane, Burdwan Compound, Lalpur, Ranchi, Jharkhand 834001, IN. We are open Monday - Saturday, 9:00 AM - 6:00 PM.";
    }

    if (/\b(founder|ceo|owner|started|who is)\b/.test(lowerInput)) {
      return "Shridhar Developers was founded by Mr. Upendra Singh (Chikku Singh) in 2008. With his vision and dedication, we have completed 24+ projects over the span of 25+ years.";
    }

    if (/\b(project|projects|apartment|flat|buy|villa|commercial|property|properties)\b/.test(lowerInput)) {
      return "We offer Residential, Commercial, and Hospitality properties. Some of our key projects include Skyline Heights, Green Valley Villas, Janki Shridhar Tower, and Lemon Tree Premier. Please visit our 'Projects' section on the website for more details!";
    }

    if (/\b(career|job|jobs|hiring|vacancy|work)\b/.test(lowerInput)) {
      return "We are always looking for talented individuals! Currently we have openings for Senior Architect (Ahmedabad), Site Engineer (Surat), and Sales Executive (Vadodara). You can send your resume to srepl2011@gmail.com.";
    }

    if (/\b(about|history|experience|how old|company)\b/.test(lowerInput)) {
      return "For over 25 years, Shridhar Developers has been creating homes that embody peace, safety, and pride. We have delivered over 180+ Million Sq. Ft. of property with a 98% success rate.";
    }

    return null;
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const currentInput = inputValue; // Capture current input
      const localResponse = checkLocalRules(currentInput);

      if (localResponse) {
        // Simulate a tiny delay for local responses so it feels natural
        await new Promise((resolve) => setTimeout(resolve, 800));
        
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: localResponse,
          role: 'assistant',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        // Fallback to LLM
        const { data, error } = await supabase.functions.invoke('ai-chat', {
          body: { message: currentInput }
        });

        if (error) throw error;

        let responseText = data.response;
        
        // If LLM response is empty or indicates it doesn't know, use the final fallback
        if (!responseText || responseText.includes("I'm sorry") || responseText.includes("I don't know")) {
             responseText = "I'm sorry, I couldn't understand that. For more specific queries, please contact us directly at +91 7858080838 or email srepl2011@gmail.com.";
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: responseText,
          role: 'assistant',
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Fallback response instead of error toast
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I seem to be having trouble connecting. For immediate assistance, please contact us directly at +91 7858080838 or email srepl2011@gmail.com.",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, fallbackMessage]);
      
      toast({
        title: "Connection Error",
        description: "Switched to fallback offline responses.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-destructive hover:bg-destructive/90' 
            : 'bg-gradient-to-r from-primary to-primary-glow hover:scale-110 shadow-glow'
        }`}
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 h-[500px] shadow-elegant border-primary/20 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-border bg-gradient-to-r from-primary/10 to-primary-glow/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Shridhar Developers</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[280px] p-3 rounded-lg text-sm ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground ml-auto'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.role === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-3 w-3 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                    <div className="bg-muted text-muted-foreground p-3 rounded-lg text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our projects..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;