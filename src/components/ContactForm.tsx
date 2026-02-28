import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            phone: values.phone || null,
            subject: values.subject,
            message: values.message,
          }
        ]);

      if (error) {
        throw error;
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@shridhardevelopers.com",
      subtitle: "Get in touch via email"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      subtitle: "Mon-Sat 9AM-6PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Business District, City",
      subtitle: "Our main office"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Saturday",
      subtitle: "9:00 AM - 6:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your dream project? Contact us today and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're looking for a new home, commercial space, or investment opportunity, 
                our team is here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-primary-foreground" size={20} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-foreground font-medium mb-1">{info.details}</p>
                    <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card border-border/20 bg-gradient-card animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">First Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your first name" 
                              {...field} 
                              className="border-border/30 focus:border-primary transition-colors duration-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your last name" 
                              {...field} 
                              className="border-border/30 focus:border-primary transition-colors duration-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email" 
                              {...field} 
                              className="border-border/30 focus:border-primary transition-colors duration-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Enter your phone number" 
                              {...field} 
                              className="border-border/30 focus:border-primary transition-colors duration-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What is this about?" 
                            {...field} 
                            className="border-border/30 focus:border-primary transition-colors duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your inquiry..." 
                            className="min-h-[120px] border-border/30 focus:border-primary transition-colors duration-300 resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}