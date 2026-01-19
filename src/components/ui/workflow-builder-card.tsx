"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface WorkflowBuilderCardProps {
  imageUrl: string;
  title: string;
  description: string;
  className?: string;
}

export const WorkflowBuilderCard = ({
  imageUrl,
  title,
  description,
  className,
}: WorkflowBuilderCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className={cn("w-full cursor-pointer", className)}
    >
      <Card className="overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-2xl h-full flex flex-col">
        <div className="relative h-40 md:h-48 w-full flex-shrink-0 bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-contain p-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-card-foreground mb-2">
            {title}
          </h3>

          {/* Always show on mobile, animate on desktop hover */}
          <AnimatePresence mode="wait">
            {(isHovered || true) && (
              <motion.p
                key="description"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-sm text-muted-foreground leading-relaxed md:hidden"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
          
          {/* Desktop hover behavior */}
          <AnimatePresence mode="wait">
            {isHovered && (
              <motion.p
                key="description-desktop"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block text-sm text-muted-foreground leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};
