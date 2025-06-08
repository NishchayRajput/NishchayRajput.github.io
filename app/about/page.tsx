import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Code, Rocket, GraduationCap, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-20 mx-auto pl-4 pr-4">
      <SectionHeader
        title="About Me"
        subtitle="Learn more about my background, journey, and aspirations"
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/30 dark:from-primary/30 dark:via-purple-900/30 dark:to-blue-900/40">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 backdrop-blur-sm">
              <div className="w-32 h-32 rounded-full bg-background/80 flex items-center justify-center mb-6 shadow-lg">
                <User className="h-16 w-16 text-primary" />
              </div>
              <div className="text-center max-w-sm">
                <h3 className="text-2xl font-bold">Hello, I&apos;m <span className="text-primary">Nishchay</span></h3>
                <div className="flex items-center justify-center space-x-4 mt-6 mb-8">
                  <div className="flex flex-col items-center">
                    <Code className="h-6 w-6 text-primary mb-1" />
                    <span className="text-sm font-medium">Developer</span>
                  </div>
                  <div className="h-10 w-px bg-muted"></div>
                  <div className="flex flex-col items-center">
                    <Rocket className="h-6 w-6 text-primary mb-1" />
                    <span className="text-sm font-medium">Innovator</span>
                  </div>
                  <div className="h-10 w-px bg-muted"></div>
                  <div className="flex flex-col items-center">
                    <GraduationCap className="h-6 w-6 text-primary mb-1" />
                    <span className="text-sm font-medium">Student</span>
                  </div>
                </div>
                <Briefcase className="h-5 w-5 inline-block mr-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">IIT Bhilai, Computer Science</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 order-1 lg:order-2">
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-6 space-y-6">
              <h3 className="text-2xl font-bold">Hello, I&apos;m <span className="text-primary">Nishchay</span></h3>

              <p className="text-muted-foreground">
                I&apos;m a Computer Science student at IIT Bhilai, passionate about building impactful technology and constantly learning along the way. With a strong foundation in algorithms, data structures, and system design, I love tackling complex problems and turning ideas into clean, functional software.
              </p>

              <p className="text-muted-foreground">
                At IIT Bhilai, I’ve been fortunate to work on research-driven projects, collaborate with brilliant minds, and learn from industry experts. These experiences have shaped my ability to adapt quickly and approach challenges with curiosity and creativity.
              </p>

              <p className="text-muted-foreground">
                I’m a fast learner who thrives in collaborative environments, and I’m always eager to connect with like-minded individuals who are driven to build meaningful, user-centered solutions. Outside of academics, I actively contribute to open-source projects and explore emerging trends in UI/UX design and development.
              </p>

              <div className="pt-4">
                <Button asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h4>
                        <p className="text-primary font-medium">IIT Bhilai</p>
                      </div>
                      <span className="text-muted-foreground">2022 - Present</span>
                    </div>
                    {/* <p className="mt-4 text-muted-foreground">
                      Specializing in Artificial Intelligence and Machine Learning. Current CGPA: 9.2/10.
                      Key courses: Data Structures & Algorithms, Machine Learning, Computer Networks, 
                      Database Systems, and Distributed Systems.
                    </p> */}
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold">Senior Secondary Education</h4>
                        <p className="text-primary font-medium">Little Flower Hr. Sec. School</p>
                      </div>
                      <span className="text-muted-foreground">2022</span>
                    </div>
                    {/* <p className="mt-4 text-muted-foreground">
                      Completed senior secondary education with 95% marks in PCM 
                      (Physics, Chemistry, Mathematics).
                    </p> */}
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold"> Secondary Education</h4>
                        <p className="text-primary font-medium">GD Goenka Public School</p>
                      </div>
                      <span className="text-muted-foreground">2020</span>
                    </div>
                    {/* <p className="mt-4 text-muted-foreground">
                      Completed senior secondary education with 95% marks in PCM 
                      (Physics, Chemistry, Mathematics).
                    </p> */}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="interests" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Technical Interests</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Full Stack Development (MERN, Flutter, Next.js)</li>
                      <li>DevOps & Cloud Infrastructure (Docker, GCP, CI/CD)</li>
                      <li>Open Source Contributions (Stdlib, cBioPortal)</li>
                      <li>System Design & Scalable Architectures</li>
                      <li>Web Performance Optimization & Security</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Personal & Professional Goals</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Exploring real-world impact through open-source collaboration</li>
                      <li>Mastering DevOps practices and contributing to infra-level projects</li>
                      <li>Leading meaningful projects from scratch to scale</li>
                      <li>Building user-centered products with clean design and usability</li>
                      <li>Mentoring juniors and fostering collaborative tech communities</li>
                    </ul>
                  </CardContent>
                </Card>

              </div>
            </TabsContent>

          </Tabs>
        </div>
      </div>

      <div className="mt-20">
  <SectionHeader
    title="My Philosophy"
    subtitle="The principles that guide my work and learning"
    className="mb-12"
  />

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card className="bg-primary/5">
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Learn by Doing</h3>
        <p className="text-muted-foreground">
          I believe the best way to grow is to get hands-on—experimenting with ideas, building projects, and learning from real-world experiences.
        </p>
      </CardContent>
    </Card>

    <Card className="bg-primary/5">
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Grow Together</h3>
        <p className="text-muted-foreground">
          I thrive in communities where knowledge is shared freely. Helping others grow while learning myself is central to how I work.
        </p>
      </CardContent>
    </Card>

    <Card className="bg-primary/5">
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Start, Iterate, Improve</h3>
        <p className="text-muted-foreground">
          I believe in starting early, shipping fast, and iterating constantly—because progress comes from momentum, not perfection.
        </p>
      </CardContent>
    </Card>
  </div>
</div>

    </div>
  );
}
