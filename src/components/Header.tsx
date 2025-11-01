import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  size?: "large" | "small";
}

export const Header = ({
  title = "Blog de Investimentos",
  subtitle,
  size = "large",
}: HeaderProps) => {
  const isLarge = size === "large";

  return (
    <header
      className={cn(
        "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 shadow-lg",
        isLarge ? "py-12" : "py-6"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <TrendingUp className={cn(isLarge ? "h-10 w-10" : "h-8 w-8")} />
          <h1
            className={cn(
              "font-bold",
              isLarge ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            )}
          >
            {title}
          </h1>
        </div>
        {subtitle && (
          <p className="text-center text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};
