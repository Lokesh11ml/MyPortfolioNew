import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/10 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-2">Lokeshwaran S</h3>
            <p className="text-muted-foreground text-sm">
              Computer Science Engineering Student<br />
              Building innovative solutions with code
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center">
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a 
                href="mailto:lokeshwarans844@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with <Heart className="h-4 w-4 text-red-500" /> by Lokeshwaran S
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="text-center">
            <p className="text-muted-foreground text-xs">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;