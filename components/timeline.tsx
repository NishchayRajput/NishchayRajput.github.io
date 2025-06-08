import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon?: React.ReactNode;
  isLast?: boolean;
  highlights?: string[];
}

export function TimelineItem({
  title,
  subtitle,
  date,
  description,
  icon,
  isLast = false,
  highlights,
}: TimelineItemProps) {
  return (
    <div className="flex gap-6 group">
      {/* Timeline node and line */}
      <div className="flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/20 bg-background text-primary shadow-lg relative group-hover:border-primary/50 group-hover:text-primary transition-colors duration-500">
          {/* Pulse animation for the timeline node */}
          <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:animate-ripple opacity-0 group-hover:opacity-100"></div>
          
          {/* Inner circle with icon or dot */}
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-background to-muted flex items-center justify-center">
            {icon ? icon : <div className="h-3 w-3 rounded-full bg-gradient-to-br from-primary to-secondary group-hover:scale-125 transition-transform duration-300" />}
          </div>
        </div>
        
        {/* Connecting line */}
        {!isLast && (
          <div className="h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-border/30 group-hover:from-primary/40 group-hover:via-primary/20 group-hover:to-primary/10 transition-colors duration-500"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="pb-14 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300">
        {/* Title with animated underline */}
        <div className="font-bold text-xl relative inline-block">
          {title}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-in-out"></div>
        </div>
        
        {/* Subtitle and date with enhanced styling */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2 mt-2">
          <div className="text-primary font-medium flex items-center">
            <span className="w-1 h-1 rounded-full bg-primary mr-1.5 opacity-70"></span>
            {subtitle}
          </div>
          <div className="hidden sm:block text-muted-foreground">•</div>
          <div className="text-sm text-muted-foreground font-medium bg-primary/10 px-2 py-0.5 rounded-full">{date}</div>
        </div>
        
        {/* Description */}
        {description && description.trim() !== "" && (
        <div className="mt-3 text-muted-foreground bg-background/80 p-3 rounded-lg border border-muted/50 group-hover:border-primary/20 transition-colors duration-300">
          {description}
        </div>
        )}
        
        {/* Highlights with enhanced styling */}
        {highlights && highlights.length > 0 && (
          <ul className="mt-4 space-y-2 bg-muted/20 p-3 rounded-lg">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start group/item">
                <span className="mr-3 mt-1 text-primary flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 group-hover/item:bg-primary/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("mt-8 space-y-4", className)}>{children}</div>;
}
