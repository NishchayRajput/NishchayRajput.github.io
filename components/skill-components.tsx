import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

export function SkillCard({ name, icon, className }: SkillCardProps) {
  // Generate a unique ID based on the skill name for SVG defs
  const skillId = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Card className={cn(
      "hover:border-primary transition-all duration-300 overflow-hidden group", 
      "hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 backdrop-blur-sm",
      className
    )}>
      <CardContent className="flex flex-col items-center justify-center p-6 relative">
        {/* Interactive animated background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`${skillId}-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.15" />
              </linearGradient>
              <radialGradient id={`${skillId}-radial`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
              </radialGradient>
              <pattern id={`${skillId}-pattern`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="var(--color-primary)" opacity="0.2" />
              </pattern>
            </defs>
            
            {/* Background elements with enhanced animations */}
            <rect width="100" height="100" fill={`url(#${skillId}-pattern)`} opacity="0.2" className="group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Animated circles */}
            <circle 
              cx="20" 
              cy="20" 
              r="8" 
              fill={`url(#${skillId}-radial)`} 
              className="group-hover:opacity-100 opacity-0 transition-opacity duration-700"
              filter="blur(2px)"
            >
              <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="translate" 
                from="0 0" 
                to="5 5" 
                dur="6s" 
                repeatCount="indefinite" 
                additive="sum"
                begin="0.3s"
              />
            </circle>
            
            <circle 
              cx="80" 
              cy="30" 
              r="12" 
              fill={`url(#${skillId}-gradient)`} 
              className="group-hover:opacity-100 opacity-0 transition-opacity duration-700" 
              filter="blur(1px)"
            >
              <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="translate" 
                from="0 0" 
                to="-5 5" 
                dur="8s" 
                repeatCount="indefinite" 
                additive="sum"
                begin="0.1s"
              />
            </circle>
            
            <rect 
              x="15" 
              y="65" 
              width="20" 
              height="20" 
              rx="4" 
              fill={`url(#${skillId}-gradient)`} 
              className="group-hover:opacity-100 opacity-0 transition-opacity duration-700"
              filter="blur(1px)"
            >
              <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate" 
                from="0 25 75" 
                to="10 25 75" 
                dur="10s" 
                repeatCount="indefinite" 
              />
            </rect>
            
            {/* Decorative lines */}
            <path 
              d="M10,50 Q30,30 50,50 T90,50" 
              stroke="var(--color-primary)" 
              strokeWidth="0.3" 
              opacity="0" 
              strokeDasharray="1,2"
              className="group-hover:opacity-30 transition-opacity duration-1000"
              fill="none"
            >
              <animate 
                attributeName="d" 
                from="M10,50 Q30,30 50,50 T90,50" 
                to="M10,50 Q30,70 50,50 T90,50" 
                dur="10s" 
                repeatCount="indefinite" 
              />
            </path>
          </svg>
        </div>
        
        {/* Icon with enhanced interactive effects */}
        <div className="mb-4 text-primary transform transition-all duration-300 z-10 relative group-hover:scale-110">
          <div className="p-4 rounded-full bg-gradient-to-br from-background/90 to-background/50 border border-primary/20 shadow-sm group-hover:border-primary/40 group-hover:shadow-md relative overflow-hidden">
            {/* Pulsing background effect */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-full" />
            
            {/* Ripple effect */}
            <div className="absolute inset-0 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-full" />
            
            {/* Icon */}
            <div className="relative z-10">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Name with creative animated effects */}
        <div className="relative z-10 text-center">
          <h3 className="font-medium relative inline-block">
            {name}
            
            {/* Animated underline effect */}
            <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-secondary mt-1 group-hover:w-full transition-all duration-500 ease-out" />
          </h3>
          
          {/* Skill level indicator dots appearing on hover */}
          <div className="flex justify-center mt-2 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[1, 2, 3].map((_, i) => (
              <div 
                key={i}
                className="h-1 w-1 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: `${i * 0.2}s`, animationDuration: "2s" }}
              />
            ))}
          </div>
        </div>
        
        {/* Enhanced background effects */}
        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-secondary/10 group-hover:scale-150 transform transition-all duration-700" />
        
        {/* Corner accents */}
        <div className="absolute top-2 right-2 h-3 w-3 border-t border-r border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
        <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
      </CardContent>
    </Card>
  );
}

interface SoftSkillCardProps {
  title: string;
  description: string;
  className?: string;
}

export function SoftSkillCard({ title, description, className }: SoftSkillCardProps) {
  // Generate a unique ID for SVG patterns
  const skillId = `soft-skill-${title.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-500 group hover:border-primary/50 hover:-translate-y-1",
      "hover:shadow-lg hover:shadow-primary/10",
      className
    )}>
      <CardContent className="p-6 relative">
        {/* Enhanced interactive background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-0 group-hover:opacity-30 transition-all duration-700">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`${skillId}-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient id={`${skillId}-radial`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <pattern id={`${skillId}-pattern`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="10" cy="10" r="1" fill="var(--color-primary)" opacity="0.3" />
              </pattern>
              <filter id={`${skillId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Pattern background */}
            <rect width="100" height="100" fill={`url(#${skillId}-pattern)`} opacity="0.7" />
            
            {/* Animated flowing curves */}
            <path 
              d="M0,50 Q25,30 50,50 T100,50" 
              stroke="var(--color-primary)" 
              strokeWidth="0.5" 
              fill="none" 
              opacity="0.5"
            >
              <animate 
                attributeName="d" 
                values="M0,50 Q25,30 50,50 T100,50;M0,50 Q25,70 50,50 T100,50;M0,50 Q25,30 50,50 T100,50" 
                dur="15s" 
                repeatCount="indefinite" 
              />
            </path>
            <path 
              d="M0,70 Q25,50 50,70 T100,70" 
              stroke="var(--color-secondary)" 
              strokeWidth="0.5" 
              fill="none" 
              opacity="0.3"
            >
              <animate 
                attributeName="d" 
                values="M0,70 Q25,50 50,70 T100,70;M0,70 Q25,90 50,70 T100,70;M0,70 Q25,50 50,70 T100,70" 
                dur="12s" 
                repeatCount="indefinite" 
              />
            </path>
            
            {/* Floating elements */}
            <circle 
              cx="80" 
              cy="20" 
              r="5" 
              fill={`url(#${skillId}-radial)`}
              opacity="0.8"
              filter={`url(#${skillId}-glow)`}
            >
              <animate 
                attributeName="cy" 
                values="20;25;20" 
                dur="8s" 
                repeatCount="indefinite" 
              />
            </circle>
          </svg>
        </div>
        
        {/* Enhanced title with animated text gradient effect */}
        <div className="relative z-10">
          <h3 className="font-semibold text-lg mb-4 relative inline-block group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">
            {title}
            
            {/* Creative animated underline that expands from center */}
            <div className="h-0.5 bg-gradient-to-r from-primary to-secondary mt-2 w-0 group-hover:w-full transition-all duration-700 origin-left"></div>
          </h3>
        </div>
        
        {/* Description with fade-in animation */}
        <div className="relative z-10 overflow-hidden">
          <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-500">
            {description}
          </p>
          
          {/* Subtle indicator dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-500 mt-4"></div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 group-hover:scale-[4] transform transition-all duration-700 opacity-0 group-hover:opacity-100 blur-sm"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full border border-primary/10 group-hover:border-primary/20 group-hover:scale-150 transition-all duration-700 border-dashed"></div>
        
        {/* Corner accent shapes */}
        <div className="absolute top-2 left-2 h-4 w-4 border-t border-l border-primary/0 group-hover:border-primary/30 transition-all duration-500"></div>
        <div className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-primary/0 group-hover:border-primary/30 transition-all duration-500"></div>
        
        {/* Interactive highlight element */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </CardContent>
    </Card>
  );
}

interface SkillProgressProps {
  name: string;
  percentage: number;
  className?: string;
  icon?: React.ReactNode;
}

export function SkillProgress({ name, percentage, className, icon }: SkillProgressProps) {
  // Generate a unique ID based on the skill name for SVG defs
  const skillId = `skill-${name.toLowerCase().replace(/\s+/g, '-')}`;
  
  // Proficiency level based on percentage
  const getProficiencyLabel = (percent: number) => {
    if (percent >= 90) return "Expert";
    if (percent >= 80) return "Advanced";
    if (percent >= 65) return "Proficient";
    if (percent >= 45) return "Intermediate";
    return "Beginner";
  };

  // Dynamic dots array based on percentage (5 dots total)
  const skillDots = Array(5).fill(0).map((_, index) => {
    // Calculate if this dot should be filled based on percentage
    const threshold = index * 20; // 0, 20, 40, 60, 80
    const isFilled = percentage > threshold;
    return isFilled;
  });
  
  return (
    <div className={cn("group", className)}>
      <Card className="overflow-hidden border-muted hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
        <CardContent className="p-5 relative">
          {/* Geometric background elements */}
          <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id={`${skillId}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id={`${skillId}-dots-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="var(--color-secondary)" />
                </linearGradient>
                <pattern id={`${skillId}-pattern`} width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="5" r="0.5" fill="currentColor" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill={`url(#${skillId}-pattern)`} className="text-primary" />
              <path d="M0,30 Q25,5 50,30 T100,30" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" opacity="0.2" />
              <path d="M0,70 Q25,95 50,70 T100,70" stroke="var(--color-secondary)" strokeWidth="0.5" fill="none" opacity="0.2" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between mb-4 z-10 relative">
            <div className="flex items-center gap-2">
              {icon && (
                <div className="text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
              )}
              <h3 className="font-medium text-lg">{name}</h3>
            </div>
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {getProficiencyLabel(percentage)}
            </span>
          </div>
          
          {/* Interactive animated skill visualization */}
          <div className="flex justify-between items-center mt-2 z-10 relative">
            {/* Hexagon skill dots */}
            <div className="flex gap-2 items-center">
              {skillDots.map((isFilled, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "transition-all duration-300 transform h-4 w-4", 
                    "group-hover:scale-110",
                    "flex items-center justify-center"
                  )}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <polygon 
                      points="10,1 18,5.5 18,14.5 10,19 2,14.5 2,5.5" 
                      fill={isFilled ? `url(#${skillId}-dots-gradient)` : "transparent"} 
                      stroke={isFilled ? "transparent" : "var(--color-muted)"}
                      strokeWidth="1"
                      opacity={isFilled ? "1" : "0.4"}
                      className={isFilled ? "animate-pulse" : ""}
                      style={{ animationDuration: `${2 + index * 0.5}s` }}
                    />
                  </svg>
                </div>
              ))}
            </div>
            
            {/* Skill details on hover */}
            <div className="relative overflow-hidden h-6 w-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-1 h-1 bg-primary rounded-full animate-ping"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs group-hover:opacity-0">+</div>
              </div>
            </div>
          </div>
          
          {/* Animated border on hover */}
          <div 
            className="absolute h-0.5 w-0 bg-gradient-to-r from-primary via-primary/50 to-secondary bottom-0 left-0 group-hover:w-full transition-all duration-700" 
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          />
          
          {/* Decorative corner accents */}
          <div className="absolute top-2 right-2 h-3 w-3 border-t border-r border-primary/20 group-hover:border-primary/50 transition-colors duration-300"></div>
          <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-primary/20 group-hover:border-primary/50 transition-colors duration-300"></div>
        </CardContent>
      </Card>
    </div>
  );
}
