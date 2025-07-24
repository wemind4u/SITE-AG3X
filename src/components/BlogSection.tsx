
import React from "react";
import { Section } from "@/components/ui/section";
import InstagramPosts from "./InstagramPosts";

const BlogSection = () => {
  return (
    <Section id="blog" variant="alt" className="py-24">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#00FFC2] mb-3 px-3 py-1 bg-[#00FFC2]/10 rounded-full">
            Dicas & Conteúdos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Instagram</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights e tendências para você aplicar no seu negócio.
          </p>
        </div>
        
        <InstagramPosts />
      </div>
    </Section>
  );
};

export default BlogSection;
