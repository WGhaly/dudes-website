"use client";

import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface Person {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: Person[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {items.map((item) => (
        <div
          className="relative group"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {(hoveredIndex === item.id) && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-foreground z-50 shadow-xl px-4 py-2"
              >
                <div className="font-bold text-background relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            onTouchStart={() => setHoveredIndex(item.id)}
            onTouchEnd={() => setHoveredIndex(null)}
            height={120}
            width={120}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-24 w-24 md:h-32 md:w-32 border-4 group-hover:scale-105 group-hover:z-30 border-primary relative transition duration-500 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};
