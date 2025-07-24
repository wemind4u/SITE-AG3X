import React from "react";
import { Instagram, Facebook, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/lovable-uploads/27950040-13c5-411b-a538-74432233c4c8.png"
                alt="AG3X Marketing"
                className="h-10"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Estratégia, conteúdo e presença digital com a sua cara. Cuidamos
              do seu Instagram enquanto você cuida do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#00FFC2]/20 flex items-center justify-center text-gray-400 hover:text-[#00FFC2] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#00FFC2]/20 flex items-center justify-center text-gray-400 hover:text-[#00FFC2] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#00FFC2]/20 flex items-center justify-center text-gray-400 hover:text-[#00FFC2] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#00FFC2]/20 flex items-center justify-center text-gray-400 hover:text-[#00FFC2] transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Links rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Quem somos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Gestão de Redes Sociais
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Tráfego pago
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Landing pages
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  Edição de vídeos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5511947029960"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  +55 11 94702-9960
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@ag3x.marketing"
                  className="text-gray-400 hover:text-[#00FFC2] transition-colors"
                >
                  contato@ag3x.marketing
                </a>
              </li>
              <li className="text-gray-400">São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-800">
          <div className="flex flex-col md:flex-column items-left gap-4 text-gray-400 text-sm mb-4 md:mb-0  ">
            <div className="hover:text-white transition-colors">
              &copy; {new Date().getFullYear()} AG3X Marketing. Todos os
              direitos reservados.
            </div>
            <div className="flex items-center gap-1">
              <span>Desenvolvido por</span>
              <a
                href="https://www.wedesc.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ffc354] hover:text-[#00FFC2]/80 font-medium transition-colors"
              >
                WeDesc - Soluções em Tecnologia.
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className={cn(
                "w-10 h-10 rounded-full bg-gray-900 hover:bg-[#00FFC2]/20 flex items-center justify-center text-gray-400 hover:text-[#00FFC2] transition-colors focus:outline-none"
              )}
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
