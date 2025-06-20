import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, FileCode, LayoutDashboard, CircuitBoard, Brain, Layers } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  slug?: string;
  imageSrc?: string; // Kept for backward compatibility but won't be used
  colorScheme?: "blue" | "purple" | "green" | "orange" | "pink" | "gradient" | "red" | "cyan";
}

// Function to get an icon based on project tags
const getProjectIcon = (tags: string[]) => {
  const tag = tags[0]?.toLowerCase() || "";
  
  if (tag.includes("react") || tag.includes("next.js")) return <Code className="h-8 w-8" />;
  if (tag.includes("python") || tag.includes("deep learning")) return <Brain className="h-8 w-8" />;
  if (tag.includes("node") || tag.includes("express")) return <FileCode className="h-8 w-8" />;
  if (tag.includes("ui") || tag.includes("design")) return <LayoutDashboard className="h-8 w-8" />;
  if (tag.includes("mongo") || tag.includes("database")) return <CircuitBoard className="h-8 w-8" />;
  
  return <Layers className="h-8 w-8" />;
};

// Function to generate background gradient based on color scheme
const getBackgroundStyle = (colorScheme: string = 'blue') => {
  switch (colorScheme) {
    case 'purple':
      return 'bg-gradient-to-br from-purple-500/20 to-indigo-500/30 dark:from-purple-900/40 dark:to-indigo-900/50';
    case 'green':
      return 'bg-gradient-to-br from-emerald-500/20 to-teal-500/30 dark:from-emerald-900/40 dark:to-teal-900/50';
    case 'orange':
      return 'bg-gradient-to-br from-orange-500/20 to-amber-500/30 dark:from-orange-900/40 dark:to-amber-900/50';
    case 'pink':
      return 'bg-gradient-to-br from-pink-500/20 to-rose-500/30 dark:from-pink-900/40 dark:to-rose-900/50';
    case 'gradient':
      return 'bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/30 dark:from-primary/40 dark:via-purple-900/40 dark:to-pink-900/50';
    default: // blue
      return 'bg-gradient-to-br from-blue-500/20 to-cyan-500/30 dark:from-blue-900/40 dark:to-cyan-900/50';
  }
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
  return (
    <Card className="overflow-hidden group h-full flex flex-col border border-muted hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 backdrop-blur-sm">
      <div className={`relative h-56 overflow-hidden flex items-center justify-center ${getBackgroundStyle(colorScheme)}`}>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-300 backdrop-blur-sm group-hover:backdrop-blur-none"></div>
        
        {/* Geometric pattern background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`cardGradient-${title.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id={`circleGradient-${title.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Grid Lines */}
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
          </pattern>
          <rect width="100" height="100" fill="url(#smallGrid)" />
          
          {/* Geometric Shapes */}
          <circle cx="80" cy="20" r="8" fill="url(#circleGradient-${title.replace(/\s+/g, '-')})" className="animate-pulse" style={{ animationDuration: '3s' }} />
          <circle cx="20" cy="80" r="12" fill="url(#circleGradient-${title.replace(/\s+/g, '-')})" className="animate-pulse" style={{ animationDuration: '4s' }} />
          <polygon points="50,15 65,35 35,35" fill="url(#cardGradient-${title.replace(/\s+/g, '-')})" className="origin-center animate-spin" style={{ animationDuration: '25s', transformBox: 'fill-box' }} />
          <rect x="70" y="60" width="15" height="15" fill="url(#cardGradient-${title.replace(/\s+/g, '-')})" className="origin-center animate-spin" style={{ animationDuration: '20s', transformBox: 'fill-box' }} />
          <polygon points="20,40 30,30 20,20 10,30" fill="url(#cardGradient-${title.replace(/\s+/g, '-')})" className="origin-center animate-spin" style={{ animationDuration: '22s', transformBox: 'fill-box' }} />
        </svg>
        
        {/* Project Icon with enhanced styling */}
        <div className="relative z-10 p-6 text-center transform transition-transform duration-300 group-hover:scale-110">
          <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-background/50 dark:bg-background/30 backdrop-blur-sm border border-primary/20 shadow-xl group-hover:shadow-primary/10 transition-all duration-300">
            {getProjectIcon(tags)}
          </div>
          <div className="h-1 w-12 bg-primary/80 mx-auto mt-4 group-hover:w-20 transition-all duration-300"></div>
        </div>
      </div>
      <CardHeader className="space-y-2 p-5">
        <CardTitle className="text-xl relative">
          {title}
          <div className="h-1 w-12 bg-primary mt-2 group-hover:w-20 transition-all duration-300"></div>
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0 flex-grow">
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        {slug && (
          <Button asChild variant="default" size="sm" className="flex-1">
            <Link href={`/projects/${slug}`}>View Details</Link>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline" size="icon">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button asChild variant="outline" size="icon">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Live Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
