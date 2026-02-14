"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Calendar, Droplets, Factory, Recycle } from "lucide-react";

/* Utility */
const cn = (...c) => c.filter(Boolean).join(" ");

/* Events */
const DEFAULT_EVENTS = [
  {
    year: "2018",
    title: "Plant Construction",
    subtitle: "Infrastructure Setup",
    description:
      "Construction of water treatment facility with modern filtration systems.",
    icon: <Factory className="h-4 w-4 text-cyan-500" />,
  },
  {
    year: "2019",
    title: "Water Testing Lab",
    subtitle: "Quality Control",
    description:
      "Installation of advanced laboratory for water quality testing.",
    icon: <Droplets className="h-4 w-4 text-cyan-500" />,
  },
  {
    year: "2021",
    title: "Recycling System",
    subtitle: "Sustainability",
    description:
      "Implementation of water recycling and reuse systems.",
    icon: <Recycle className="h-4 w-4 text-cyan-500" />,
  },
  {
    year: "2023",
    title: "Smart Automation",
    subtitle: "Digital Upgrade",
    description:
      "AI-based monitoring and automated purification process.",
    icon: <Droplets className="h-4 w-4 text-cyan-500" />,
  },
];

/* Component */
export default function WaterTimeline({
  events = DEFAULT_EVENTS,
  title = "Water Treatment Journey",
  subtitle = "From purification to sustainability",
}) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect Mobile */
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  /* Scroll */
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  const progressHeight = useTransform(
    smooth,
    [0, 1],
    ["0%", "100%"]
  );

  /* Parallax (disabled on mobile) */
  const cardOffset = useTransform(
    smooth,
    [0, 1],
    isMobile ? [0, 0] : [40, -40]
  );

  /* Active point */
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      setActiveIndex(Math.floor(v * events.length));
    });
  }, [scrollYProgress, events.length]);

  return (
    <div
      ref={scrollRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-[#edf1ef] to-sky-200 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-sky-700">
          {title}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-4 pb-32">

        {/* Base line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/30"
          style={{ width: 4, height: "100%" }}
        />

        {/* Progress */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10 rounded-full"
          style={{
            height: progressHeight,
            width: 4,
            background:
              "linear-gradient(to bottom,#22d3ee,#3b82f6)",
          }}
        />

        {/* Events */}
        <div className="relative z-20">

          {events.map((event, index) => (
            <div
              key={index}
              className={cn(
                "relative flex mb-24 items-center",
                "flex-col lg:flex-row",
                index % 2 === 0
                  ? "lg:justify-start"
                  : "lg:flex-row-reverse"
              )}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 z-30">
                <motion.div
                  className={cn(
                    "w-5 h-5 rounded-full border-4 bg-white",
                    index <= activeIndex
                      ? "border-cyan-600"
                      : "border-slate-300"
                  )}
                  animate={
                    !isMobile && index <= activeIndex
                      ? { scale: [1, 1.3, 1] }
                      : {}
                  }
                  transition={{ duration: 1 }}
                />
              </div>

              {/* Card */}
              <motion.div
                className="
                  w-full lg:w-[45%] mt-14 lg:mt-0
                  bg-slate-100 border border-slate-200
                  rounded-2xl shadow-lg
                "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  y: isMobile ? 0 : cardOffset,
                }}
              >
                <div className="p-6">

                  {/* Year */}
                  <div className="flex items-center mb-3 text-cyan-600 font-bold">
                    {event.icon || (
                      <Calendar className="h-4 w-4 mr-2" />
                    )}
                    {event.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-sky-900 font-bold mb-1">
                    {event.title}
                  </h3>

                  {/* Subtitle */}
                  {event.subtitle && (
                    <p className="text-sky-800 mb-2">
                      {event.subtitle}
                    </p>
                  )}

                  {/* Desc */}
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {event.description}
                  </p>

                </div>
              </motion.div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
