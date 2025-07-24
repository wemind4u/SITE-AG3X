
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        // Mobile: sempre preto sólido, Desktop: transparente quando no topo, preto quando scrollado
        "bg-black md:bg-transparent md:backdrop-blur-none",
        isScrolled && "md:bg-black/80 md:backdrop-blur-md"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="AG3X Marketing"
        >
          <img 
            src="/lovable-uploads/27950040-13c5-411b-a538-74432233c4c8.png" 
            alt="AG3X Marketing Logo" 
            className="h-7 sm:h-8" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#" 
            className="nav-link text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#about" className="nav-link text-white">Quem Somos</a>
          <a href="#services" className="nav-link text-white">Serviços</a>
          <a href="#testimonials" className="nav-link text-white">Depoimentos</a>
          <a href="#blog" className="nav-link text-white">Instagram</a>
          <a href="#contact" className="nav-link text-white">Contato</a>
        </nav>

        {/* Mobile menu button - sempre visível e clicável */}
        <button 
          className="md:hidden text-white p-3 focus:outline-none relative z-[70]" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - altura ajustada e transições suaves */}
      <div className={cn(
        "fixed inset-0 z-[60] bg-black flex flex-col justify-start pt-20 px-6 md:hidden transition-all duration-500 ease-in-out",
        isMenuOpen 
          ? "opacity-100 translate-x-0 pointer-events-auto" 
          : "opacity-0 translate-x-full pointer-events-none"
      )}>
        {/* Background elements for mobile menu */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
        
        {/* Menu items - altura ajustada para mobile */}
        <nav className="flex flex-col space-y-4 items-center relative z-10 max-h-[calc(100vh-160px)] overflow-y-auto">
          <a 
            href="#" 
            className="text-xl font-medium py-3 px-6 w-full max-w-xs text-center rounded-lg text-white hover:text-[#00FFC2] hover:bg-[#00FFC2]/10 transition-all duration-300" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              closeMenu();
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-xl font-medium py-3 px-6 w-full max-w-xs text-center rounded-lg text-white hover:text-[#00FFC2] hover:bg-[#00FFC2]/10 transition-all duration-300" 
            onClick={closeMenu}
          >
            Quem Somos
          </a>
          <a 
            href="#services" 
            className="text-xl font-medium py-3 px-6 w-full max-w-xs text-center rounded-lg text-white hover:text-[#00FFC2] hover:bg-[#00FFC2]/10 transition-all duration-300" 
            onClick={closeMenu}
          >
            Serviços
          </a>
          <a 
            href="#testimonials" 
            className="text-xl font-medium py-3 px-6 w-full max-w-xs text-center rounded-lg text-white hover:text-[#00FFC2] hover:bg-[#00FFC2]/10 transition-all duration-300" 
            onClick={closeMenu}
          >
            Depoimentos
          </a>
          <a 
            href="#blog" 
            className="text-xl font-medium py-3 px-6 w-full max-w-xs text-center rounded-lg text-white hover:text-[#00FFC2] hover:bg-[#00FFC2]/10 transition-all duration-300" 
            onClick={closeMenu}
          >
            Instagram
          </a>
          <a 
            href="#contact" 
            className="text-xl font-medium py-3 px-6 w-full max-w-xs text-center rounded-lg text-white hover:text-[#00FFC2] hover:bg-[#00FFC2]/10 transition-all duration-300" 
            onClick={closeMenu}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
