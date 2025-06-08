import { SectionHeader } from "@/components/section-header";
import { SkillCard, SkillProgress, SoftSkillCard } from "@/components/skill-components";
import { BookOpen, Brain, Code, Database, FileCode, Globe, LayoutGrid, Layers } from "lucide-react";
export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section with animated background */}
      <div className="relative overflow-hidden py-20 bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/5 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-primary/5 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="My Skills"
            subtitle="Technologies and tools I've mastered throughout my journey"
            className="mb-16"
          />

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-muted-foreground text-lg">
              As a developer, I&apos;ve cultivated a diverse range of technical and soft skills
              that allow me to tackle complex challenges and deliver creative solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Interactive skill categories */}
        <div className="space-y-24">
          {/* Technical Skills Grid Layout */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left column - Languages */}
              <div className="col-span-1">
                <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                    <span className="bg-primary/10 p-2 rounded-lg">
                      <Code className="h-4 w-4 text-primary" />
                    </span>
                    Programming Languages
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <SkillCard name="Python" icon={<Code className="h-8 w-8" />} />
                    <SkillCard name="JavaScript" icon={<Code className="h-8 w-8" />} />
                    <SkillCard name="TypeScript" icon={<Code className="h-8 w-8" />} />
                    <SkillCard name="C++" icon={<Code className="h-8 w-8" />} />
                    <SkillCard name="Java" icon={<Code className="h-8 w-8" />} />
                    <SkillCard name="SQL" icon={<Database className="h-8 w-8" />} />
                  </div>
                </div>
              </div>
              
              {/* Middle column - Frontend */}
              <div className="col-span-1">
                <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                    <span className="bg-primary/10 p-2 rounded-lg">
                      <Layers className="h-4 w-4 text-primary" />
                    </span>
                    Frontend Development
                  </h3>
                  
                  <div className="space-y-4">
                    <SkillProgress 
                      name="React.js" 
                      percentage={90} 
                      icon={<Layers className="h-5 w-5" />} 
                    />
                    <SkillProgress 
                      name="Next.js" 
                      percentage={85} 
                      icon={<Layers className="h-5 w-5" />} 
                    />
                    <SkillProgress 
                      name="HTML/CSS" 
                      percentage={95} 
                      icon={<Code className="h-5 w-5" />} 
                    />
                    <SkillProgress 
                      name="Tailwind CSS" 
                      percentage={92} 
                      icon={<Code className="h-5 w-5" />} 
                    />
                  </div>
                </div>
              </div>
              
              {/* Right column - Backend */}
              <div className="col-span-1">
                <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                    <span className="bg-primary/10 p-2 rounded-lg">
                      <FileCode className="h-4 w-4 text-primary" />
                    </span>
                    Backend Development
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <SkillCard name="Node.js" icon={<FileCode className="h-8 w-8" />} />
                    <SkillCard name="Express" icon={<FileCode className="h-8 w-8" />} />
                    <SkillCard name="Flask" icon={<FileCode className="h-8 w-8" />} />
                    <SkillCard name="Django" icon={<FileCode className="h-8 w-8" />} />
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <SkillProgress 
                      name="RESTful APIs" 
                      percentage={88} 
                      icon={<Globe className="h-5 w-5" />} 
                    />
                    <SkillProgress 
                      name="GraphQL" 
                      percentage={78} 
                      icon={<Database className="h-5 w-5" />} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Technical Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left column - Database & Cloud */}
            <div>
              <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-lg">
                    <Database className="h-4 w-4 text-primary" />
                  </span>
                  Database & Cloud Technologies
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <SkillCard name="MongoDB" icon={<Database className="h-8 w-8" />} />
                  <SkillCard name="PostgreSQL" icon={<Database className="h-8 w-8" />} />
                  <SkillCard name="MySQL" icon={<Database className="h-8 w-8" />} />
                  <SkillCard name="AWS" icon={<Globe className="h-8 w-8" />} />
                  <SkillCard name="Firebase" icon={<Database className="h-8 w-8" />} />
                </div>
              </div>
            </div>
            
            {/* Right column - ML & AI */}
            <div>
              <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-lg">
                    <Brain className="h-4 w-4 text-primary" />
                  </span>
                  Machine Learning & AI
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SkillProgress 
                    name="TensorFlow" 
                    percentage={85} 
                    icon={<Brain className="h-5 w-5" />} 
                  />
                  <SkillProgress 
                    name="PyTorch" 
                    percentage={80} 
                    icon={<Brain className="h-5 w-5" />} 
                  />
                  <SkillProgress 
                    name="Computer Vision" 
                    percentage={75} 
                    icon={<Globe className="h-5 w-5" />} 
                  />
                  <SkillProgress 
                    name="NLP" 
                    percentage={78} 
                    icon={<BookOpen className="h-5 w-5" />} 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* DevOps & Tools */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <LayoutGrid className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">DevOps & Development Tools</h2>
            </div>
            
            <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <SkillCard name="Git" icon={<Code className="h-8 w-8" />} />
                <SkillCard name="Docker" icon={<LayoutGrid className="h-8 w-8" />} />
                <SkillCard name="CI/CD" icon={<LayoutGrid className="h-8 w-8" />} />
                <SkillCard name="Linux" icon={<LayoutGrid className="h-8 w-8" />} />
                <SkillCard name="Agile" icon={<LayoutGrid className="h-8 w-8" />} />
                <SkillCard name="GitHub Actions" icon={<Code className="h-8 w-8" />} />
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Professional Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <SoftSkillCard 
                title="Team Collaboration"
                description="Experienced in working with diverse teams, collaborating effectively to deliver projects on time."
              />
              <SoftSkillCard 
                title="Problem Solving"
                description="Strong analytical skills with a methodical approach to troubleshooting and problem resolution."
              />
              <SoftSkillCard 
                title="Communication"
                description="Able to clearly communicate technical concepts to both technical and non-technical audiences."
              />
              <SoftSkillCard 
                title="Time Management"
                description="Efficient in managing multiple tasks and projects while meeting deadlines."
              />
              <SoftSkillCard 
                title="Adaptability"
                description="Quick to learn new technologies and adapt to changing project requirements."
              />
              <SoftSkillCard 
                title="Leadership"
                description="Experience leading project teams and mentoring junior developers."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
