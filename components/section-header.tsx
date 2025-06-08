import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-16", className)}>
      <div className="inline-block">
        {subtitle && (
          <span className="text-sm font-medium text-primary/80 mb-3 block">
            • {subtitle} •
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 relative">
          {title}
          <div className="h-1 w-16 bg-primary mx-auto mt-4 relative">
            <div className="absolute h-1 w-6 bg-primary/40 -right-8"></div>
            <div className="absolute h-1 w-6 bg-primary/40 -left-8"></div>
          </div>
        </h2>
      </div>
    </div>
  );
}
