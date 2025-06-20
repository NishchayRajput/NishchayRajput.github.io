import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { SkillCard } from "@/components/skill-components";
import { TimelineItem } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { ArrowDown, Code,  Mail } from "lucide-react";
import Image from "next/image";

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
                    <pre className="text-xs md:text-sm font-mono"><span className="text-blue-500">function</span> <span className="text-yellow-500">createImpact</span>() { }</pre>
                  </div>

                  <div className="absolute top-2/3 left-1/3 transform -translate-y-1/2 bg-background/90 dark:bg-background/80 p-4 rounded-lg shadow-lg -rotate-6 border border-muted backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <pre className="text-xs md:text-sm font-mono"><span className="text-purple-500">class</span> <span className="text-primary">InnovativeSolutions</span> { }</pre>
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
            <SkillCard name="C" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/3600/3600912.png" alt="C" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="C++" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" alt="C++" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="JavaScript" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JavaScript" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="TypeScript" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png" alt="TypeScript" width={32} height={32} className="h-8 w-8" />
            } />

            {/* Frontend */}
            <SkillCard name="React" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="React" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="Next.js" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.747c-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg>
            } />
            <SkillCard name="HTML" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt="HTML" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="CSS" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="CSS" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="PHP" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968332.png" alt="PHP" width={32} height={32} className="h-8 w-8" />
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
              <Image src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="Node.js" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="Express.js" icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" fill="#fff" height="32px"><path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z" /></svg>
            } />
            <SkillCard name="Firebase" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
              </svg>
            } />
            <SkillCard name="MongoDB" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/2906/2906274.png" alt="MongoDB" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="MySQL" icon={
              <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968313.png" alt="MySQL" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="Supabase" icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px"><g id="Слой_1"><path fill="#71c674" d="M43.9,22.5L27.5,43.3c-1.2,1.4-3.5,0.6-3.5-1.2V30H6.6c-2.1,0-3.3-2.5-2-4.1L20.7,5.1c1.1-1.5,3.4-0.7,3.4,1.2 v12.1h17.7C44.1,18.4,45.3,20.8,43.9,22.5z" /></g></svg>
            } />

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
              <Image src="https://cdn-icons-png.flaticon.com/128/919/919853.png" alt="Docker" width={32} height={32} className="h-8 w-8" />
            } />
            <SkillCard name="Terraform" icon={
              <svg className="h-8 w-8" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <g fillRule="evenodd" clipRule="evenodd">
                  <path d="M5.825 2.82l4.35 2.524v5.052L5.825 7.87V2.82zM10.651 5.344v5.052L15 7.87V2.82l-4.349 2.524zM1 0v5.05l4.349 2.527V2.526L1 0zM5.825 13.474L10.174 16v-5.051L5.825 8.423v5.051z" />
                </g>
              </svg>
            } />
            <SkillCard name="Jenkins" icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px"><path fill="#ffe0b2" d="M15.2,33.5c-0.5,0.3-8.2,5.2-8.2,5.5c0,0.4,0,0.4,0,0.4L8.4,43h31.2c0,0,1.5-4.8,1.4-6 c0-0.6-5-3.9-5-3.9s3.9-3.9,4-12.4c0-0.8,0-1.6-0.1-2.4C39.2,8.7,33.1,5.3,26.7,5c-6.5-0.2-10.1,2.8-10.1,2.8s-4.1,1.4-4.5,4.7 c0,0-3.2,0.6-1.5,7.1C9.3,20.6,9,22,9,23c0,1.3,0.4,2.8,1.2,3.7c1.7,1.8,3.1,1.4,3.1,1.4S13.9,31.3,15.2,33.5z" /><path fill="#f44336" d="M36.8,36.9C36.6,35.6,36,35,34.7,35h-0.1l-0.1,0c-0.4,0.1-1,0.3-2.7,1.5l-1,0.7 C30.6,37.1,30.3,37,30,37c-0.5,0-0.9,0.2-1.3,0.5l-1-0.5L26,36.1c-0.9-0.4-1.8-0.7-2.5-0.7c-0.5,0-0.9,0.1-1.3,0.3 c-0.5,0.4-0.7,1-0.6,1.8c0,0.4,0.1,0.9,0.1,1.3c0.2,2.1,0.3,3.6,2.3,3.7c0.1,0,0.2,0,0.3,0c1.1,0,2.4-0.4,3.6-1.3l0.9-0.6 c0.3,0.2,0.7,0.4,1.1,0.4c0.5,0,0.9-0.2,1.2-0.4l1.4,0.3c0.6,0.1,1.1,0.2,1.6,0.2l0.4,0c0.5,0,1,0,1.5-0.3c0.6-0.3,0.9-1,0.9-2.1 c0-0.5-0.1-1-0.1-1.4L36.8,36.9z" /><path fill="#fff" d="M21.7,38.9c0-0.4-0.1-0.8-0.1-1.3c-0.1-0.6,0-1,0.2-1.4c-5-0.1-6.6-2.7-6.6-2.7s-0.3,1.6,1.1,3.4 c2.1,2.5,5.3,2.8,5.3,2.8h0.2C21.8,39.5,21.8,39.2,21.7,38.9z" /><path fill="#546e7a" d="M22.9,43l-0.7-1.4c-0.1-0.3-0.2-0.6-0.3-1.1l-0.1-0.7l-0.7-0.1c-0.9-0.2-3.1-0.8-4.7-2.7 c-0.5-0.6-0.8-1.3-1-2L15,33.7l-1.1,0.7c-2,1.3-5.3,3.4-6.4,4.3l-0.6,0.5L8.4,43L22.9,43L22.9,43z" /><path fill="#455a64" d="M12.2,43h10.7l-0.7-1.4c-0.1-0.3-0.2-0.6-0.3-1.1l-0.1-0.7l-0.7-0.1c-0.9-0.2-3.1-0.8-4.7-2.7 c-0.1-0.1-0.2-0.3-0.3-0.4L11,40L12.2,43z" /><path fill="#546e7a" d="M40.7,36.5c-0.6-0.6-2.4-1.9-3.1-2.4l-0.7-0.5c-0.2,0.2-0.6,0.7-1.3,1.2l0.7,0.7 c0.3,0.3,0.5,0.8,0.6,1.3l0,0.3c0.1,0.4,0.1,0.9,0.1,1.4c0,1.7-0.6,2-0.9,2.1c-0.2,0.1-0.5,0.2-0.8,0.2l0.1,2h4.1l0.2-0.7 c0.5-1.6,1.1-3.9,1.2-4.9l0-0.5L40.7,36.5z" /><path fill="#455a64" d="M39.6,43l0.2-0.7c0.3-0.8,0.5-1.9,0.8-2.8l-3.7-2c0,0.3,0.1,0.7,0.1,1.1c0,1.7-0.6,2-0.9,2.1 c-0.2,0.1-0.5,0.2-0.8,0.2l0.1,2L39.6,43L39.6,43z" /><path fill="#616161" d="M10.3,19.8C10.3,19.8,10.4,19.7,10.3,19.8L10.3,19.8l0.1-0.1c0.5-0.4,1.2-0.7,1.8-0.7 c0.6,0,0.9,0.2,1.2,0.3c1.3,0.7,1.6,2,1.7,2.9l0,0l0,0.1l0,0.1c0.6-0.2,1.2-0.4,1.4-0.5c0-0.1,0-0.3-0.1-0.6 c-0.1-0.4-0.2-0.9-0.4-1.4c-0.4-1.1-0.3-2.5,0.3-4.3l0.1-0.2c0.1-0.4,0.3-0.8,0.3-1.1c0-0.3,0.1-0.6,0.1-0.7c0-0.3-0.1-0.5-0.2-0.8 l-0.2-0.5l0.3-0.5c0.9-1.5,4.2-6.5,10.9-6.5c0.2,0,0.4,0,0.7,0l-0.2,0C27.7,5.1,27.2,5,26.7,5c-0.2,0-0.5,0-0.7,0l0,0 c-5.4,0-8.7,2.3-9.3,2.7l-0.1,0.1l-0.1,0.1c-0.6,0.2-3.7,1.5-4.3,4.2L12,12.4l-0.4,0.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.7,1.2-0.8,3-0.3,5.5l0.1,0.5L10.1,20c0,0-0.1,0.1-0.1,0.1C10.1,20,10.2,19.9,10.3,19.8z" /><path fill="#263238" d="M28 41H34V43H28zM14.2 22.4c-.1-.9-.4-1.7-1.1-2.1-.3-.1-.5-.2-.8-.2-.5 0-1.1.2-1.6.9l-.7-2c.9-.5 1.7-.8 2.5-.8.5 0 1 .1 1.5.3.4.2.8.5 1.1.8-.2-1.4.1-2.9.5-4.1.2-.5.3-1 .4-1.3.1-.6 0-.7-.2-1-1.9.2-3.5.7-3.5.7l-.5-1.9c.1 0 2.1-.6 4.4-.8l.7-.1.3.6c0 0 .1.1.1.2.3.3.7.9.8 1.9 0 .2 0 .6-.1.9-.1.5-.3.9-.4 1.5-.4 1.2-.7 2.6-.3 3.6.2.6.3 1.2.4 1.6.1.4.2 1.3-.2 1.6-.4.3-2.7 1-2.7 1S14.3 23.3 14.2 22.4z" /><path fill="#263238" d="M17.5,12.6l-1.8-0.8c0-0.1,3.7-8.2,13-7.6l-0.1,2C20.6,5.8,17.5,12.6,17.5,12.6z" /><path fill="#fff" d="M22,36.2c-5.1,0-6.8-2.7-6.8-2.7s-0.3,1.6,1.1,3.4c2.1,2.5,5.3,2.8,5.3,2.8" /><path fill="#263238" d="M21.5 40.7c-.1 0-3.6-.4-5.9-3.2-1.7-2.2-1.4-4-1.3-4.2l.5-2.6 1.4 2.3c.1.1 1.5 2.2 5.9 2.2v2c-2.1 0-3.7-.4-4.9-1 0 0 0 0 0 .1 1.8 2.1 4.5 2.4 4.6 2.4L21.5 40.7zM34.7 42c-.1 0-.2 0-.3 0-1.8 0-3.5-.6-3.6-.6l.7-1.9c0 0 1.4.5 2.8.5l.1 0c.5 0 1 0 1.3-.1C36 39.7 36 39 36 38.6c0-.4-.1-.9-.1-1.3l0-.3c-.1-.8-.4-1.1-1.2-1.1-.6.1-2.5 1.5-3.2 2L31 38.3l-1.2-1.6.4-.3c1.9-1.4 3.4-2.4 4.4-2.4 1.8 0 2.9 1 3.2 2.8l0 .3c.1.4.1 1 .2 1.5 0 1.5-.4 2.6-1.4 3C35.9 42 35.3 42 34.7 42z" /><path fill="#263238" d="M24.3 43.6c-.1 0-.2 0-.3 0-2.9-.2-3.1-2.5-3.2-4.6 0-.4-.1-.8-.1-1.2-.2-1.6.5-2.4 1-2.8 1.3-.9 3.3-.5 4.8.2l3 1.6-.9 1.8-3-1.6c-1.2-.6-2.4-.7-2.7-.4-.2.2-.2.6-.2.9.1.4.1.9.1 1.3.2 2.4.4 2.7 1.4 2.8 2.1.2 4.2-1.8 4.2-1.9l1.4 1.4C29.6 41.3 27.2 43.6 24.3 43.6zM21 15.4c0 0-.2.6-.6.6-.2 0-.4-.4-.4-.8 0-1.2.8-2.7 1.6-3.4.6-.5 1.4-.8 2.3-.8.4 0 .9 0 1.3.2.5.2.8.6.8 1.4 0 0 0 .4-1.3.4-.8 0-1.8.1-2.2.5C22.1 13.9 21.5 14.3 21 15.4zM26.4 21c-.5 0-1.1-.1-1.6-.2-.6-.1-.9-.7-.7-1.2l.2-.3c.1-.2.3-.3.5-.3.1 0 .2 0 .3 0 .8.2 2 .2 2.4.2-.5-1.9-.4-3.3-.1-3.3s1.1 2.3 1.5 2.8c.4.5.3 1.1-.1 1.5C28.1 20.8 27.3 21 26.4 21zM36.4 21c-.2 0-.3 0-.5 0-.6-.1-.9-.5-.9-1.1 0 0 .1-.9.6-.9.4 0 .9.2 1.1.2C36.5 18 36.2 16 36.5 16c.3 0 1 2.4 2.4 3.3.4.3.4.9-.2 1.3C37.9 20.9 37.2 21 36.4 21zM38.3 14.5c-.2-.8-1.1-1.5-2.1-1.8C34.9 12.4 34 13 34 13c0-.9.7-1.6 1-1.7.4-.2.6-.3 1-.3 2.1 0 2.9 1.3 3.6 2.6L38.3 14.5z" /><path fill="#263238" d="M31.9 27c-.1 0-.3 0-.4 0 0 0 0 0 0 0-.7 0-1.3-.2-1.7-.7-.8-.9-.9-2.1-.6-2.3.3-.2.5.5 1.5.8 0 0 .7.1.9.1.2 0 .3 0 .5 0 1.3 0 2.4-.3 2.8-.6C35 24.2 35 24 35 24c0 0 0-.3-1.3-1.5-1.3-1.2-1.7-2.7-1.7-4 0-1.5.2-2.5.4-2.5.3 0 .6 3.2 2.7 5 1.5 1.3 1.9 2.2 1.9 3.1 0 .9-.5 1.4-.8 1.7C35.1 26.8 33.3 27 31.9 27zM31.4 30c-3.1-.1-4.7-2-4.7-2s3.5.3 5.8.3V30H31.4zM33.6 30v-.9-.9c.2-.1 1.8.1 3.6-.6C36.8 29.7 33.7 30 33.6 30zM29.1 33c-2.2 0-3.3-.6-4.1-3.2 0 0-.1-.2.2-.3s.4.1.4.1c.4 1.1 2.1 1.4 4.2 1.4.1 0 .2 0 .3 0 1 0 3 0 3 0s-.4 2-2.5 2C30.3 33 29.3 33 29.1 33z" /><path fill="#263238" d="M29 37c-3.2 0-5.7-1-8.4-3.9-1.5-1.6-1.5-3.7-1.3-3.9s.5 1.2 1.7 2.5c2.4 2.6 5.8 3.4 8.7 3.2 3.8-.3 5.4-2.5 5.7-2.7l1.7 1.2c-.1.1-2.4 3.1-7.2 3.5C29.5 37 29.3 37 29 37zM13.4 29l-.1-1-.1-1c0 0 .2-.1.6-.4.3-.2.6-.2.9 0l.5.4c.3.3.3.8 0 1.1C14.3 28.9 13.5 29 13.4 29zM13 23l1.6.6c-.1-.4-.6-2.2-2-2.6-.4-.1-1.1.2-1.2.9 0 0 0 .2 0 .3 0 0 0 .1 0 .1C11.5 24 13 25 13 25V23z" /><path fill="#263238" d="M30,42c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S31.7,42,30,42z M30,38c-0.5,0-1,0.4-1,1s0.4,1,1,1 s1-0.4,1-1S30.6,38,30,38z" /><path fill="#263238" d="M39.6,44H8.4c-0.4,0-0.8-0.2-0.9-0.6l-1.4-3.5C6,39.6,6,39.5,6,39.3l0-0.4c0.1-1,5.7-4.5,7.9-5.8 c-0.7-1.5-1.2-3.1-1.4-4.1c-0.8-0.1-1.8-0.5-3-1.7C8.4,26.2,8,24.3,8,23c0-0.9,0.2-2.4,1.4-3.7c-0.6-2.7-0.5-4.8,0.4-6.2 c0.4-0.7,0.9-1,1.3-1.3c0.8-3.1,4.1-4.5,4.9-4.9c0.8-0.6,4.5-3.1,10.7-2.9c8.4,0.3,13.6,5.5,14.2,14.2C41,19,41,19.8,41,20.6 c0,6.5-2.3,10.5-3.5,12.1c4.5,3.1,4.5,3.6,4.5,4.1c0.1,1.3-1.1,5.2-1.5,6.4C40.4,43.7,40,44,39.6,44z M9.1,42h29.7 c0.6-1.9,1.1-3.9,1.2-4.7c-0.6-0.6-2.7-2.2-4.6-3.4c-0.2-0.2-0.4-0.4-0.4-0.7s0.1-0.6,0.3-0.8c0,0,3.6-3.7,3.7-11.7 c0-0.7,0-1.5-0.1-2.3C38.2,8,30.9,6.2,26.6,6c-6-0.2-9.4,2.5-9.5,2.6c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-3.5,1.2-3.8,3.9 c-0.1,0.4-0.4,0.8-0.8,0.9c-0.7,0.2-1.8,1.7-0.7,5.9c0.1,0.4,0,0.8-0.3,1c-1,0.8-1.1,2-1.1,2.6c0,1.2,0.4,2.4,1,3 c1.2,1.3,2.1,1.1,2.1,1.1c0.3-0.1,0.6,0,0.8,0.1c0.2,0.2,0.4,0.4,0.4,0.7c0,0,0.5,3.1,1.8,5.1c0.1,0.2,0.2,0.5,0.1,0.8 c-0.1,0.3-0.2,0.5-0.5,0.6c-0.7,0.4-6.3,4-7.7,5L9.1,42z M40.1,37.4L40.1,37.4L40.1,37.4z" /></svg>
            } />
            <SkillCard name="Kubernetes" icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px"><path fill="#0277bd" d="M25.875,24.208c0.102,0.131,0.145,0.32,0.116,0.495l-0.276,1.208	c-0.029,0.189-0.16,0.335-0.319,0.422l-1.118,0.524c-0.16,0.087-0.363,0.087-0.523,0l-1.118-0.524	c-0.16-0.087-0.29-0.233-0.319-0.422l-0.276-1.208c-0.029-0.175,0.015-0.364,0.116-0.495l0.784-0.975	C23.043,23.087,23.218,23,23.406,23h1.22c0.189,0,0.363,0.087,0.465,0.233L25.875,24.208z" /><path fill="#0277bd" d="M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23	c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202	C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23	c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202	C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.119,19.835l-0.259,0.279	c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528	c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528	c0.163,0.432,0.316,0.865,0.47,1.307c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736	L32.627,28.02z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23	c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202	C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M32.119,19.835l-0.259,0.279	c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528	c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02	c-1.045-0.067-2.081-0.163-3.126-0.259c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528	c0.163,0.432,0.316,0.865,0.47,1.307c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736	L32.627,28.02z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M19.875,27.492c-0.451,0.058-0.892,0.125-1.342,0.173	c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765l0.134-0.404	c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02	c-1.045-0.067-2.081-0.163-3.126-0.259c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528	c0.163,0.432,0.316,0.865,0.47,1.307c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736	L32.627,28.02z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M19.875,27.492c-0.451,0.058-0.892,0.125-1.342,0.173	c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765l0.134-0.404	c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M19.875,27.492c-0.451,0.058-0.892,0.125-1.342,0.173c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048	c0.7,1.96,2.023,3.631,3.72,4.765l0.134-0.404c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431	C20.412,27.741,20.172,27.444,19.875,27.492z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699	c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0c-0.221,0.413-0.451,0.817-0.69,1.21	c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423c1.007,0,1.985-0.154,2.896-0.452	L26.606,33.62z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23	c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202	C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M32.119,19.835l-0.259,0.279	c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528	c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M19.875,27.492c-0.451,0.058-0.892,0.125-1.342,0.173	c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765l0.134-0.404	c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M19.338,23.111c-0.326-0.298-0.642-0.596-0.959-0.913c-0.748-0.74-1.486-1.47-2.215-2.229l-0.307-0.317	c-0.959,1.489-1.515,3.266-1.515,5.178c0,0.183,0.01,0.355,0.01,0.528l0.451-0.154c0.988-0.355,1.985-0.663,2.972-0.989	c0.47-0.154,0.94-0.288,1.409-0.432C19.482,23.697,19.568,23.322,19.338,23.111z M19.875,27.492	c-0.451,0.058-0.892,0.125-1.342,0.173c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765	l0.134-0.404c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02	c-1.045-0.067-2.081-0.163-3.126-0.259c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528	c0.163,0.432,0.316,0.865,0.47,1.307c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736	L32.627,28.02z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M29.501,27.761c-0.451-0.038-0.892-0.086-1.342-0.135	c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346	c1.668-1.143,2.963-2.795,3.643-4.736l-0.336-0.019C31.582,27.953,30.547,27.857,29.501,27.761z M30.355,17.703	c-1.371-1.249-3.116-2.104-5.043-2.373l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23	c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739L30.355,17.703z M25.014,30.921c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0c-0.221,0.413-0.451,0.817-0.69,1.21	c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423c1.007,0,1.985-0.154,2.896-0.452	l-0.221-0.365C26.05,32.737,25.532,31.824,25.014,30.921z M19.875,27.492c-0.451,0.058-0.892,0.125-1.342,0.173	c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765l0.134-0.404	c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M19.185,23.783c0.297-0.086,0.384-0.461,0.153-0.672c-0.326-0.298-0.642-0.596-0.959-0.913c-0.748-0.74-1.486-1.47-2.215-2.229	l-0.307-0.317c-0.959,1.489-1.515,3.266-1.515,5.178c0,0.183,0.01,0.355,0.01,0.528l0.451-0.154	c0.988-0.355,1.985-0.663,2.972-0.989C18.245,24.062,18.715,23.928,19.185,23.783z M44.766,28.174l-3.663-16.12	c-0.163-0.72-0.642-1.316-1.304-1.643L24.976,3.245c-0.662-0.327-1.429-0.327-2.09,0L8.063,10.411	c-0.662,0.327-1.141,0.922-1.304,1.643l-3.663,16.12c-0.163,0.72,0.01,1.47,0.46,2.037l10.259,12.93	c0.46,0.576,1.16,0.913,1.889,0.913h16.453c0.729,0,1.429-0.336,1.889-0.913l10.259-12.93	C44.756,29.643,44.929,28.894,44.766,28.174z M39.646,28.846c-0.288,0.067-0.575,0-0.805-0.144c-0.47-0.317-0.968-0.49-1.467-0.634	c-0.249-0.067-0.508-0.125-0.757-0.163c-0.249-0.077-0.537,0-0.825,0.134c-0.288,0.163-0.547,0.135-0.815,0.115h-0.029	c-0.825,2.738-2.637,5.053-5.034,6.523v0.01c0.077,0.25,0.163,0.49,0.086,0.817c-0.067,0.317-0.077,0.605,0.058,0.836	c0.105,0.231,0.221,0.471,0.345,0.692c0.259,0.451,0.547,0.903,0.968,1.278c0.422,0.394,0.451,1.047,0.067,1.479	c-0.393,0.423-1.045,0.451-1.477,0.067c-0.221-0.202-0.336-0.471-0.336-0.749c-0.019-0.567-0.163-1.066-0.336-1.566	c-0.086-0.24-0.182-0.48-0.297-0.72c-0.086-0.25-0.316-0.423-0.595-0.586c-0.268-0.144-0.403-0.346-0.537-0.567	c-1.227,0.452-2.55,0.692-3.931,0.692c-1.361,0-2.665-0.24-3.874-0.672c-0.115,0.211-0.249,0.403-0.518,0.548	c-0.278,0.154-0.508,0.336-0.594,0.586c-0.115,0.231-0.221,0.471-0.307,0.711c-0.173,0.5-0.326,0.999-0.336,1.566	c-0.019,0.576-0.508,1.028-1.083,1.009c-0.575-0.019-1.026-0.499-1.007-1.076c0.01-0.298,0.144-0.557,0.345-0.74	c0.422-0.384,0.71-0.826,0.978-1.268c0.125-0.231,0.24-0.461,0.345-0.701c0.134-0.221,0.125-0.519,0.067-0.836	c-0.067-0.298,0-0.538,0.077-0.759c-2.407-1.451-4.248-3.756-5.091-6.494c-0.221,0.019-0.431,0.019-0.681-0.106	c-0.297-0.125-0.575-0.202-0.825-0.115c-0.259,0.048-0.508,0.115-0.757,0.192c-0.499,0.163-0.988,0.346-1.448,0.672	c-0.47,0.336-1.122,0.221-1.457-0.25c-0.326-0.471-0.221-1.124,0.249-1.451c0.24-0.173,0.537-0.231,0.805-0.183	c0.547,0.115,1.074,0.077,1.592,0.01c0.259-0.029,0.518-0.077,0.767-0.144c0.259-0.019,0.489-0.211,0.7-0.451	c0.182-0.211,0.393-0.298,0.604-0.375c-0.038-0.394-0.058-0.797-0.058-1.201c0-2.459,0.767-4.736,2.081-6.609	c-0.173-0.173-0.336-0.346-0.403-0.653c-0.086-0.307-0.201-0.576-0.422-0.72c-0.201-0.173-0.403-0.327-0.614-0.471	c-0.441-0.288-0.892-0.557-1.429-0.72c-0.556-0.154-0.882-0.74-0.719-1.287c0.163-0.557,0.738-0.874,1.294-0.72	c0.278,0.086,0.508,0.279,0.633,0.519c0.259,0.5,0.614,0.893,0.988,1.258c0.182,0.183,0.384,0.355,0.585,0.509	c0.182,0.192,0.47,0.25,0.786,0.269c0.336,0.01,0.546,0.154,0.767,0.298l0.01,0.01c1.803-1.748,4.18-2.901,6.817-3.151	c0.029-0.259,0.048-0.519,0.249-0.778c0.192-0.259,0.326-0.519,0.297-0.778c0.01-0.259,0-0.519-0.019-0.788	c-0.058-0.519-0.134-1.038-0.355-1.556c-0.23-0.528,0.019-1.143,0.547-1.374c0.527-0.221,1.141,0.019,1.371,0.548	c0.115,0.279,0.105,0.576,0,0.826c-0.221,0.519-0.297,1.037-0.355,1.556c-0.019,0.269-0.029,0.528-0.019,0.788	c-0.029,0.259,0.105,0.519,0.297,0.778c0.201,0.259,0.221,0.519,0.249,0.778c2.704,0.259,5.139,1.46,6.961,3.285	c0.221-0.144,0.431-0.298,0.767-0.307c0.316-0.019,0.604-0.077,0.786-0.269c0.201-0.163,0.393-0.336,0.585-0.519	c0.364-0.365,0.719-0.759,0.978-1.258c0.259-0.519,0.892-0.72,1.4-0.451c0.518,0.259,0.719,0.893,0.451,1.403	c-0.134,0.269-0.364,0.452-0.633,0.528c-0.537,0.154-0.988,0.432-1.419,0.72c-0.211,0.154-0.422,0.307-0.614,0.48	c-0.221,0.144-0.336,0.413-0.422,0.72c-0.067,0.327-0.249,0.509-0.431,0.701c1.246,1.835,1.966,4.054,1.966,6.436	c0,0.365-0.019,0.73-0.048,1.086h0.01c0.249,0.077,0.499,0.144,0.719,0.403c0.221,0.231,0.451,0.403,0.71,0.423	c0.259,0.058,0.508,0.096,0.767,0.125c0.527,0.048,1.045,0.067,1.601-0.058c0.566-0.125,1.122,0.231,1.246,0.797	C40.566,28.164,40.211,28.721,39.646,28.846z M31.86,20.114c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48c0-1.835-0.508-3.545-1.4-4.995L31.86,20.114z M29.501,27.761	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736l-0.336-0.019	C31.582,27.953,30.547,27.857,29.501,27.761z M30.355,17.703c-1.371-1.249-3.116-2.104-5.043-2.373l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739L30.355,17.703z M25.014,30.921	c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0c-0.221,0.413-0.451,0.817-0.69,1.21	c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423c1.007,0,1.985-0.154,2.896-0.452	l-0.221-0.365C26.05,32.737,25.532,31.824,25.014,30.921z M22.176,18.827c0.096-1.038,0.192-2.085,0.326-3.122l0.048-0.375	c-1.85,0.259-3.528,1.057-4.871,2.229l0.297,0.183c0.892,0.557,1.755,1.143,2.618,1.729c0.499,0.317,0.968,0.672,1.438,1.009	C22.071,19.931,22.119,19.374,22.176,18.827z M19.875,27.492c-0.451,0.058-0.892,0.125-1.342,0.173	c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765l0.134-0.404	c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M19.185,23.783c0.297-0.086,0.384-0.461,0.153-0.672c-0.326-0.298-0.642-0.596-0.959-0.913c-0.748-0.74-1.486-1.47-2.215-2.229	l-0.307-0.317c-0.959,1.489-1.515,3.266-1.515,5.178c0,0.183,0.01,0.355,0.01,0.528l0.451-0.154	c0.988-0.355,1.985-0.663,2.972-0.989C18.245,24.062,18.715,23.928,19.185,23.783z M19.338,23.111	c-0.326-0.298-0.642-0.596-0.959-0.913c-0.748-0.74-1.486-1.47-2.215-2.229l-0.307-0.317c-0.959,1.489-1.515,3.266-1.515,5.178	c0,0.183,0.01,0.355,0.01,0.528l0.451-0.154c0.988-0.355,1.985-0.663,2.972-0.989c0.47-0.154,0.94-0.288,1.409-0.432	C19.482,23.697,19.568,23.322,19.338,23.111z M19.875,27.492c-0.451,0.058-0.892,0.125-1.342,0.173	c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765l0.134-0.404	c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02	c-1.045-0.067-2.081-0.163-3.126-0.259c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528	c0.163,0.432,0.316,0.865,0.47,1.307c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736	L32.627,28.02z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M19.875,27.492c-0.451,0.058-0.892,0.125-1.342,0.173	c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765l0.134-0.404	c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M19.338,23.111c-0.326-0.298-0.642-0.596-0.959-0.913c-0.748-0.74-1.486-1.47-2.215-2.229l-0.307-0.317	c-0.959,1.489-1.515,3.266-1.515,5.178c0,0.183,0.01,0.355,0.01,0.528l0.451-0.154c0.988-0.355,1.985-0.663,2.972-0.989	c0.47-0.154,0.94-0.288,1.409-0.432C19.482,23.697,19.568,23.322,19.338,23.111z M19.875,27.492	c-0.451,0.058-0.892,0.125-1.342,0.173c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765	l0.134-0.404c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02	c-1.045-0.067-2.081-0.163-3.126-0.259c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528	c0.163,0.432,0.316,0.865,0.47,1.307c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736	L32.627,28.02z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M19.875,27.492c-0.451,0.058-0.892,0.125-1.342,0.173	c-1.045,0.125-2.071,0.25-3.116,0.346l-0.518,0.048c0.7,1.96,2.023,3.631,3.72,4.765l0.134-0.404	c0.326-0.999,0.671-1.979,1.026-2.968c0.163-0.48,0.336-0.951,0.518-1.431C20.412,27.741,20.172,27.444,19.875,27.492z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02	c-1.045-0.067-2.081-0.163-3.126-0.259c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528	c0.163,0.432,0.316,0.865,0.47,1.307c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736	L32.627,28.02z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699	c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0c-0.221,0.413-0.451,0.817-0.69,1.21	c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423c1.007,0,1.985-0.154,2.896-0.452	L26.606,33.62z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23	c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202	C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M32.119,19.835l-0.259,0.279	c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528	c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M26.606,33.62c-0.556-0.884-1.074-1.796-1.592-2.699c-0.23-0.394-0.451-0.788-0.662-1.191c-0.153-0.279-0.547-0.279-0.7,0	c-0.221,0.413-0.451,0.817-0.69,1.21c-0.527,0.903-1.055,1.806-1.611,2.69l-0.24,0.384c0.892,0.279,1.841,0.423,2.819,0.423	c1.007,0,1.985-0.154,2.896-0.452L26.606,33.62z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.627,28.02	c-1.045-0.067-2.081-0.163-3.126-0.259c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528	c0.163,0.432,0.316,0.865,0.47,1.307c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736	L32.627,28.02z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.627,28.02c-1.045-0.067-2.081-0.163-3.126-0.259	c-0.451-0.038-0.892-0.086-1.342-0.135c-0.288-0.038-0.518,0.25-0.412,0.528c0.163,0.432,0.316,0.865,0.47,1.307	c0.336,0.98,0.681,1.969,0.997,2.968l0.105,0.346c1.668-1.143,2.963-2.795,3.643-4.736L32.627,28.02z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23	c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202	C28.984,16.454,27.239,15.599,25.312,15.33z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248	c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115	c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279	c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528	c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23	c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202	C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M32.119,19.835l-0.259,0.279	c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412c0.652,0.163,1.304,0.336,1.956,0.528	c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48C33.519,22.996,33.011,21.286,32.119,19.835z M32.119,19.835l-0.259,0.279c-0.719,0.769-1.457,1.508-2.196,2.248c-0.47,0.48-0.978,0.941-1.467,1.412	c0.652,0.163,1.304,0.336,1.956,0.528c1.007,0.288,2.004,0.567,3.001,0.893l0.355,0.115c0.01-0.154,0.01-0.317,0.01-0.48	C33.519,22.996,33.011,21.286,32.119,19.835z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122	c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711	c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375	c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23c0.019,0.317,0.374,0.48,0.633,0.298	c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202C28.984,16.454,27.239,15.599,25.312,15.33z M25.312,15.33l0.048,0.375c0.134,1.037,0.23,2.085,0.326,3.122c0.038,0.413,0.077,0.817,0.105,1.23	c0.019,0.317,0.374,0.48,0.633,0.298c0.326-0.24,0.662-0.48,1.007-0.711c0.863-0.586,1.716-1.172,2.598-1.739l0.326-0.202	C28.984,16.454,27.239,15.599,25.312,15.33z" /><path fill="none" d="M12.933,28.231c-0.221,0.019-0.431,0.019-0.681-0.106c-0.297-0.125-0.575-0.202-0.825-0.115	c-0.259,0.048-0.508,0.115-0.757,0.192c-0.499,0.163-0.988,0.346-1.448,0.672c-0.47,0.336-1.122,0.221-1.457-0.25	c-0.326-0.471-0.221-1.124,0.249-1.451c0.24-0.173,0.537-0.231,0.805-0.183c0.547,0.115,1.074,0.077,1.592,0.01	c0.259-0.029,0.518-0.077,0.767-0.144c0.259-0.019,0.489-0.211,0.7-0.451c0.182-0.211,0.393-0.298,0.604-0.375	C12.569,26.781,12.713,27.52,12.933,28.231z" /><path fill="none" d="M20.057,35.686c-0.115,0.211-0.249,0.403-0.518,0.548c-0.278,0.154-0.508,0.336-0.594,0.586	c-0.115,0.231-0.221,0.471-0.307,0.711c-0.173,0.5-0.326,0.999-0.336,1.566c-0.019,0.576-0.508,1.028-1.083,1.009	c-0.575-0.019-1.026-0.499-1.007-1.076c0.01-0.298,0.144-0.557,0.345-0.74c0.422-0.384,0.71-0.826,0.978-1.268	c0.125-0.231,0.24-0.461,0.345-0.701c0.134-0.221,0.125-0.519,0.067-0.836c-0.067-0.298,0-0.538,0.077-0.759	C18.667,35.11,19.348,35.436,20.057,35.686z" /><path fill="none" d="M31.438,39.788c-0.393,0.423-1.045,0.451-1.477,0.067c-0.221-0.202-0.336-0.471-0.336-0.749	c-0.019-0.567-0.163-1.066-0.336-1.566c-0.086-0.24-0.182-0.48-0.297-0.72c-0.086-0.25-0.316-0.423-0.595-0.586	c-0.268-0.144-0.403-0.346-0.537-0.567c0.719-0.259,1.409-0.596,2.052-0.989v0.01c0.077,0.25,0.163,0.49,0.086,0.817	c-0.067,0.317-0.077,0.605,0.058,0.836c0.105,0.231,0.221,0.471,0.345,0.692c0.259,0.451,0.547,0.903,0.968,1.278	C31.793,38.702,31.822,39.356,31.438,39.788z" /><path fill="none" d="M39.646,28.846c-0.288,0.067-0.575,0-0.805-0.144c-0.47-0.317-0.968-0.49-1.467-0.634	c-0.249-0.067-0.508-0.125-0.757-0.163c-0.249-0.077-0.537,0-0.825,0.134c-0.288,0.163-0.547,0.135-0.815,0.115h-0.029	c0.221-0.72,0.364-1.47,0.441-2.238h0.01c0.249,0.077,0.499,0.144,0.719,0.403c0.221,0.231,0.451,0.403,0.71,0.423	c0.259,0.058,0.508,0.096,0.767,0.125c0.527,0.048,1.045,0.067,1.601-0.058c0.566-0.125,1.122,0.231,1.246,0.797	C40.566,28.164,40.211,28.721,39.646,28.846z" /></svg>
            } />
            <SkillCard name="Bash" icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px" fill-rule="evenodd" clip-rule="evenodd" baseProfile="basic"><path fill="#ededed" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd" /><path fill="#434345" d="M23.987,46.221c-1.085,0-2.171-0.252-3.165-0.757c-2.22-1.127-5.118-2.899-7.921-4.613 c-1.973-1.206-3.836-2.346-5.297-3.157C5.381,36.458,4,34.113,4,31.572V16.627c0-2.59,1.417-4.955,3.699-6.173 c3.733-1.989,9.717-5.234,12.878-7.01h0c2.11-1.184,4.733-1.184,6.844,0c3.576,2.007,10.369,6.064,14.252,8.513 C43.13,12.874,44,14.453,44,16.182V32c0,2.4-0.859,4.048-2.553,4.895c-0.944,0.531-2.628,1.576-4.578,2.787 c-3.032,1.882-6.806,4.225-9.564,5.705C26.27,45.942,25.128,46.221,23.987,46.221z M21.556,5.188 C18.384,6.97,12.382,10.226,8.64,12.22C7.012,13.088,6,14.776,6,16.627v14.945c0,1.814,0.987,3.49,2.576,4.373 c1.498,0.832,3.378,1.981,5.369,3.199c2.77,1.693,5.634,3.445,7.783,4.536c1.458,0.739,3.188,0.717,4.631-0.056 c2.703-1.451,6.447-3.775,9.456-5.643c1.97-1.223,3.671-2.279,4.696-2.854C41.835,34.464,42,33.109,42,32V16.182 c0-1.037-0.521-1.983-1.392-2.532c-3.862-2.435-10.613-6.467-14.165-8.461C24.913,4.331,23.086,4.331,21.556,5.188L21.556,5.188z" /><path fill="#434345" d="M22.977,41.654l-0.057-13.438c-0.011-2.594,1.413-4.981,3.701-6.204l12.01-6.416 c1.998-1.068,4.414,0.38,4.414,2.646v14.73c0,1.041-0.54,2.008-1.426,2.554l-14.068,8.668 C25.557,45.424,22.987,43.996,22.977,41.654z" /><path fill="#ededed" d="M28.799,26.274c0.123-0.063,0.225,0.014,0.227,0.176l0.013,1.32 c0.552-0.219,1.032-0.278,1.467-0.177c0.095,0.024,0.136,0.153,0.098,0.306l-0.291,1.169c-0.024,0.089-0.072,0.178-0.132,0.233 c-0.026,0.025-0.052,0.044-0.077,0.057c-0.04,0.02-0.078,0.026-0.114,0.019c-0.199-0.045-0.671-0.148-1.413,0.228 c-0.778,0.395-1.051,1.071-1.046,1.573c0.007,0.601,0.315,0.783,1.377,0.802c1.416,0.023,2.027,0.643,2.042,2.067 c0.016,1.402-0.733,2.905-1.876,3.826l0.025,1.308c0.001,0.157-0.1,0.338-0.225,0.4l-0.775,0.445 c-0.123,0.063-0.225-0.014-0.227-0.172l-0.013-1.286c-0.664,0.276-1.334,0.342-1.763,0.17c-0.082-0.032-0.117-0.152-0.084-0.288 l0.28-1.181c0.022-0.092,0.071-0.186,0.138-0.246c0.023-0.023,0.048-0.04,0.072-0.053c0.044-0.022,0.087-0.027,0.124-0.013 c0.462,0.155,1.053,0.082,1.622-0.206c0.722-0.365,1.206-1.102,1.198-1.834c-0.007-0.664-0.366-0.939-1.241-0.946 c-1.113,0.002-2.151-0.216-2.168-1.855c-0.014-1.35,0.688-2.753,1.799-3.641l-0.013-1.319c-0.001-0.162,0.098-0.34,0.225-0.405 L28.799,26.274z" /><path fill="#4da925" d="M37.226,34.857l-3.704,2.185c-0.109,0.061-0.244-0.019-0.244-0.143v-1.252 c0-0.113,0.061-0.217,0.16-0.273l3.704-2.185c0.111-0.061,0.246,0.019,0.246,0.145v1.248 C37.388,34.697,37.326,34.801,37.226,34.857" /></svg>
            } />
            <SkillCard name="LaTeX" icon={
              <svg className="h-8 w-8" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.525 31.482h-.482c-.192 1.966-.462 4.357-3.855 4.357h-1.562c-.905 0-.944-.136-.944-.772V24.831c0-.655 0-.925 1.812-.925h.636v-.578c-.694.058-2.429.058-3.22.058-.751 0-2.255 0-2.91-.058v.578h.443c1.485 0 1.523.212 1.523.906v10.12c0 .694-.038.907-1.523.907H8v.597h10.005l.52-4.954z" />
                <path d="M18.198 23.308c-.078-.23-.116-.308-.367-.308-.25 0-.308.077-.385.308l-3.104 7.866c-.135.327-.366.925-1.561.925v.482h2.988v-.482c-.598 0-.964-.27-.964-.656 0-.096.02-.135.058-.27l.655-1.657h3.817l.771 1.966a.65.65 0 0 1 .077.231c0 .386-.732.386-1.099.386v.482h3.798v-.482h-.27c-.906 0-1.002-.135-1.137-.52l-3.277-8.27zm-.771 1.37 1.715 4.356h-3.431l1.716-4.357z" />
                <path d="M33.639 23.443h-11.74l-.347 4.318h.463c.27-3.103.558-3.74 3.47-3.74.346 0 .848 0 1.04.04.405.076.405.288.405.732v10.12c0 .656 0 .926-2.024.926h-.771v.597c.79-.058 2.737-.058 3.624-.058s2.872 0 3.663.058v-.597h-.771c-2.024 0-2.024-.27-2.024-.926v-10.12c0-.386 0-.656.347-.733.212-.038.732-.038 1.098-.038 2.892 0 3.181.636 3.45 3.74h.483l-.366-4.319z" />
                <path d="M43.971 35.82h-.482c-.482 2.949-.925 4.356-4.221 4.356h-2.545c-.906 0-.945-.135-.945-.771v-5.128h1.716c1.87 0 2.082.617 2.082 2.255h.482v-5.089h-.482c0 1.639-.212 2.236-2.082 2.236h-1.716v-4.607c0-.636.039-.77.945-.77h2.467c2.95 0 3.451 1.06 3.76 3.739h.481l-.54-4.318H32.097v.578h.444c1.484 0 1.523.212 1.523.906V39.27c0 .694-.039.906-1.523.906h-.444v.597h11.065l.81-4.954z" />
                <path d="m49.773 29.014 2.641-3.855c.405-.617 1.06-1.234 2.776-1.253v-.578h-4.588v.578c.772.02 1.196.443 1.196.887 0 .192-.039.231-.174.443l-2.198 3.239-2.467-3.702c-.039-.057-.135-.212-.135-.289 0-.231.424-.559 1.234-.578v-.578c-.656.058-2.063.058-2.795.058-.598 0-1.793-.02-2.506-.058v.578h.366c1.06 0 1.426.135 1.793.675l3.527 5.34-3.142 4.645c-.27.386-.848 1.273-2.776 1.273v.597h4.588v-.597c-.886-.02-1.214-.54-1.214-.887 0-.174.058-.25.193-.463l2.718-4.029 3.045 4.588c.039.077.097.154.097.212 0 .232-.424.56-1.253.579v.597c.675-.058 2.082-.058 2.795-.058.81 0 1.696.02 2.506.058v-.597h-.366c-1.003 0-1.407-.097-1.812-.694l-4.049-6.13z" />
              </svg>
            } />
            <SkillCard name="Markdown" icon={
              <svg className="h-8 w-8" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25,3H1.75A.74027.74027,0,0,0,1,3.73016v8.53968A.74029.74029,0,0,0,1.75,13h12.5a.74029.74029,0,0,0,.75-.73016V3.73016A.74027.74027,0,0,0,14.25,3ZM7.965,10.059H6.97374V7.77311L5.9825,9.34956,4.99125,7.77311V10.059H4V5.934h.91L5.9825,7.51038,7.055,5.934h.91Zm2.45884.0071L8.84766,7.94479H9.94749V5.934h.99124V7.94479H12Z" />
              </svg>
            } />
            <SkillCard name="GNU Debugger" icon={<Code className="h-8 w-8" />} />

            {/* DSA */}
            {/* <SkillCard name="DSA" icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h20M5 20v-4m14 4v-4M12 20v-4M5 12a4 4 0 0 1 0-8h14a4 4 0 0 1 0 8H5z" />
                <circle cx="8" cy="8" r="1" />
                <circle cx="16" cy="8" r="1" />
              </svg>
            } /> */}
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
