"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CallDudeSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-20">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(62, 157, 30, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-vida-loca/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-vida-loca/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            CALL A <span className="text-vida-loca">DUDE</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            We know how it is dealing with different parties to advertise; <span className="font-semibold text-foreground">Exhausting, Confusing and Expensive.</span> Well, this ends now because whatever it is, we do it.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative w-full max-w-2xl mx-auto"
        >
          <Image
            src="/call-a-dude.png"
            alt="Call a Dude Benefits"
            width={600}
            height={300}
            className="w-full h-auto rounded-2xl shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
