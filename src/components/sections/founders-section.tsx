"use client";

import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const founders = [
  {
    id: 1,
    name: "Fadi Tharwat",
    designation: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    designation: "Co-Founder & COO",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export function FoundersSection() {
  return (
    <section id="founders" className="min-h-screen flex items-center justify-center py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-12">
            Meet the Founders
          </h2>
          
          <div className="flex justify-center items-center">
            <AnimatedTooltip items={founders} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
