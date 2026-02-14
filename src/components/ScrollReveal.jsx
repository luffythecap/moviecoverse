"use client";

import React, { useRef, useMemo } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* Simple class merge utility (if you don't have cn) */
const cn = (...classes) => classes.filter(Boolean).join(" ");

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl lg:text-3xl",
  lg: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  xl: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const variantClasses = {
  default: "text-slate-800",
  muted: "text-slate-500",
  accent: "text-sky-600",
  primary: "text-blue-700",
};

export default function ScrollReveal({
  children,
  containerClassName,
  textClassName,

  enableBlur = true,
  baseOpacity = 0.15,
  baseRotation = 2,
  blurStrength = 4,
  staggerDelay = 0.06,
  threshold = 0.4,
  duration = 0.8,

  springConfig = {
    damping: 25,
    stiffness: 110,
    mass: 1,
  },

  size = "lg",
  align = "left",
  variant = "default",
}) {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, {
    amount: threshold,
    once: false,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  /* Scroll Rotation */
  const rotation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [baseRotation, 0, 0]
  );

  /* Split Text */
  const splitText = useMemo(() => {
    if (typeof children !== "string") return [];

    return children
      .split(/(\s+)/)
      .map((part, index) => ({
        value: part,
        isSpace: /^\s+$/.test(part),
        id: index,
      }))
      .filter((item) => item.value.length > 0);
  }, [children]);

  /* Container Animation */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  /* Word Animation */
  const wordVariants = {
    hidden: {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        ...springConfig,
        duration,
      },
    },
  };

  return (
    <section
      className={cn(
        "w-full py-16 bg-gradient-to-b from-sky-200 to-[#edf1ef]",
        "flex justify-center items-center",
        containerClassName
      )}
    >
      <motion.div
        ref={containerRef}
        style={{ rotate: rotation }}
        className="max-w-5xl px-6 transform-gpu"
      >
        <motion.p
          className={cn(
            "leading-relaxed font-semibold drop-shadow-sm",

            sizeClasses[size],
            alignClasses[align],
            variantClasses[variant],

            "bg-white/70 backdrop-blur-md",
            "rounded-2xl p-6 md:p-10 shadow-lg",

            textClassName
          )}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {splitText.map((item) =>
            item.isSpace ? (
              <span key={`space-${item.id}`}>{item.value}</span>
            ) : (
              <motion.span
                key={`word-${item.id}`}
                className="inline-block"
                variants={wordVariants}
              >
                {item.value}
              </motion.span>
            )
          )}
        </motion.p>
      </motion.div>
    </section>
  );
}
