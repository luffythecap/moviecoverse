"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useInView } from "framer-motion";

import {
  Newspaper,
  Droplets,
  Factory,
  Leaf,
  Search,
  Trash2,
  BarChart3,
  ShieldCheck,
  Cpu,
} from "lucide-react";

/* ----------------------------------
   Highlight Search Text
---------------------------------- */

const highlightText = (text, search) => {
  if (!search) return text;

  const regex = new RegExp(`(${search})`, "gi");

  return text.split(regex).map((part, i) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <span key={i} className="text-sky-600 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

/* ----------------------------------
   Data
---------------------------------- */

const waterTreatmentArticles = [
  {
    id: 1,
    name: "New Filtration Technology",
    icon: Cpu,
    details: "Advanced membrane filters improve efficiency",
  },
  {
    id: 2,
    name: "Government Safety Guidelines",
    icon: ShieldCheck,
    details: "Updated drinking water quality standards",
  },
  {
    id: 3,
    name: "Eco-Friendly Treatment",
    icon: Leaf,
    details: "Green methods reduce chemical pollution",
  },
  {
    id: 4,
    name: "AI Monitoring Systems",
    icon: BarChart3,
    details: "Smart sensors track water quality",
  },
  {
    id: 5,
    name: "Water Storage Management",
    icon: Droplets,
    details: "Safe storage best practices",
  },
  {
    id: 6,
    name: "Plant Automation Upgrade",
    icon: Factory,
    details: "Modern automation improves output",
  },
  {
    id: 7,
    name: "Industry Research Report",
    icon: Newspaper,
    details: "Latest water treatment innovations",
  },
];

/* ----------------------------------
   Carousel Item (Desktop)
---------------------------------- */

const CarouselItem = ({ item, side }) => {
  const distance = Math.abs(item.distance);

  const opacity = 1 - distance / 4;
  const scale = 1 - distance * 0.1;

  const y = item.distance * 90;
  const x = side === "left" ? -distance * 60 : distance * 60;

  const Icon = item.icon;

  return (
    <motion.div
      className={`absolute flex items-center gap-4 px-6 py-3
      ${side === "left" ? "flex-row-reverse" : ""}`}
      animate={{ opacity, scale, y, x }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-3 bg-sky-600 rounded-full">
        <Icon className="text-white w-6 h-6" />
      </div>

      <div className={side === "left" ? "text-right" : ""}>
        <h4 className="font-semibold text-lg text-gray-900 whitespace-nowrap">
          {item.name}
        </h4>
        <p className="text-sm text-gray-500">{item.details}</p>
      </div>
    </motion.div>
  );
};

/* ----------------------------------
   Main Component
---------------------------------- */

const WaterTreatmentCarousel = ({
  items = waterTreatmentArticles,
  scrollSpeed = 2500,
  visibleCount = 7,
}) => {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  const [search, setSearch] = useState("");

  const rightRef = useRef(null);
  const inView = useInView(rightRef);

  const total = items.length;

  /* ----------------------------------
     Auto Scroll (Desktop)
  ---------------------------------- */

  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
    }, scrollSpeed);

    return () => clearInterval(timer);
  }, [pause, scrollSpeed, total]);

  /* ----------------------------------
     Visible Items
  ---------------------------------- */

  const getVisible = useCallback(() => {
    if (!total) return [];

    const count = visibleCount % 2 === 0 ? visibleCount + 1 : visibleCount;
    const half = Math.floor(count / 2);

    const result = [];

    for (let i = -half; i <= half; i++) {
      let index = current + i;

      if (index < 0) index += total;
      if (index >= total) index -= total;

      result.push({
        ...items[index],
        distance: i,
      });
    }

    return result;
  }, [current, items, total, visibleCount]);

  /* ----------------------------------
     Search Filter
  ---------------------------------- */

  const filtered = useMemo(() => {
    return items.filter((i) =>
      (i.name + " " + i.details)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, items]);

  const active = items[current];

  /* ----------------------------------
     UI
  ---------------------------------- */

  return (
    <section className="py-20 bg-gradient-to-b from-sky-200 to-[#edf1ef] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900">
            Water Treatment News & Updates
          </h2>

          <p className="text-gray-500 mt-2">
            Latest articles and industry information
          </p>

        </div>


        {/* ================= MOBILE ================= */}
        <div className="xl:hidden mb-16">

          {/* Search Bar */}
          <div
            className="sticky top-2 z-20 bg-white/80 backdrop-blur
                       rounded-full shadow-md px-4 text-sky-700 py-2 mb-6
                       flex items-center gap-3"
          >

            <Search size={20} className="text-sky-600" />

            <input
              type="text"
              value={search}
              placeholder="Search water news..."
              onChange={(e) => {
                setSearch(e.target.value);
                setPause(true);
              }}
              className="flex-1 outline-none bg-transparent text-sm"
            />

            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setPause(false);
                }}
              >
                <Trash2 size={18} className="text-gray-400" />
              </button>
            )}

          </div>


          {/* Featured Card */}
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-sky-600 to-indigo-700
                         rounded-3xl p-6 text-white shadow-xl mb-8"
            >

              <div className="flex items-center gap-4 mb-4">

                <div className="bg-white/20 p-3 rounded-xl">
                  <active.icon size={26} />
                </div>

                <h3 className="text-lg font-bold leading-tight">
                  {active.name}
                </h3>

              </div>

              <p className="text-blue-100 text-sm">
                {active.details}
              </p>

              <button className="mt-4 text-sm font-semibold underline">
                Read Full Article →
              </button>

            </motion.div>
          )}


          {/* Search Results (Only When Searching) */}
          {search && filtered.length > 0 && (

            <div className="space-y-4">

              {filtered.map((item) => {

                const realIndex = items.findIndex(
                  (i) => i.id === item.id
                );

                return (
                  <motion.div
                    key={item.id}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setCurrent(realIndex);
                      setPause(false);
                    }}
                    className="flex gap-4 p-4 rounded-2xl
                               bg-white border border-gray-200
                               shadow cursor-pointer"
                  >

                    <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                      <item.icon size={22} />
                    </div>

                    <div className="flex-1">

                      <h4 className="font-semibold text-sm text-gray-800">
                        {highlightText(item.name, search)}
                      </h4>

                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {highlightText(item.details, search)}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>
          )}

        </div>


        {/* ================= DESKTOP ================= */}
        <div className="hidden xl:flex items-center gap-16 justify-center">

          {/* Left */}
          <motion.div
            className="relative w-[400px] h-[450px]"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
          >
            {getVisible().map((item) => (
              <CarouselItem key={item.id} item={item} side="left" />
            ))}
          </motion.div>


          {/* Center */}
          <div className="text-center max-w-md">

            {active && (
              <div className="mb-8">

                <div className="inline-flex p-4 bg-sky-600 rounded-3xl">
                  <active.icon className="text-white w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-4">
                  {active.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {active.details}
                </p>

                <button className="mt-4 text-cyan-600 font-semibold hover:underline">
                  Read Full Article →
                </button>

              </div>
            )}

          </div>


          {/* Right */}
          <motion.div
            ref={rightRef}
            className="relative w-[400px] h-[450px]"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
          >
            {getVisible().map((item) => (
              <CarouselItem key={item.id} item={item} side="right" />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WaterTreatmentCarousel;
