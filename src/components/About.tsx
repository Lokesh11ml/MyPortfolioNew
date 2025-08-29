import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in-left">
            <Card className="card-gradient border-border/50 glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  Hello! I'm Lokeshwaran
                </h3>
                <p className="text-muted-foreground mb-4">
                  I'm a Computer Science and Engineering student at IFET College of Engineering, Villupuram, 
                  with a strong passion for problem-solving and technology innovation.
                </p>
                <p className="text-muted-foreground mb-4">
                  My journey in tech has led me to explore various domains including machine learning, 
                  web development, and IoT solutions. I believe in creating solutions that make a real 
                  difference in people's lives.
                </p>
                <p className="text-muted-foreground">
                  With strong communication skills and a willingness to learn, I'm always eager to take 
                  on new challenges and contribute to team success with dedication and enthusiasm.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-gradient border-border/50 hover:glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years of Learning</div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-border/50 hover:glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-border/50 hover:glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-border/50 hover:glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;