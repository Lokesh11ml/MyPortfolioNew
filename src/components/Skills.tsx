import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 75 }
      ]
    }
  ];

  const technologies = [
    "Python", "JavaScript", "Java", "React", "HTML5", "CSS3", 
    "SQL", "MongoDB", "Firebase", "Google Colab", "Visual Studio", 
    "Git", "Machine Learning", "IoT", "Problem Solving"
  ];

  const certifications = [
    "Java Full Stack (TalentNext, Wipro)",
    "Python Essentials (Cisco)",
    "LeetCode MySQL 50 Certification",
    "HTML5, CSS3 (GUVI)",
    "Python (SkillRack)"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar rounded-full h-2">
                      <div 
                        className="skill-progress h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="card-gradient border-border/50 glow">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient text-center">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;