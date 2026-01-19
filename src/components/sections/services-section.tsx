"use client";

import { motion } from "framer-motion";
import { WorkflowBuilderCard } from "@/components/ui/workflow-builder-card";

const services = [
  {
    id: 1,
    title: "Advertising",
    description: "Creative campaigns that capture attention and drive results across all channels.",
    imageUrl: "/advertising.jpg",
  },
  {
    id: 2,
    title: "Branding",
    description: "Create a unique identity that resonates with your target audience and stands out in the market.",
    imageUrl: "/Branding.jpg",
  },
  {
    id: 3,
    title: "Development",
    description: "Build powerful digital solutions that drive your business forward with cutting-edge technology.",
    imageUrl: "/Development.jpg",
  },
  {
    id: 4,
    title: "Media Buying",
    description: "Strategic media placement to maximize your advertising impact and ROI.",
    imageUrl: "/media buying.jpg",
  },
  {
    id: 5,
    title: "Digital",
    description: "Leverage the power of digital channels to reach and engage your customers effectively.",
    imageUrl: "/Digital.jpg",
  },
  {
    id: 6,
    title: "PR",
    description: "Build and maintain your brand's reputation through strategic public relations.",
    imageUrl: "/PR.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            OUR SERVICES
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We are up there and we are down here with our fully fledged advertising scope we help you Create your brand and advertise it Above The Line, Below The Line and Through The Line
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <WorkflowBuilderCard
                imageUrl={service.imageUrl}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
