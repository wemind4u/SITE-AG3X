import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.9;
      const y = (e.clientY - top) / height - 0.9;

      const elements = heroRef.current.querySelectorAll(".parallax-element");
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || "0.1");
        const xPos = x * speed * 1000;
        const yPos = y * speed * 1000;
        (
          el as HTMLElement
        ).style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
      });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden bg-black"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-[#00FFC2] opacity-20 blur-[100px] parallax-element"
          data-speed="-0.03"
        ></div>
        <div
          className="absolute bottom-[10%] left-[15%] w-[25vw] h-[25vw] rounded-full bg-[#00FFC2] opacity-10 blur-[80px] parallax-element"
          data-speed="0.05"
        ></div>
      </div>

      {/* Logo floating element - Mobile: centralized with low opacity, Desktop: top right */}
      <div
        className="absolute top-[5%] left-1/2 transform -translate-x-1/2 md:left-auto md:right-[6%] md:top-[35%] md:translate-x-0 h-12 md:h-40 parallax-element opacity-20 md:opacity-100"
        data-speed="0.1"
      >
        <img
          src="/lovable-uploads/27950040-13c5-411b-a538-74432233c4c8.png"
          alt="AG3X Logo"
          className="w-full h-full object-contain animate-float"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#00FFC2]/10 border border-[#00FFC2]/20 text-[#00FFC2]">
            <span className="text-sm font-medium">
              Elevando sua presença digital ↗
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="block">AG3X Marketing</span>
            <span
              className={cn(
                "bg-gradient-to-r from-white via-[#00FFC2] to-white bg-clip-text text-transparent"
              )}
            >
              Estratégia, conteúdo e presença digital com a sua cara.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Cuidamos do seu Instagram enquanto você cuida do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              variant="curved"
              size="hero"
              className="bg-[#00FFC2] hover:bg-[#00FFC2]/90 text-black font-bold group relative overflow-hidden  "
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              Quero alavancar meu Instagram
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Curved shapes */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[#00FFC2]/5 rounded-t-[50%] transform translate-y-1/2"></div>
      <div className="absolute -bottom-5 right-0 w-[40%] h-40 bg-[#00FFC2]/10 rounded-tl-[100%]"></div>
    </div>
  );
};

export default Hero;
