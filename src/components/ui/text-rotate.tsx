"use client";

import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRotateProps {
  texts: string[];
  rotationInterval?: number;
  mainClassName?: string;
}

export const TextRotate = forwardRef<HTMLSpanElement, TextRotateProps>(
  ({ texts, rotationInterval = 2000, mainClassName, ...props }, ref) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const splitIntoCharacters = (text: string): string[] => {
      if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        return Array.from(segmenter.segment(text), ({ segment }) => segment);
      }
      return Array.from(text);
    };

    const characters = useMemo(() => {
      return splitIntoCharacters(texts[currentTextIndex]);
    }, [texts, currentTextIndex]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, rotationInterval);
      return () => clearInterval(intervalId);
    }, [texts.length, rotationInterval]);

    return (
      <motion.span
        ref={ref}
        className={cn("flex flex-wrap whitespace-pre-wrap", mainClassName)}
        {...props}
      >
        <span className="sr-only">{texts[currentTextIndex]}</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            className="flex flex-wrap"
          >
            {characters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  delay: index * 0.025,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    );
  }
);

TextRotate.displayName = "TextRotate";
