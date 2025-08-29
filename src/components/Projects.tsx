import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Shield, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Adaptive Malware Detection System",
      description: "A unified ML-driven solution for threat detection in files and URLs using ensemble algorithms like Gradient Boosting, AdaBoost, and XGBoost.",
      technologies: ["Python", "Machine Learning", "Google Colab", "Ensemble Algorithms"],
      features: [
        "High detection accuracy for malware threats",
        "Large-scale data analysis capabilities",
        "Real-time threat identification",
        "Ensemble algorithm optimization"
      ],
      icon: <Shield className="h-8 w-8 text-primary" />,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Automatic Farm Protection Alert System",
      description: "IoT-based solution using sensors to detect animal intrusions and unusual activities, with real-time alert notifications for farmers.",
      technologies: ["IoT", "Sensors", "Real-time Systems", "Mobile Alerts"],
      features: [
        "Animal intrusion detection",
        "Real-time alert notifications",
        "Mobile and sound alarm systems",
        "Crop and livestock protection"
      ],
      icon: <Zap className="h-8 w-8 text-accent" />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 hover:glow transition-all duration-500 hover:scale-105 group"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl text-gradient group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="flex-1 hover:scale-105 transition-transform duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 hover:scale-105 transition-transform duration-300">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;