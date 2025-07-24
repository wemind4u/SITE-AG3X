import React, { useState } from "react";
import { Section } from "@/components/ui/section";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Instagram,
  TrendingUp,
  Layout,
  Palette,
  Video,
  Lightbulb,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  InstagramIcon: <Instagram className="w-6 h-6" />,
  TrendingUpIcon: <TrendingUp className="w-6 h-6" />,
  LayoutIcon: <Layout className="w-6 h-6" />,
  PaletteIcon: <Palette className="w-6 h-6" />,
  VideoIcon: <Video className="w-6 h-6" />,
  LightbulbIcon: <Lightbulb className="w-6 h-6" />,
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(SERVICES[0].id);

  // Find the main service
  const mainService = SERVICES.find((service) => service.isMain)!;

  // Other services
  const otherServices = SERVICES.filter((service) => !service.isMain);

  return (
    <Section id="services" className="relative py-24">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#00FFC2]/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#00FFC2]/10 rounded-tr-full"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#00FFC2] mb-3 px-3 py-1 bg-[#00FFC2]/10 rounded-full">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Serviços</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Soluções completas para sua presença digital, com foco em resultados
            e crescimento.
          </p>
        </div>

        {/* Main service */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[2rem] overflow-hidden border border-gray-800 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mb-6">
                  {iconMap[mainService.icon] || (
                    <Instagram className="w-6 h-6" />
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {mainService.title}
                </h3>
                <p className="text-gray-300 mb-8">{mainService.description}</p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mr-3 mt-1">
                      ✓
                    </span>
                    <span>Planejamento de conteúdo mensal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mr-3 mt-1">
                      ✓
                    </span>
                    <span>Criação de artes e legendas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mr-3 mt-1">
                      ✓
                    </span>
                    <span>Postagens programadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mr-3 mt-1">
                      ✓
                    </span>
                    <span>Captação de conteúdo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mr-3 mt-1">
                      ✓
                    </span>
                    <span>Relatórios mensais</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-white hover:border-[#00FFC2] hover:text-black px-6 py-3 text-lg"
                  >
                    Saiba mais
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden lg:rounded-bl-[8rem] h-full min-h-[300px]">
              <img
                src="/lovable-uploads/gestao_redes.jpg"
                alt="Gestão de Redes Sociais"
                className="absolute inset-0 w-full h-full object-cover bottom-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Other services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900 rounded-3xl p-6 border border-gray-800 hover:border-[#00FFC2]/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFC2]/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#00FFC2]/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mb-4">
                  {iconMap[service.icon] || <Instagram className="w-5 h-5" />}
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>

                <div className="flex justify-between items-end">
                  <a
                    href="#contact"
                    className="text-sm  text-[#00FFC2] group-hover:text-white transition-colors"
                  >
                    Saiba mais.
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
