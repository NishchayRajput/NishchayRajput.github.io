import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { SkillCard } from "@/components/skill-components";
import { TimelineItem } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { ArrowDown, Code, Database, FileCode, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block p-1 mb-6 bg-muted rounded-full text-sm font-medium">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full">Developer</span>
                <span className="px-3 py-1 ml-1">IIT Bhilai</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">Nishchay</span><br />
                <span>Rajput</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Passionate about creating elegant, innovative solutions through code.
                Specializing in <span className="text-primary font-medium">full-stack development</span>, <span className="text-primary font-medium"></span> and <span className="text-primary font-medium">Open Source enthusiast</span> at IIT Bhilai.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-6 hover:shadow-lg transition-all" asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-6 hover:border-primary transition-colors" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden order-first lg:order-last animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-500/20 to-secondary/20 dark:from-primary/30 dark:via-purple-900/30 dark:to-secondary/30 backdrop-blur-sm rounded-2xl z-10"></div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-20"></div>
              <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  {/* Interactive Abstract SVG Design */}
                  <svg viewBox="0 0 500 500" className="absolute w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Animated Circles */}
                    <circle cx="250" cy="250" r="120" stroke="url(#circleGradient1)" strokeWidth="2" className="animate-pulse" />
                    <circle cx="250" cy="250" r="180" stroke="url(#circleGradient2)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: "1s" }} />
                    <circle cx="250" cy="250" r="70" stroke="url(#circleGradient3)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: "2s" }} />
                    
                    {/* Grid Pattern */}
                    <path d="M250,0 L250,500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-primary/20" />
                    <path d="M0,250 L500,250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-primary/20" />
                    
                    {/* Connected Points */}
                    <circle cx="250" cy="100" r="4" fill="url(#dotGradient)" className="animate-ping" style={{ animationDuration: "3s" }} />
                    <circle cx="400" cy="250" r="4" fill="url(#dotGradient)" className="animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }} />
                    <circle cx="250" cy="400" r="4" fill="url(#dotGradient)" className="animate-ping" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
                    <circle cx="100" cy="250" r="4" fill="url(#dotGradient)" className="animate-ping" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
                    
                    <path d="M250,100 L400,250 L250,400 L100,250 Z" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
                    
                    {/* Abstract Geometric Elements */}
                    <path d="M250,250 L350,150 L450,250 L350,350 Z" stroke="currentColor" strokeWidth="1" className="text-primary/30" fill="url(#shapeGradient1)" style={{ transform: "translateX(10px)" }} />
                    <path d="M250,250 L150,150 L50,250 L150,350 Z" stroke="currentColor" strokeWidth="1" className="text-secondary/30" fill="url(#shapeGradient2)" style={{ transform: "translateX(-10px)" }} />
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="circleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" /> {/* blue-500 */}
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" /> {/* violet-500 */}
                      </linearGradient>
                      <linearGradient id="circleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" /> {/* violet-500 */}
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" /> {/* pink-500 */}
                      </linearGradient>
                      <linearGradient id="circleGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.7" /> {/* pink-500 */}
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" /> {/* blue-500 */}
                      </linearGradient>
                      <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
                        <stop offset="100%" stopColor="#8b5cf6" /> {/* violet-500 */}
                      </linearGradient>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" /> {/* blue-500 */}
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" /> {/* violet-500 */}
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" /> {/* pink-500 */}
                      </linearGradient>
                      <linearGradient id="shapeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" /> {/* blue-500 */}
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" /> {/* violet-500 */}
                      </linearGradient>
                      <linearGradient id="shapeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.05" /> {/* violet-500 */}
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.05" /> {/* pink-500 */}
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Code Snippets with Enhanced Styling */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-background/90 dark:bg-background/80 p-4 rounded-lg shadow-lg border border-muted backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <pre className="text-xs md:text-sm font-mono"><span className="text-primary">const</span> <span className="text-green-500">developer</span> = <span className="text-orange-500">&quot;Nishchay&quot;</span>;</pre>
                  </div>
                  
                  <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-background/90 dark:bg-background/80 p-4 rounded-lg shadow-lg rotate-3 border border-muted backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <pre className="text-xs md:text-sm font-mono"><span className="text-blue-500">function</span> <span className="text-yellow-500">createImpact</span>() {}</pre>
                  </div>

                  <div className="absolute top-2/3 left-1/3 transform -translate-y-1/2 bg-background/90 dark:bg-background/80 p-4 rounded-lg shadow-lg -rotate-6 border border-muted backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <pre className="text-xs md:text-sm font-mono"><span className="text-purple-500">class</span> <span className="text-primary">InnovativeSolutions</span> {}</pre>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 z-30 backdrop-blur-sm">
                <p className="font-medium text-foreground">Nishchay Rajput</p>
                <p className="text-muted-foreground text-sm">Computer Science • IIT Bhilai</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 border border-muted hover:border-primary transition-colors" asChild>
              <a href="#about" className="animate-bounce">
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50 relative overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top-right floating triangle */}
          <div className="absolute top-10 right-10 w-16 h-16 md:w-24 md:h-24 animate-float" style={{ animationDelay: "0.5s" }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <polygon points="50,10 90,90 10,90" stroke="url(#aboutGradient1)" strokeWidth="2" fill="url(#aboutFill1)" className="opacity-30" />
              <defs>
                <linearGradient id="aboutGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
                  <stop offset="100%" stopColor="#8b5cf6" /> {/* violet-500 */}
                </linearGradient>
                <linearGradient id="aboutFill1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" /> {/* blue-500 */}
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" /> {/* violet-500 */}
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Bottom-left floating circle */}
          <div className="absolute bottom-20 left-10 w-20 h-20 md:w-32 md:h-32 animate-float" style={{ animationDelay: "1s" }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="50" cy="50" r="40" stroke="url(#aboutGradient2)" strokeWidth="2" fill="url(#aboutFill2)" className="opacity-30" />
              <defs>
                <linearGradient id="aboutGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" /> {/* violet-500 */}
                  <stop offset="100%" stopColor="#ec4899" /> {/* pink-500 */}
                </linearGradient>
                <linearGradient id="aboutFill2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.05" /> {/* violet-500 */}
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.05" /> {/* pink-500 */}
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Middle-right floating square */}
          <div className="absolute top-1/2 -right-10 w-24 h-24 md:w-40 md:h-40 animate-float" style={{ animationDelay: "1.5s" }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="20" y="20" width="60" height="60" rx="4" stroke="url(#aboutGradient3)" strokeWidth="2" fill="url(#aboutFill3)" className="opacity-30" transform="rotate(15, 50, 50)" />
              <defs>
                <linearGradient id="aboutGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" /> {/* pink-500 */}
                  <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
                </linearGradient>
                <linearGradient id="aboutFill3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.05" /> {/* pink-500 */}
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" /> {/* blue-500 */}
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="About Me"
            subtitle="Learn more about my background, interests, and aspirations"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-sm bg-background/30 p-6 md:p-8 rounded-2xl border border-primary/10 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Hello, I&apos;m <span className="text-primary">Nishchay Rajput</span></h3>
              <p className="text-muted-foreground mb-4">
                I&apos;m a Computer Science student at IIT Bhilai, passionate about building impactful technology and constantly learning along the way. With a strong foundation in algorithms, data structures, and system design, I love tackling complex problems and turning ideas into clean, functional software.
                My academic journey has equipped me with strong foundations in algorithms, data structures, and system design.
              </p>
              <p className="text-muted-foreground mb-4">
                At IIT Bhilai, I&apos;ve been fortunate to work on research-driven projects, collaborate with brilliant minds, and learn from industry experts. These experiences have shaped my ability to adapt quickly and approach challenges with curiosity and creativity.
              </p>
              <p className="text-muted-foreground mb-6">
                I&apos;m a fast learner who thrives in collaborative environments, and I&apos;m always eager to connect with like-minded individuals who are driven to build meaningful, user-centered solutions. Outside of academics, I actively contribute to open-source projects and explore emerging trends in UI/UX design and development.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-shadow">
                  <a href="/files/resume-nishchay.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="p-6 bg-background rounded-xl shadow-sm border border-muted hover:border-primary/50 transition-colors group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <h4 className="font-semibold mb-3 text-lg flex items-center">
                  <span className="bg-primary/10 text-primary p-1.5 rounded-md mr-2 group-hover:scale-110 transition-transform duration-300">🎓</span>
                  Education
                </h4>
                <p className="text-foreground font-medium">B.Tech in Computer Science</p>
                <p className="text-muted-foreground">IIT Bhilai</p>
              </div>
              <div className="p-6 bg-background rounded-xl shadow-sm border border-muted hover:border-primary/50 transition-colors group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <h4 className="font-semibold mb-3 text-lg flex items-center">
                  <span className="bg-primary/10 text-primary p-1.5 rounded-md mr-2 group-hover:scale-110 transition-transform duration-300">🔍</span>
                  Interests
                </h4>
                <p className="text-foreground font-medium">Development</p>
                <p className="text-muted-foreground">OpenSource</p>
              </div>
              <div className="p-6 bg-background rounded-xl shadow-sm border border-muted hover:border-primary/50 transition-colors group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <h4 className="font-semibold mb-3 text-lg flex items-center">
                  <span className="bg-primary/10 text-primary p-1.5 rounded-md mr-2 group-hover:scale-110 transition-transform duration-300">💻</span>
                  Languages
                </h4>
                <p className="text-foreground font-medium">C, C++, </p>
                <p className="text-muted-foreground">JavaScript/TS</p>
              </div>
              <div className="p-6 bg-background rounded-xl shadow-sm border border-muted hover:border-primary/50 transition-colors group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <h4 className="font-semibold mb-3 text-lg flex items-center">
                  <span className="bg-primary/10 text-primary p-1.5 rounded-md mr-2 group-hover:scale-110 transition-transform duration-300">💡</span>
                  Core Values
                </h4>
                <p className="text-foreground font-medium">Curiosity, Consistency</p>
                <p className="text-muted-foreground">Building with Purpose</p>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        {/* Abstract wave background */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path 
              d="M0,128L48,133.3C96,139,192,149,288,154.7C384,160,480,160,576,133.3C672,107,768,53,864,58.7C960,64,1056,128,1152,144C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#skillWave1)" 
              className="opacity-10 animate-float"
              style={{ animationDuration: '15s' }}
            />
            <path 
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,240C672,245,768,235,864,202.7C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#skillWave2)" 
              className="opacity-10 animate-float" 
              style={{ animationDuration: '20s', animationDelay: '1s' }}
            />
            <defs>
              <linearGradient id="skillWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="skillWave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Particles */}
          <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-40 right-1/3 w-3 h-3 rounded-full bg-secondary/30 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-40 left-1/3 w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDuration: '3.5s' }} />
          <div className="absolute top-60 right-1/4 w-3 h-3 rounded-full bg-secondary/30 animate-pulse" style={{ animationDuration: '4.5s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="Technical Skills"
            subtitle="Technologies and tools I work with"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12 animate-fade-in-up">
            {/* Languages */}
            <SkillCard name="C" icon={<Code className="h-8 w-8" />} />
            <SkillCard name="C++" icon={<Code className="h-8 w-8" />} />
            <SkillCard name="JavaScript" icon={<FileCode className="h-8 w-8" />} />
            <SkillCard name="TypeScript" icon={<FileCode className="h-8 w-8" />} />

            {/* Frontend */}
            <SkillCard name="React" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
            } />
            <SkillCard name="Next.js" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.747c-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg>
            } />
            <SkillCard name="HTML" icon={<Code className="h-8 w-8" />} />
            <SkillCard name="CSS" icon={<Code className="h-8 w-8" />} />
            <SkillCard name="PHP" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174h-1.095l-.704 3.625H9.635l1.23-6.327h1.118l-.327 1.682h1.208c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.117zm7.484-.17c-.141.257-.33.49-.561.703-.261.25-.575.438-.917.551-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751a2.82 2.82 0 0 1-.305.847zm-2.807-3.578c-.556 0-.97.105-1.242.314-.272.21-.455.559-.55 1.049-.092.47-.05.802.124.995.175.193.523.29 1.047.29h.944l.515-2.648h-.838z" />
              </svg>
            } />
            <SkillCard name="Tailwind" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
            } />
            <SkillCard name="Flutter" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
              </svg>
            } />

            {/* Backend & Database */}
            <SkillCard name="Node.js" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
              </svg>
            } />
            <SkillCard name="Express.js" icon={<FileCode className="h-8 w-8" />} />
            <SkillCard name="Firebase" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
              </svg>
            } />
            <SkillCard name="MongoDB" icon={<Database className="h-8 w-8" />} />
            <SkillCard name="MySQL" icon={<Database className="h-8 w-8" />} />

            {/* Developer Tools */}
            <SkillCard name="Git" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
              </svg>
            } />
            <SkillCard name="GitHub" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            } />
            <SkillCard name="Docker" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m0-2.716h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186M24 12.576c0 1.657-1.515 2.4-2.37 2.4-.86 0-1.693-.475-1.693-1.32 0-.156.034-.305.098-.444a.863.863 0 01.168-.259 1.88 1.88 0 01.28-.244c.433-.283.7-.318.804-.318h.098v-.383a1.656 1.656 0 01.505-1.304.839.839 0 00-.145-.038 9.473 9.473 0 00-.518-.044 5.475 5.475 0 00-.658.044 2.898 2.898 0 00-.406.07c-.077.022-.152.052-.228.08V14.1c0 3.585-3.333 4.228-5.15 4.228-1.256 0-5.342-.419-5.342-3.668a2.012 2.012 0 01.011-.217l.014-.212c.035-.235.05-.313.293-.633C10.145 13 11.304 12.9 12.348 12.9h1.883c.186 0 .31-.04.31-.146 0-.398-1.027-.909-1.325-.909h-.126c-.139 0-.24.033-.317.064a2.36 2.36 0 00-.09.039.642.642 0 01-.247.065.608.608 0 01-.4-.176.976.976 0 01-.194-.307 2.187 2.187 0 01-.132-.616c0-.24.069-.456.211-.615a.904.904 0 01.74-.322c.246 0 .37.08.573.175.602.3 1.255.468 2.305.468 1.394 0 2.144-.396 2.499-.552a.107.107 0 00.046-.088.108.108 0 00-.064-.098c-.114-.064-.765-.348-2.325-.348-.5 0-.766-.3-1.006-.57a2.858 2.858 0 01-.256-.375.622.622 0 00-.52-.296c-.4 0-.654.347-.654.75 0 .2.08.398.248.554.018.019.035.036.05.053-.612 0-1.895-.159-2.58-.469a1.022 1.022 0 01-.345-.252 1.094 1.094 0 01-.232-.356 1.307 1.307 0 01-.089-.511c0-.762.522-1.394 1.254-1.536.143-.026.428-.064.692-.088.168-.014.32-.025.416-.032a.25.25 0 00.213-.165c.115-.28.124-.347.15-.712 0-.156-.015-.269-.032-.369a.886.886 0 00-.183-.411.724.724 0 00-.61-.28c-.306 0-.467.21-.533.352a1.586 1.586 0 00-.118.368c-.017.083-.03.17-.046.264-.01.066-.022.136-.036.213-.126.698-.467.908-.825.908a.545.545 0 01-.287-.082c-.062-.04-.117-.09-.164-.143a.636.636 0 01-.142-.232 1.04 1.04 0 01-.081-.387c0-.26.108-.625.412-.835.288-.194 1.045-.712 1.045-1.313 0-.66-.657-1.298-1.393-1.298-.192 0-.384.045-.553.126a1.444 1.444 0 00-.422.312c-.119.128-.213.275-.277.44a1.473 1.473 0 00-.09.525c0 .373.154.705.426.938.056.047.117.086.185.117a.51.51 0 01-.344.15.538.538 0 01-.535-.537c0-.28-.034-.555-.098-.823-.159-.667-.468-1.308-.905-1.862-.17-.216-.367-.417-.582-.6a2.46 2.46 0 00-.661-.41 2.133 2.133 0 00-.773-.137c-.887 0-1.36.482-1.36.877 0 .208.123.332.214.388.34.213.51.416.51.632a.575.575 0 01-.578.575.577.577 0 01-.578-.575c0-.12-.014-.295-.145-.521-.198-.346-.411-.482-.55-.519a.633.633 0 00-.19-.03c-.202 0-.456.113-.736.334a3.737 3.737 0 00-.742.799 5.523 5.523 0 00-.87 1.764 6.936 6.936 0 00-.191.996C.395 8.695.22 9.336.22 10c0 1.306.52 2.478 1.363 3.333.845.857 2.012 1.388 3.3 1.388.724 0 1.408-.156 2.02-.427a5.023 5.023 0 001.66-1.202c.483-.501.874-1.085 1.134-1.713.261-.629.394-1.297.394-1.998a5.3 5.3 0 00-.126-1.155.463.463 0 01-.016-.12c0-.16.091-.308.252-.308a.473.473 0 01.155.026c.05.02.09.05.12.087a.368.368 0 01.71.132v.2c.016.096.027.193.036.29.01.116.017.233.017.349 0 .727-.124 1.446-.366 2.118-.243.674-.6 1.28-1.045 1.805a6.227 6.227 0 01-1.599 1.352 7.06 7.06 0 01-1.931.684c-.002 0-.003 0-.005.002v2.666a.186.186 0 00.187.188h17.264A1.57 1.57 0 0024 16.805v-4.23" />
              </svg>
            } />
            <SkillCard name="Bash" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.483 21.3H24L14.025 2.7H0l10.385 18.6H5.483zm4.93-2.7l-1.81-5.88 4.324-9.708 4.439 15.588h-6.953z" />
              </svg>
            } />
            <SkillCard name="LaTeX" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.176 3.924c-.858 0-1.55.698-1.55 1.576 0 .878.69 1.575 1.55 1.575.862 0 1.553-.697 1.553-1.575 0-.878-.688-1.576-1.553-1.576zm10.561 1.226a.38.38 0 0 0-.381.38v2.408c-.75.075-1.478.23-2.187.483-.517.186-.998.412-1.436.684a5.91 5.91 0 0 0-.684-1.177c-.51-.665-1.24-1.082-2.06-1.082-.647 0-1.296.238-1.868.516-1.027.501-2.071 1.416-3.178 2.535-.132.133-.264.286-.382.428v.03l.14.136c.122.121.308.306.506.223.092-.03.154-.097.229-.174.487-.487.882-.851 1.283-1.162.395-.304.709-.486.987-.577.142-.046.278-.07.4-.07.34 0 .592.13.814.382.22.255.43.671.643 1.273.14.391.27.842.403 1.373-.564.486-1.067.999-1.476 1.534-.818 1.07-1.386 2.232-1.386 3.22 0 .802.285 1.41.767 1.845.483.436 1.146.68 1.984.68 1.723 0 3.776-1.532 5.735-4.208 1.177-.225 2.. h3.736v4.68h1.319v-4.68h1.612v-.963h-1.612V6.072c0-.324-.173-.543-.427-.543-.172 0-.382.085-.615.254-.469.34-1.142.962-1.95 1.74-.058.055-.1.104-.127.145-.006 0-.012-.001-.018-.002-.587-4.946-1.258-6.766-3.776-6.766-2.181 0-3.237 1.574-3.237 3.336 0 2.394 1.582 3.729 4.287 3.428.326 1.063.561 2.154.709 3.302h1.319c-.178-1.355-.476-2.592-.86-3.74 1.226-.301 2.112-.988 2.446-1.943h-.635c-.359.748-1.043 1.248-1.99 1.495-.368-1.054-.843-2.003-1.406-2.812 1.01-.809 1.691-1.354 2.046-1.623.088.541.17 1.75.17 2.023v2.332c1.163.025 2.336.197 2.33.972-.004.77.006 1.348.018 1.735a9.303 9.303 0 0 1-.018.746c-.096 1.764-1.838 3.932-4.588 3.932-.379 0-.788-.035-1.191-.151-.96.515-1.875.698-2.717.928a1.991 1.991 0 0 1-.067-.507V5.53a.38.38 0 0 0-.381-.38h-1.05zm6.22 7.967v1.646c-1.25.262-2.15.545-2.15.992 0 .447.9.894 2.15 1.156v1.814c-3.418-.752-5.394-1.383-5.394-3.021 0-1.639 1.976-2.737 5.393-3.587zm3.424-6.95l-1.069.961c-.388-.43-.802-.827-1.244-1.189l.987-.885c.467.349.91.733 1.326 1.112zm-13.08 2.341c.945 0 1.818.175 2.616.507.734.304 1.445.758 2.13 1.356-1.381 1.135-2.615 2.018-3.951 2.709-.599.311-1.222.577-1.89.766-2.009-1.442-3.249-3.126-3.249-4.844 0-1.614 1.37-3.076 3.473-3.076 1.48 0 2.341 1.267 2.341 2.582zm0 12.576c-.399 0-.792-.087-1.152-.275-.365-.193-.664-.5-.859-.934-.16-.356-.244-.798-.244-1.338 0-.718.212-1.536.635-2.42.16-.335.355-.68.588-1.03.372-.055.748-.088 1.123-.097.9-.022 1.803.061 2.683.248-.76 1.772-1.962 4.214-3.478 5.337a2.063 2.063 0 0 1-1.296.509z" />
              </svg>
            } />
            <SkillCard name="Markdown" icon={<FileCode className="h-8 w-8" />} />
            <SkillCard name="GDB" icon={<Code className="h-8 w-8" />} />

            {/* DSA */}
            <SkillCard name="DSA" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h20M5 20v-4m14 4v-4M12 20v-4M5 12a4 4 0 0 1 0-8h14a4 4 0 0 1 0 8H5z" />
                <circle cx="8" cy="8" r="1" />
                <circle cx="16" cy="8" r="1" />
              </svg>
            } />
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
              title="Feedback System"
              description=" Developed a digital feedback portal using Next.js to streamline anonymous student feedback, replacing manual paperwork and improving efficiency across departments"
              imageSrc="/project1.jpg"
              tags={["React", "Next.js", "Express", "Node", "MongoDB"]}
              githubUrl="https://github.com/NishchayRajput?tab=repositories&q=CQI"
            />
            <ProjectCard
              title="Chcommune "
              description=" Created a comprehensive full-stack Blogs web application leveraging Node.js and Express.js for backend
functionality and React for the frontend, ensuring seamless user experiences."
              imageSrc="/project2.jpg"
              tags={["JavaScript", "MongoDB", "Node", "Express", "React"]}
              githubUrl="https://github.com/NishchayRajput/CollabHous"
              demoUrl="https://www.chcommune.com/"
            />
            <ProjectCard
              title="SAR Image Colorization"
              description="Implemented a deep learning model to colorize grayscale SAR images for better visual interpretation from a
research paper."
              imageSrc="/project3.jpg"
              tags={["ML", "Python", "PyTorch"]}
              githubUrl="https://github.com/nishant9083/ColorSAR"
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
      <section id="education" className="py-20 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 animate-gradient-shift opacity-70"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left side decorative elements */}
          <svg className="absolute left-0 top-20 h-40 w-40 text-primary/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90.1,-16.3,88.6,-0.9C87.2,14.6,81.5,29.2,73.1,42.2C64.6,55.2,53.4,66.6,40.3,74.7C27.2,82.7,13.6,87.4,-0.7,88.6C-15.1,89.8,-30.1,87.6,-43.9,81.3C-57.8,75,-70.3,64.7,-79.3,51.4C-88.2,38.2,-93.5,21.1,-93.9,4C-94.3,-13.1,-89.8,-30.1,-81,-43.9C-72.1,-57.7,-59,-68.3,-44.7,-75.4C-30.4,-82.6,-15.2,-86.3,-0.3,-85.8C14.6,-85.3,30.6,-83.7,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
          
          {/* Right side decorative elements */}
          <svg className="absolute right-0 bottom-20 h-40 w-40 text-secondary/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M47.7,-79.1C62.9,-71.3,77.2,-60.4,83.5,-45.6C89.8,-30.9,88.1,-12.1,83.9,5C79.7,22.1,73,37.7,63.4,51.5C53.8,65.3,41.2,77.4,26.5,82.6C11.9,87.8,-4.8,86.2,-19.7,80.5C-34.7,74.8,-47.9,65,-59,52.4C-70.2,39.8,-79.2,24.3,-83.8,7C-88.4,-10.2,-88.6,-29.3,-80.2,-43.9C-71.8,-58.5,-54.9,-68.7,-38.9,-76.2C-23,-83.6,-8,-88.4,4.3,-85.6C16.5,-82.7,32.5,-87,47.7,-79.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="Education & Experience"
            subtitle="My academic and professional journey"
          />
          <div className="mt-12 max-w-3xl mx-auto backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-primary/10 shadow-lg">
            <TimelineItem
              title="Full Stack Engineer"
              subtitle="Phinite.ai | Remote"
              date="April 2025 - Present"
              description="Building an AI-driven conversational workflow platform with web and mobile applications."
              highlights={[
                "Building a mobile and web-based MVP for an AI-driven conversational workflow platform",
                "Developing using the MERN stack (MongoDB, Express.js, React.js, Node.js) for web",
                "Implementing native mobile apps with Kotlin/Java (Android) & Swift (iOS)",
                "Contributing to full-stack integration and early-stage product direction"
              ]}
            />
            <TimelineItem
              title="Project Intern"
              subtitle="Under Dr. Dhiman Saha | IIT Bhilai"
              date="May 2025 - June 2025"
              description="Conducted comprehensive testing for the TrusToken security solution."
              highlights={[
                "Performed rigorous security testing for the TrusToken authentication system",
                "Identified and documented vulnerabilities in the token-based verification process",
                "Collaborated with development team to implement security improvements",
                "Created detailed test reports and documentation for stakeholders"
              ]}
            />
            <TimelineItem
              title="Project Intern"
              subtitle="Under Dr. Dhiman Saha | IIT Bhilai"
              date="May 2024 - July 2024"
              description="Developed secure authentication solutions for academic and communication applications."
              highlights={[
                "Built a Flutter-based attendance app for 1000+ students with secure ID card data capture",
                "Integrated Made-in-India USB token for enhanced verification and fraud prevention",
                "Implemented USB token authentication and encryption in a P2P video conferencing app",
                "Collaborated with CDAC to develop robust token-based security solutions"
              ]}
            />
            
            <TimelineItem
              title="IIT Bhilai"
              subtitle="B.Tech in Computer Science"
              date="2021 - Present"
              description="Pursuing a Bachelor's degree with focus on Development and new  technologies."
              highlights={[
                "Coordinator of OpenLake (OpenSource Club) at IIT Bhilai",
                "Student Mentor at Student Mentorship Program, IIT Bhilai",
                "Active participant in technical events and hackathons"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        
        {/* Animated geometric elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Circles */}
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full border border-primary/10 opacity-50 animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full border border-primary/5 opacity-30 animate-spin" style={{ animationDuration: '40s' }}></div>
          
          {/* Floating elements */}
          <div className="absolute bottom-[20%] right-[15%] animate-float" style={{ animationDuration: '6s' }}>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60,20 L100,80 L20,80 Z" fill="none" stroke="url(#contactGradient1)" strokeWidth="1.5" opacity="0.4" />
              <defs>
                <linearGradient id="contactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
                  <stop offset="100%" stopColor="#8b5cf6" /> {/* violet-500 */}
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="absolute top-[25%] left-[10%] animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="60" height="60" rx="8" fill="none" stroke="url(#contactGradient2)" strokeWidth="1.5" opacity="0.4" />
              <defs>
                <linearGradient id="contactGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" /> {/* violet-500 */}
                  <stop offset="100%" stopColor="#ec4899" /> {/* pink-500 */}
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="Get In Touch"
            subtitle="Have a question or want to work together? Reach out to me."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-muted hover:border-primary/30 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-3">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                Contact Information
              </h3>
              <ul className="space-y-6 mt-8">
                <li className="flex items-center gap-4 group">
                  <div className="bg-muted h-10 w-10 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:nishchay@iitbhilai.ac.in" className="font-medium hover:text-primary">nishchay@iitbhilai.ac.in</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="bg-muted h-10 w-10 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">IIT Bhilai, Chhattisgarh, India</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4 flex items-center before:content-[''] before:block before:w-5 before:h-0.5 before:bg-primary before:mr-2">Connect With Me</h4>
                <div className="flex gap-3">
                  <a href="https://github.com/nishchayrajput" target="_blank" rel="noopener noreferrer"
                    className="bg-muted h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </a>
                  <a href="https://linkedin.com/in/nishchayrajput" target="_blank" rel="noopener noreferrer"
                    className="bg-muted h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href="https://twitter.com/nishchayrajput" target="_blank" rel="noopener noreferrer"
                    className="bg-muted h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                  </a>
                  <a href="https://instagram.com/nishchayrajput" target="_blank" rel="noopener noreferrer"
                    className="bg-muted h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-sm border border-muted hover:border-primary/30 transition-colors duration-300">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
