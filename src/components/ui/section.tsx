
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "alt" | "dark" | "curved";
  innerClassName?: string;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, className, variant = "default", innerClassName, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden py-16 sm:py-24",
          {
            "bg-black text-white": variant === "default",
            "bg-gradient-to-br from-black to-gray-900 text-white": variant === "alt",
            "bg-black text-white dark-variant": variant === "dark",
            "bg-black text-white before:absolute before:top-0 before:left-0 before:w-full before:h-32 before:bg-[#00FFC2] before:opacity-5 before:rounded-[100%_100%_0_0] before:transform before:translate-y-[-50%]": variant === "curved",
          },
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "container mx-auto px-4 sm:px-6 relative z-10",
            innerClassName
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
