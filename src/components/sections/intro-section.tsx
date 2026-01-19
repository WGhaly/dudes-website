"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Zap } from "lucide-react";

export function IntroSection() {
  const features = [
    { icon: Lightbulb, text: "Creative Excellence" },
    { icon: Target, text: "Results Driven" },
    { icon: Zap, text: "Full-Service Agency" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-vida-loca/10 via-desert-storm/20 to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-vida-loca/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-vida-loca/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            DUDES{" "}
            <span className="text-vida-loca">ADVERTISING</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Simply put, we are a bunch of dudes who understand the difference between just coming up with creative taglines and actually getting results that serve the brand and the end consumer needs, we harmonize all your advertising needs; from Brand identity and strategy, creative ads and campaigns to digital platforms management and media buying.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center gap-3 md:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                title={feature.text}
                className="group relative w-10 h-10 md:w-auto md:h-auto md:flex md:items-center md:gap-3 md:px-6 md:py-3 bg-white rounded-full shadow-md border border-gray-200/50 flex items-center justify-center"
              >
                <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-vida-loca" />
                <span className="hidden md:inline font-semibold text-foreground">{feature.text}</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity md:hidden whitespace-nowrap pointer-events-none">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
