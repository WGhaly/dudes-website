"use client";

import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-chelsea-cucumber/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground text-center">
            <span className="block mb-2 text-center">WHATEVER IT IS,</span>
            <span className="block text-center">
              <TextRotate
                texts={["WE DO IT.", "WE CREATE IT.", "WE DELIVER IT."]}
                mainClassName="text-primary overflow-hidden inline-block"
              />
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Long story short, With more than 15 years of experience in Marketing, Advertising and customer experience, we are eager to re-write your brand story and achieve tangible results together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
