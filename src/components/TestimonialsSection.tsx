import React from "react";
import { Section } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  return (
    <Section id="testimonials" variant="curved" className="py-24">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#00FFC2] mb-3 px-3 py-1 bg-[#00FFC2]/10 rounded-full">
            O que dizem sobre nós
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Depoimentos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Confira o que nossos clientes estão falando sobre nossa agência e os
            resultados alcançados.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#00FFC2]/5 rounded-full blur-xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#00FFC2]/10 rounded-full blur-xl -z-10"></div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-10 border border-gray-800">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#00FFC2]/30">
                        <img
                          src={
                            testimonial.avatar ||
                            "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png"
                          }
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-[#00FFC2]">
                            ★
                          </span>
                        ))}
                      </div>

                      <blockquote className="text-lg md:text-xl mb-6 italic">
                        "{testimonial.content}"
                      </blockquote>

                      <div>
                        <div className="font-bold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 hover:bg-[#00FFC2]/20 rounded-full flex items-center justify-center text-white hover:text-[#00FFC2] transition-colors cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10  hover:bg-[#00FFC2]/20 rounded-full flex items-center justify-center text-white hover:text-[#00FFC2] transition-colors cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
