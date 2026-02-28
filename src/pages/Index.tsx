import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Chatbot (always visible, above footer) */}
      <Chatbot />
    </div>
  );
};

export default Index;
