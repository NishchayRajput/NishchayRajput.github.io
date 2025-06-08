import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { SkillCard } from "@/components/skill-components";
import { TimelineItem } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { ArrowDown, Code, Database, FileCode, Globe, LayoutGrid, Mail, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                IIT Bhilai Student
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Software Engineer & Developer
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Passionate about creating innovative solutions through code. 
                Specializing in full-stack development, AI/ML, and cutting-edge research.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-first lg:order-last animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg z-10"></div>
              <Image
                src="/profile-placeholder.jpg"
                alt="IIT Bhilai Student"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Button variant="ghost" size="icon" asChild>
              <a href="#about" className="animate-bounce">
                <ArrowDown className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="About Me"
            subtitle="Learn more about my background, interests, and aspirations"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hello, I&apos;m <span className="text-primary">Your Name</span></h3>
              <p className="text-muted-foreground mb-4">
                I&apos;m a Computer Science student at IIT Bhilai with a passion for software development and innovation. 
                My academic journey has equipped me with strong foundations in algorithms, data structures, and system design.
              </p>
              <p className="text-muted-foreground mb-4">
                At IIT Bhilai, I&apos;ve had the opportunity to work on cutting-edge research projects, 
                collaborate with brilliant peers, and learn from industry experts. 
                My goal is to create technology that makes a positive impact on society.
              </p>
              <p className="text-muted-foreground mb-6">
                Outside of academics, I enjoy contributing to open-source projects, 
                participating in hackathons, and exploring new technologies.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-background rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-muted-foreground">B.Tech in Computer Science</p>
                <p className="text-muted-foreground">IIT Bhilai</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Interests</h4>
                <p className="text-muted-foreground">Machine Learning</p>
                <p className="text-muted-foreground">Web Development</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Languages</h4>
                <p className="text-muted-foreground">Python, JavaScript</p>
                <p className="text-muted-foreground">C++, Java</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-sm border">
                <h4 className="font-semibold mb-2">Achievements</h4>
                <p className="text-muted-foreground">Dean&apos;s List</p>
                <p className="text-muted-foreground">Hackathon Winner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Technical Skills"
            subtitle="Technologies and tools I work with"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
            <SkillCard name="JavaScript" icon={<Code className="h-8 w-8" />} />
            <SkillCard name="React" icon={<Code className="h-8 w-8" />} />
            <SkillCard name="Node.js" icon={<FileCode className="h-8 w-8" />} />
            <SkillCard name="Python" icon={<Code className="h-8 w-8" />} />
            <SkillCard name="Machine Learning" icon={<Database className="h-8 w-8" />} />
            <SkillCard name="SQL" icon={<Database className="h-8 w-8" />} />
            <SkillCard name="MongoDB" icon={<Database className="h-8 w-8" />} />
            <SkillCard name="AWS" icon={<Globe className="h-8 w-8" />} />
            <SkillCard name="Docker" icon={<LayoutGrid className="h-8 w-8" />} />
            <SkillCard name="GraphQL" icon={<Database className="h-8 w-8" />} />
            <SkillCard name="TypeScript" icon={<Code className="h-8 w-8" />} />
            <SkillCard name="Responsive Design" icon={<Smartphone className="h-8 w-8" />} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Projects"
            subtitle="Showcasing my technical expertise and creativity"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ProjectCard 
              title="Smart Campus Management"
              description="An AI-powered campus management system for IIT Bhilai that streamlines administrative processes and enhances student experience."
              imageSrc="/project1.jpg"
              tags={["React", "Node.js", "MongoDB", "ML"]}
              githubUrl="https://github.com/yourusername/project1"
              demoUrl="https://project1-demo.com"
            />
            <ProjectCard 
              title="Research Paper Recommender"
              description="A machine learning system that analyzes research papers and recommends relevant articles based on user interests and reading history."
              imageSrc="/project2.jpg"
              tags={["Python", "TensorFlow", "NLP", "Flask"]}
              githubUrl="https://github.com/yourusername/project2"
            />
            <ProjectCard 
              title="Blockchain Voting System"
              description="A secure and transparent voting system using blockchain technology designed for student elections."
              imageSrc="/project3.jpg"
              tags={["Solidity", "Ethereum", "React", "Web3.js"]}
              githubUrl="https://github.com/yourusername/project3"
              demoUrl="https://project3-demo.com"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Education/Experience Timeline */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Education & Experience"
            subtitle="My academic and professional journey"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <TimelineItem 
              title="IIT Bhilai"
              subtitle="B.Tech in Computer Science"
              date="2021 - Present"
              description="Pursuing a Bachelor's degree with focus on Artificial Intelligence and Machine Learning. Maintaining a CGPA of 9.2/10."
            />
            <TimelineItem 
              title="Summer Research Internship"
              subtitle="AI Research Lab, IIT Bhilai"
              date="Summer 2023"
              description="Worked on developing deep learning models for image recognition and contributed to a research paper accepted at an international conference."
            />
            <TimelineItem 
              title="Software Development Intern"
              subtitle="Tech Innovators Inc."
              date="Summer 2022"
              description="Developed and maintained web applications using React.js and Node.js. Implemented new features that improved user experience by 30%."
            />
            <TimelineItem 
              title="Senior Secondary Education"
              subtitle="Delhi Public School"
              date="2019 - 2021"
              description="Completed senior secondary education with 95% marks in PCM (Physics, Chemistry, Mathematics)."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Get In Touch"
            subtitle="Have a question or want to work together? Reach out to me."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>student@iitbhilai.ac.in</span>
                </li>
                <li>
                  <p className="mt-4 text-muted-foreground">
                    Currently based in Bhilai, Chhattisgarh, India. 
                    Open to remote opportunities and collaborations.
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
