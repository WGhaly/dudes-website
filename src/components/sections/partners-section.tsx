"use client";

import { motion } from "framer-motion";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Simple text-based logos for demonstration
const BrandLogo = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center h-full w-full">
    <span className="text-2xl md:text-4xl font-bold text-foreground">
      {text}
    </span>
  </div>
);

const partners = [
  {
    id: 1,
    name: "Brand A",
    img: () => <BrandLogo text="BRAND A" />,
  },
  {
    id: 2,
    name: "Brand B",
    img: () => <BrandLogo text="BRAND B" />,
  },
  {
    id: 3,
    name: "Brand C",
    img: () => <BrandLogo text="BRAND C" />,
  },
  {
    id: 4,
    name: "Brand D",
    img: () => <BrandLogo text="BRAND D" />,
  },
  {
    id: 5,
    name: "Brand E",
    img: () => <BrandLogo text="BRAND E" />,
  },
  {
    id: 6,
    name: "Brand F",
    img: () => <BrandLogo text="BRAND F" />,
  },
];

export function PartnersSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            OUR PARTNERS In Success
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Here is a list of our most prominent clients.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <LogoCarousel logos={partners} columnCount={3} />
        </div>
      </div>
    </section>
  );
}
