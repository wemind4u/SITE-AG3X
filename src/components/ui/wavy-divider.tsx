
import { cn } from "@/lib/utils";

interface WavyDividerProps {
  className?: string;
  color?: string;
  height?: number;
  position?: "top" | "bottom";
}

export function WavyDivider({
  className,
  color = "currentColor",
  height = 50,
  position = "bottom",
}: WavyDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-0",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{ height: height }}
    >
      <svg
        className="relative block w-full h-full"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C30,30 70,30 100,0 S170,30 200,0 v100 h-200 Z"
          style={{ 
            fill: color,
            transform: position === "top" ? "rotate(180deg)" : "none"
          }}
        />
      </svg>
    </div>
  );
}
