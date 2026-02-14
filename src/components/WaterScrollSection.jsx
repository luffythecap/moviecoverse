"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

/* Lucide Icons */
import {
  Droplets,
  Filter,
  ShieldCheck,
  Warehouse,
  Truck,
  BarChart3,
  Trash2,
  Waves,
} from "lucide-react";


/* ---------------- Utils ---------------- */

function cn(...c) {
  return c.filter(Boolean).join(" ");
}

const ScrollContext = React.createContext(null);


/* ================= MAIN ================= */

export default function WaterScrollSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-t from-[#edf1ef]  to-sky-200 overflow-hidden mb-10">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />


      {/* Header */}
      <div className="relative text-center mb-20 px-6">

        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-sky-200/70 text-sky-800 text-sm font-medium">
          Smart Purification
        </span>

        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
          Water Treatment <br className="md:hidden" />
          Process
        </h2>

        <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
          Advanced eco-friendly technology ensuring safe,
          clean and sustainable water supply.
        </p>

      </div>


      <ScrollContainer className="space-y-16 md:space-y-24">

        {/* Row 1 */}
        <ScrollRow baseVelocity={4}>

          <StageCard
            icon={Droplets}
            title="Collection"
            desc="Water sourced from rivers & reservoirs"
            tag="Stage 01"
          />

          <StageCard
            icon={Trash2}
            title="Screening"
            desc="Removal of large waste particles"
            tag="Stage 02"
          />

          <StageCard
            icon={Waves}
            title="Sedimentation"
            desc="Heavy impurities settle down"
            tag="Stage 03"
          />

          <StageCard
            icon={Filter}
            title="Filtration"
            desc="Sand & carbon purification"
            tag="Stage 04"
          />

        </ScrollRow>


        {/* Row 2 */}
        <ScrollRow baseVelocity={3} direction={-1}>

          <StageCard
            icon={ShieldCheck}
            title="Disinfection"
            desc="UV & Chlorine treatment"
            tag="Stage 05"
          />

          <StageCard
            icon={Warehouse}
            title="Storage"
            desc="Safe water tanks"
            tag="Stage 06"
          />

          <StageCard
            icon={Truck}
            title="Distribution"
            desc="Supply to homes & industries"
            tag="Stage 07"
          />

          <StageCard
            icon={BarChart3}
            title="Monitoring"
            desc="Continuous quality testing"
            tag="Stage 08"
          />

        </ScrollRow>

      </ScrollContainer>
    </section>
  );
}


/* ================= CONTAINER ================= */

function ScrollContainer({ children, className }) {
  const { scrollY } = useScroll();

  const vel = useVelocity(scrollY);

  const smooth = useSpring(vel, {
    damping: 40,
    stiffness: 300,
  });

  const factor = useTransform(smooth, (v) => {
    const sign = v < 0 ? -1 : 1;
    const mag = Math.min(6, (Math.abs(v) / 900) * 6);
    return sign * mag;
  });

  return (
    <ScrollContext.Provider value={factor}>
      <div className={cn("relative w-full", className)}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
}


/* ================= ROW ================= */

function ScrollRow({
  children,
  baseVelocity = 4,
  direction = 1,
  className,
}) {
  const ctx = useContext(ScrollContext);

  if (!ctx) return null;

  return (
    <ScrollRowImpl
      velocityFactor={ctx}
      baseVelocity={baseVelocity}
      direction={direction}
      className={className}
    >
      {children}
    </ScrollRowImpl>
  );
}


/* ================= ROW IMPL ================= */

function ScrollRowImpl({
  children,
  velocityFactor,
  baseVelocity,
  direction,
  className,
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);

  const [copies, setCopies] = useState(3);

  const prev = useRef(null);
  const widthRef = useRef(0);
  const base = useRef(0);

  const items = useMemo(
    () => React.Children.toArray(children),
    [children]
  );


  /* Measure width */
  useEffect(() => {
    if (!ref.current) return;

    const block = ref.current.querySelector(".scroll-block");

    if (block) {
      widthRef.current = block.scrollWidth;

      const w = ref.current.offsetWidth;

      setCopies(
        Math.max(3, Math.ceil(w / widthRef.current) + 2)
      );
    }
  }, [items]);


  const inView = useInView(ref, { margin: "30%" });


  /* Animate */
  useAnimationFrame((t) => {
    if (!inView) return;

    if (prev.current == null) prev.current = t;

    const dt = (t - prev.current) / 1000;

    prev.current = t;

    const w = widthRef.current;

    if (!w) return;

    const v = velocityFactor.get();

    const speed = Math.min(5, Math.abs(v));

    const dir = v >= 0 ? 1 : -1;

    const final = direction * dir;

    const px = (w * baseVelocity) / 90;

    let next = base.current + final * px * (1 + speed) * dt;


    if (next >= w) next %= w;
    else if (next <= 0) next = w + (next % w);

    base.current = next;

    x.set(base.current);
  });


  const transform = useTransform(
    x,
    (v) => `translate3d(${-v}px,0,0)`
  );


  return (
    <div
      ref={ref}
      className={cn(
        "w-full overflow-hidden whitespace-nowrap py-2",
        className
      )}
    >
      <motion.div
        className="inline-flex will-change-transform"
        style={{ transform }}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "inline-flex shrink-0",
              i === 0 && "scroll-block"
            )}
          >
            <div className="inline-flex shrink-0">
              {items}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


/* ================= CARD ================= */

function StageCard({ icon: Icon, title, desc, tag }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
      relative
      mx-4
      w-[240px]
      md:w-[320px]
      h-[260px]
      md:h-[300px]
      rounded-3xl
      bg-white/70
      backdrop-blur-xl
      border border-white/40
      p-6
      flex
      flex-col
      justify-between
      overflow-hidden
      "
    >

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 to-cyan-300/20 opacity-0 hover:opacity-100 transition" />


      {/* Tag */}
      <span className="text-xs font-semibold text-sky-700 bg-sky-100 px-3 py-1 rounded-full w-fit">
        {tag}
      </span>


      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-400 text-white shadow-lg">

        <Icon size={28} strokeWidth={2} />

      </div>


      {/* Content */}
      <div>
        <h3 className="text-lg md:text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      </div>


      {/* Bottom Bar */}
      <div className="h-1 w-14 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full" />

    </motion.div>
  );
}
