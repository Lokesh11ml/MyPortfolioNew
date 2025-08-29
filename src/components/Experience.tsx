import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Cloud Logic Technologies",
      role: "Web Development Intern",
      duration: "2024",
      type: "Internship",
      description: "Explored new technologies and frameworks in web development, focusing on modern design practices and responsive UI/UX.",
      achievements: [
        "Worked with HTML, CSS, JavaScript and version control systems",
        "Built interactive interfaces with modern web technologies",
        "Gained hands-on experience with responsive design principles",
        "Collaborated on real-world web development projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"]
    },
    {
      company: "NaNLogical Consultancy Services Pvt Ltd",
      role: "Frontend Development Intern",
      duration: "2024",
      type: "Internship",
      description: "Participated in a 25-day intensive internship program focused on frontend development fundamentals and practical applications.",
      achievements: [
        "Learned fundamentals of front-end development",
        "Practiced real-world tasks using HTML, CSS, and JavaScript",
        "Built responsive web pages with modern design patterns",
        "Completed hands-on projects under industry guidance"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Frontend Development", "UI/UX"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering - Computer Science and Engineering",
      institution: "IFET College of Engineering, Villupuram",
      duration: "2021 - 2025",
      grade: "CGPA: 8.13",
      status: "Currently Pursuing"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Mount Park Higher Secondary School, Kallakurichi",
      duration: "2020 - 2021",
      grade: "Academic Score: 85%",
      status: "Completed"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Mount Park Higher Secondary School, Kallakurichi",
      duration: "2018 - 2019",
      grade: "Academic Score: 83%",
      status: "Completed"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey of learning and professional growth
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-gradient border-border/50 hover:glow transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gradient">{exp.role}</CardTitle>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{exp.duration}</span>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="border-primary/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient border-border/50 hover:glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gradient mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.grade}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{edu.duration}</span>
                      </div>
                      <Badge 
                        variant={edu.status === "Currently Pursuing" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;