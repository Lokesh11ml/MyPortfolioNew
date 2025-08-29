import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Lokeshwaran S</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Science Engineering Student
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code. 
            Specializing in full-stack development, machine learning, and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="glow hover:scale-105 transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <a 
              href="mailto:lokeshwarans844@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;