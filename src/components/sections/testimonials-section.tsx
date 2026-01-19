"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-column";

const testimonials = [
  {
    text: "Working with DUDES has transformed our brand presence. Their creative approach and strategic thinking delivered results beyond our expectations.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Johnson",
    role: "Marketing Director",
  },
  {
    text: "The team's expertise in digital marketing helped us reach new audiences and significantly increase our ROI. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Ahmed Hassan",
    role: "CEO",
  },
  {
    text: "Professional, creative, and always delivering on time. DUDES truly understands what it takes to build a successful brand.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Maya Khalil",
    role: "Brand Manager",
  },
  {
    text: "From concept to execution, DUDES handled our entire campaign with precision and creativity. Outstanding results!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Rashid",
    role: "Business Owner",
  },
  {
    text: "Their event management and BTL services are unmatched. They created an unforgettable experience for our customers.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Layla Mansour",
    role: "Events Coordinator",
  },
  {
    text: "DUDES brings a fresh perspective to every project. Their video production quality is exceptional.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Nour Farah",
    role: "Content Manager",
  },
  {
    text: "A one-stop shop for all advertising needs. Their integrated approach saves time and delivers consistent messaging.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Karim Saad",
    role: "Marketing Head",
  },
  {
    text: "The PR campaign they designed for us generated incredible media coverage and brand awareness.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Dina Abbas",
    role: "Communications Lead",
  },
  {
    text: "Professional photography and creative assets that perfectly captured our brand identity. Excellent work!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Tarek Ibrahim",
    role: "Creative Director",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center bg-background py-20 px-4 relative">
      <div className="container z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-center text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-center text-xl md:text-2xl text-muted-foreground">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
