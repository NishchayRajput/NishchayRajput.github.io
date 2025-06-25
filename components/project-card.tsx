import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, FileCode, LayoutDashboard, Brain, Shield, Database, BarChart, ArrowRight, Smartphone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  slug?: string;
  imageSrc?: string; // Kept for backward compatibility but won't be used
  colorScheme?: "blue" | "purple" | "green" | "orange" | "pink" | "gradient" | "red" | "cyan" | "yellow";
}

// Function to get an icon based on project tags
const getProjectIcon = (tags: string[]) => {
  const tag = tags.join(" ").toLowerCase();
  
  if (tag.includes("react") || tag.includes("next.js")) return <Code className="h-6 w-6" />;
  if (tag.includes("python") || tag.includes("pytorch") || tag.includes("machine learning")) return <Brain className="h-6 w-6" />;
  if (tag.includes("node") || tag.includes("express") || tag.includes("javascript")) return <FileCode className="h-6 w-6" />;
  if (tag.includes("ui") || tag.includes("design") || tag.includes("tailwind")) return <LayoutDashboard className="h-6 w-6" />;
  if (tag.includes("mongo") || tag.includes("database")) return <Database className="h-6 w-6" />;
  if (tag.includes("cryptography") || tag.includes("security") || tag.includes("block cipher")) return <Shield className="h-6 w-6" />;
  if (tag.includes("network") || tag.includes("data analysis") || tag.includes("analytics")) return <BarChart className="h-6 w-6" />;
  if (tag.includes("flutter") || tag.includes("mobile")) return <Smartphone className="h-6 w-6" />;
  if (tag.includes("open source")) return <Github className="h-6 w-6" />;
  
  return <Sparkles className="h-6 w-6" />;
};

// Function to generate accent color based on color scheme
// Function to generate accent color based on color scheme
const getAccentColor = (colorScheme: string = 'blue') => {
  switch (colorScheme) {
    case 'purple': return 'purple';
    case 'green': return 'emerald';
    case 'orange': return 'orange';
    case 'pink': return 'pink';
    case 'red': return 'red';
    case 'cyan': return 'cyan';
    case 'yellow': return 'amber';
    case 'gradient': return 'violet';
    default: return 'blue'; // blue default
  }
};

// Function to get tailwind classes based on accent color
const getAccentClasses = (accentColor: string, type: 'bg' | 'text' | 'hover' | 'hover-bg' | 'bg-light' | 'bg-dark' | 'text-light' | 'text-dark') => {
  const classes = {
    blue: {
      'bg': 'bg-blue-500/80 dark:bg-blue-400/50',
      'text': 'text-blue-500 dark:text-blue-400',
      'hover': 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
      'hover-bg': 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
      'bg-light': 'bg-blue-100/50 dark:bg-blue-900/30',
      'text-light': 'text-blue-700 dark:text-blue-200',
      'bg-dark': 'bg-blue-100/80 dark:bg-blue-900/30',
      'text-dark': 'text-blue-600 dark:text-blue-400',
    },
    purple: {
      'bg': 'bg-purple-500/80 dark:bg-purple-400/50',
      'text': 'text-purple-500 dark:text-purple-400',
      'hover': 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
      'hover-bg': 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
      'bg-light': 'bg-purple-100/50 dark:bg-purple-900/30',
      'text-light': 'text-purple-700 dark:text-purple-200',
      'bg-dark': 'bg-purple-100/80 dark:bg-purple-900/30',
      'text-dark': 'text-purple-600 dark:text-purple-400',
    },
    emerald: {
      'bg': 'bg-emerald-500/80 dark:bg-emerald-400/50',
      'text': 'text-emerald-500 dark:text-emerald-400',
      'hover': 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
      'hover-bg': 'hover:bg-emerald-100 dark:hover:bg-emerald-900/30',
      'bg-light': 'bg-emerald-100/50 dark:bg-emerald-900/30',
      'text-light': 'text-emerald-700 dark:text-emerald-200',
      'bg-dark': 'bg-emerald-100/80 dark:bg-emerald-900/30',
      'text-dark': 'text-emerald-600 dark:text-emerald-400',
    },
    orange: {
      'bg': 'bg-orange-500/80 dark:bg-orange-400/50',
      'text': 'text-orange-500 dark:text-orange-400',
      'hover': 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
      'hover-bg': 'hover:bg-orange-100 dark:hover:bg-orange-900/30',
      'bg-light': 'bg-orange-100/50 dark:bg-orange-900/30',
      'text-light': 'text-orange-700 dark:text-orange-200',
      'bg-dark': 'bg-orange-100/80 dark:bg-orange-900/30',
      'text-dark': 'text-orange-600 dark:text-orange-400',
    },
    pink: {
      'bg': 'bg-pink-500/80 dark:bg-pink-400/50',
      'text': 'text-pink-500 dark:text-pink-400',
      'hover': 'group-hover:text-pink-600 dark:group-hover:text-pink-400',
      'hover-bg': 'hover:bg-pink-100 dark:hover:bg-pink-900/30',
      'bg-light': 'bg-pink-100/50 dark:bg-pink-900/30',
      'text-light': 'text-pink-700 dark:text-pink-200',
      'bg-dark': 'bg-pink-100/80 dark:bg-pink-900/30',
      'text-dark': 'text-pink-600 dark:text-pink-400',
    },
    red: {
      'bg': 'bg-red-500/80 dark:bg-red-400/50',
      'text': 'text-red-500 dark:text-red-400',
      'hover': 'group-hover:text-red-600 dark:group-hover:text-red-400',
      'hover-bg': 'hover:bg-red-100 dark:hover:bg-red-900/30',
      'bg-light': 'bg-red-100/50 dark:bg-red-900/30',
      'text-light': 'text-red-700 dark:text-red-200',
      'bg-dark': 'bg-red-100/80 dark:bg-red-900/30',
      'text-dark': 'text-red-600 dark:text-red-400',
    },
    cyan: {
      'bg': 'bg-cyan-500/80 dark:bg-cyan-400/50',
      'text': 'text-cyan-500 dark:text-cyan-400',
      'hover': 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
      'hover-bg': 'hover:bg-cyan-100 dark:hover:bg-cyan-900/30',
      'bg-light': 'bg-cyan-100/50 dark:bg-cyan-900/30',
      'text-light': 'text-cyan-700 dark:text-cyan-200',
      'bg-dark': 'bg-cyan-100/80 dark:bg-cyan-900/30',
      'text-dark': 'text-cyan-600 dark:text-cyan-400',
    },
    amber: {
      'bg': 'bg-amber-500/80 dark:bg-amber-400/50',
      'text': 'text-amber-500 dark:text-amber-400',
      'hover': 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
      'hover-bg': 'hover:bg-amber-100 dark:hover:bg-amber-900/30',
      'bg-light': 'bg-amber-100/50 dark:bg-amber-900/30',
      'text-light': 'text-amber-700 dark:text-amber-200',
      'bg-dark': 'bg-amber-100/80 dark:bg-amber-900/30',
      'text-dark': 'text-amber-600 dark:text-amber-400',
    },
    violet: {
      'bg': 'bg-violet-500/80 dark:bg-violet-400/50',
      'text': 'text-violet-500 dark:text-violet-400',
      'hover': 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
      'hover-bg': 'hover:bg-violet-100 dark:hover:bg-violet-900/30',
      'bg-light': 'bg-violet-100/50 dark:bg-violet-900/30',
      'text-light': 'text-violet-700 dark:text-violet-200',
      'bg-dark': 'bg-violet-100/80 dark:bg-violet-900/30',
      'text-dark': 'text-violet-600 dark:text-violet-400',
    },
  };
  
  return classes[accentColor as keyof typeof classes]?.[type] || classes.blue[type];
};

export function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  githubUrl,
  slug,
  colorScheme = 'blue',
}: ProjectCardProps) {
  // Generate a unique ID for SVG gradients based on the title
  const uniqueId = title.toLowerCase().replace(/\s+/g, '-');
  const accentColor = getAccentColor(colorScheme);
  
  return (
    <div className="group relative flex h-full flex-col overflow-hidden">
      {/* Card Border with Gradient Effect */}
      <div className="absolute inset-0 rounded-3xl animate-gradient-shift bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/10 group-hover:via-primary/20 group-hover:to-primary/30 transition-all duration-500"></div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-300"></div>
      
      {/* Outer Card Frame */}
      <Card className={cn(
        "h-full relative rounded-2xl overflow-hidden border-[1.5px] border-white/10 dark:border-white/5",
        "hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300",
        "bg-white/50 dark:bg-black/20 backdrop-blur-md",
        "group-hover:shadow-2xl group-hover:shadow-primary/10",
        "group-hover:animate-levitate flex flex-col"
      )}>          {/* Top Accent Bar with Color Based on Project Type */}
        <div className={cn(
          "absolute top-0 left-0 right-0 h-1.5",
          getAccentClasses(accentColor, "bg"),
          "group-hover:h-2 transition-all duration-300"
        )}></div>
        
        {/* Card Content */}
        <div className="flex flex-col h-full p-1 relative">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Abstract geometric patterns */}
            <svg className="absolute opacity-25 dark:opacity-20 top-0 right-0 w-64 h-64" viewBox="0 0 200 200">
              <defs>
                <linearGradient id={`shape-gradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={`var(--${accentColor}-500)`} stopOpacity="0.2"></stop>
                  <stop offset="100%" stopColor={`var(--${accentColor}-700)`} stopOpacity="0.05"></stop>
                </linearGradient>
                <filter id={`blur-${uniqueId}`}>
                  <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                </filter>
              </defs>
              <circle cx="150" cy="50" r="40" fill={`url(#shape-gradient-${uniqueId})`} filter={`url(#blur-${uniqueId})`} className="animate-float-slower"></circle>
              <path d="M50,10 L90,50 L50,90 L10,50 Z" fill={`url(#shape-gradient-${uniqueId})`} filter={`url(#blur-${uniqueId})`} className="animate-float-slow" transform="translate(120, 100)"></path>
            </svg>
            
            {/* Tech mesh effect in the background */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10" 
              style={{
                backgroundImage: `radial-gradient(circle at 30px 30px, currentColor 2px, transparent 0)`,
                backgroundSize: '60px 60px',
              }}>
            </div>
          </div>
          
          {/* Card Header with Project Type Icon */}
          <div className="flex items-center justify-between mb-2 pt-6 px-6">
            <div className={cn(
              "flex items-center justify-center w-12 h-12 rounded-xl", 
              getAccentClasses(accentColor, "bg-light"),
              "shadow-sm group-hover:shadow-md transition-all duration-300"
            )}>
              <div className={cn(getAccentClasses(accentColor, "text"))}>
                {getProjectIcon(tags)}
              </div>
            </div>
            
            {/* Tag count indicator */}
            <div className="flex items-center space-x-1">
              {tags.slice(0, Math.min(3, tags.length)).map((_, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "w-2 h-2 rounded-full",
                    getAccentClasses(accentColor, "bg")
                  )}
                ></div>
              ))}
              {tags.length > 3 && (
                <span className="text-xs text-muted-foreground ml-1">+{tags.length - 3}</span>
              )}
            </div>
          </div>
          
          {/* Project Title */}
          <CardHeader className="pt-2 px-6">
            <CardTitle className={cn(
              "text-2xl font-bold",
              getAccentClasses(accentColor, "hover"),
              "transition-colors duration-300"
            )}>
              {title}
            </CardTitle>
          </CardHeader>
          
          {/* Description */}
          <CardContent className="px-6 py-2 flex-grow">
            <CardDescription className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </CardDescription>
            
            {/* Tags - displayed as horizontal list */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className={cn(
                    "text-xs px-2 py-0.5 font-medium rounded-md",
                    getAccentClasses(accentColor, "bg-light"),
                    getAccentClasses(accentColor, "text-light"),
                    "border-none"
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          
          {/* Call to Action */}
          <CardFooter className="p-6 pt-3 mt-auto flex justify-between items-center border-t border-muted/10">
            <div className="flex gap-2">
              {githubUrl && (
                <Button 
                  asChild 
                  variant="ghost" 
                  size="icon" 
                  className={cn(
                    "rounded-xl h-9 w-9",
                    getAccentClasses(accentColor, "hover-bg"),
                    getAccentClasses(accentColor, "hover"),
                    "transition-all duration-200"
                  )}
                >
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {demoUrl && (
                <Button 
                  asChild 
                  variant="ghost" 
                  size="icon"
                  className={cn(
                    "rounded-xl h-9 w-9",
                    getAccentClasses(accentColor, "hover-bg"),
                    getAccentClasses(accentColor, "hover"),
                    "transition-all duration-200"
                  )}
                >
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
            
            {/* Details button with arrow */}
            {(demoUrl || slug) && (
              <Button 
                asChild 
                variant="ghost"
                className={cn(
                  "px-4 py-2 rounded-xl",
                  getAccentClasses(accentColor, "text-dark"),
                  getAccentClasses(accentColor, "hover-bg"),
                  "group/btn overflow-hidden relative font-medium",
                  "transition-all duration-300"
                )}
              >
                {demoUrl && !slug ? (
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span className="relative z-10">View Project</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                ) : (
                  <Link href={`/projects/${slug}`} className="flex items-center gap-2">
                    <span className="relative z-10">View Project</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                )}
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
