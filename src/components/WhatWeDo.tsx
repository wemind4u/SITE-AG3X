
import React from "react";
import { Section } from "@/components/ui/section";
import { STATS } from "@/lib/constants";

const WhatWeDo = () => {
  return (
    <Section id="what-we-do" variant="alt" className="py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#00FFC2] mb-3 px-3 py-1 bg-[#00FFC2]/10 rounded-full">
            Nossa abordagem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">O que fazemos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A AG3X é uma agência de marketing digital focada em fazer seu negócio se destacar nas
            redes sociais. Criamos, planejamos e publicamos conteúdos estratégicos para o Instagram,
            Facebook e LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {STATS.map((stat) => (
            <div 
              key={stat.id}
              className="relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC2]/5 to-transparent rounded-2xl transform transition-all duration-500 group-hover:scale-105"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-[#00FFC2] mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFC2]/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#00FFC2]/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Nosso diferencial</h3>
            <div className="text-lg text-gray-300 space-y-4">
              <p>
                Aqui não tem fórmula mágica: tem <span className="text-[#00FFC2] font-semibold">estratégia</span>. 
                Planejamos, executamos e entregamos resultados com relatórios mensais que mostram o que realmente 
                importa: engajamento e alcance.
              </p>
              
              <ul className="space-y-3 mt-8">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mr-3 mt-1">✓</span>
                  <span>Equipe especialista em social media</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mr-3 mt-1">✓</span>
                  <span>Conteúdo personalizado por segmento</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mr-3 mt-1">✓</span>
                  <span>Relatórios mensais detalhados</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] mr-3 mt-1">✓</span>
                  <span>Estratégia alinhada aos seus objetivos de negócio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhatWeDo;
