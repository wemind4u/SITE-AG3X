
import React, { useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Sending contact email with data:", formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      console.log("Email sent successfully:", data);
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornaremos em breve!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="py-24">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#00FFC2] mb-3 px-3 py-1 bg-[#00FFC2]/10 rounded-full">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Contato</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Bora colocar seu negócio nas redes do jeito certo?
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00FFC2]/5 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Informações de Contato</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00FFC2]/10 flex items-center justify-center text-[#00FFC2] mr-4">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-200 mb-1">Telefone</div>
                    <a href="tel:+5511947029960" className="text-gray-400 hover:text-[#00FFC2]">
                      +55 11 94702-9960
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00FFC2]/10 flex items-center justify-center text-[#00FFC2] mr-4">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-200 mb-1">Email</div>
                    <a href="mailto:contato@ag3x.marketing" className="text-gray-400 hover:text-[#00FFC2]">
                      contato@ag3x.marketing
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00FFC2]/10 flex items-center justify-center text-[#00FFC2] mr-4">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-200 mb-1">Localização</div>
                    <div className="text-gray-400">
                      São Paulo, SP
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/5511947029960" target="_blank" rel="noopener noreferrer">
              <Button
                variant="curved"
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold"
              >
                Chamar no WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
          
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#00FFC2]/5 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="name">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFC2] transition-colors`}
                    placeholder="Seu nome"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 text-sm" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFC2] transition-colors`}
                    placeholder="Seu email"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 text-sm" htmlFor="phone">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFC2] transition-colors"
                  placeholder="Seu telefone (opcional)"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 text-sm" htmlFor="subject">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full bg-black/50 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFC2] transition-colors`}
                  placeholder="Assunto da mensagem"
                  disabled={isSubmitting}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 text-sm" htmlFor="message">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full bg-black/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFC2] transition-colors resize-none`}
                  placeholder="Sua mensagem"
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00FFC2] hover:bg-[#00FFC2]/90 text-black font-bold px-6 py-3 rounded-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
