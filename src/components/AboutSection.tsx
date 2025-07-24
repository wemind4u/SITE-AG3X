
import React from "react";
import { Section } from "@/components/ui/section";
import { TEAM } from "@/lib/constants";
import { Instagram, Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <Section id="about" variant="curved" className="py-24">
      <div className="relative z-10">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#00FFC2]/10 blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#00FFC2]/5 blur-xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border border-[#00FFC2]/30"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative">
              <span className="text-[#00FFC2] absolute -top-8 left-0 text-sm font-normal">Nossa história</span>
              Quem Somos
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                A AG3X nasceu em 2024, fundada por Arthur Alvarenga e Vinicius Godoi, com a missão de transformar o marketing digital de pequenas e médias empresas. Somos apaixonados por conteúdo, design, criatividade e resultados.
              </p>
              
              <div className="space-y-3 bg-gradient-to-br from-black to-gray-900 p-6 rounded-2xl border border-gray-800">
                <div className="mb-3">
                  <span className="text-[#00FFC2] font-semibold">Missão</span>
                  <p className="text-white">Elevar a presença digital de pequenas e médias empresas.</p>
                </div>
                
                <div className="mb-3">
                  <span className="text-[#00FFC2] font-semibold">Visão</span>
                  <p className="text-white">Ser referência em marketing digital dinâmico e acessível.</p>
                </div>
                
                <div>
                  <span className="text-[#00FFC2] font-semibold">Valores</span>
                  <p className="text-white">Criatividade, transparência, resultados e parceria.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TEAM.map((member) => (
                <div 
                  key={member.id}
                  className="relative group overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors duration-300 p-6 border border-gray-800"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFC2]/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#00FFC2]/20 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#00FFC2]/50">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#00FFC2] mb-3 text-sm">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                    
                    <div className="flex gap-3">
                      <a 
                        href={member.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-800 hover:bg-[#00FFC2]/20 text-gray-400 hover:text-[#00FFC2] transition-colors"
                      >
                        <Instagram size={16} />
                      </a>
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-800 hover:bg-[#00FFC2]/20 text-gray-400 hover:text-[#00FFC2] transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
