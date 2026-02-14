"use client";

import React from "react";
import { ArrowUpRight, Droplet, ShieldCheck, Zap } from "lucide-react";

/* Hover + Tap Animation */
const cardHover =
  "transition-all duration-300 active:scale-95 sm:hover:-translate-y-2 sm:hover:scale-[1.02] sm:hover:shadow-2xl";

/* Load Fonts */
const FontLoader = () => (
  <style>
    {`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Pacifico&family=Playfair+Display:wght@600&display=swap');

    .font-royal { font-family: "Cinzel", serif; }
    .font-script { font-family: "Pacifico", cursive; }
    .font-fancy { font-family: "Playfair Display", serif; }
  `}
  </style>
);

const HeroFeature = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#edf1ef] to-sky-200 py-10 px-3 sm:px-4">



      <FontLoader />

      {/* Main Wrapper */}
      <div className="max-w-7xl mx-auto rounded-[28px] sm:rounded-[40px] p-4 sm:p-8 bg-white/70 backdrop-blur-xl shadow-2xl border border-white/40 mb-10">
      <h2 className="text-3xl sm:text-4xl font-royal text-cyan-700 text-center">
  About Movi Ecoserve
</h2>

<p className="mt-2 mb-5 text-center text-gray-500">
  Purifying Lives • Protecting Future
</p>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

          {/* HERO CARD */}
          <div
            className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-white via-cyan-50 to-sky-100 ${cardHover}`}
          >
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
              alt="Water Plant"
              className="w-full h-[190px] sm:h-[260px] object-cover rounded-2xl"
            />

            {/* Badge */}
            <span className="absolute top-4 left-4 bg-cyan-600 text-white text-xs px-3 py-1 rounded-full">
              ISO Certified
            </span>

            <h2 className="text-xl sm:text-2xl text-cyan-900 mt-4 font-royal leading-snug">
              Smart{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">
                Water
              </span>{" "}
              Solutions
            </h2>

            <p className="text-gray-600 text-sm mt-2">
              Delivering{" "}
              <span className="font-script text-sky-600">
                pure water
              </span>{" "}
              with modern tech.
            </p>

            <button className="absolute bottom-4 right-4 bg-black/80 text-white p-2 rounded-full backdrop-blur hover:bg-black">
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* CENTER STACK */}
          <div className="flex flex-col gap-4 sm:gap-6">

            {/* FEATURE CARD */}
            <div
              className={`flex gap-3 items-center rounded-3xl p-4 bg-white shadow-md ${cardHover}`}
            >
              <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700">
                <Droplet size={22} />
              </div>

              <div>
                <h3 className="font-fancy text-base sm:text-lg">
                  Advanced Filtration
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Multi-stage purification.
                </p>
              </div>
            </div>

            {/* FEATURE CARD */}
            <div
              className={`flex gap-3 items-center rounded-3xl p-4 bg-white shadow-md ${cardHover}`}
            >
              <div className="p-3 rounded-xl bg-sky-100 text-sky-700">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h3 className="font-fancy text-base sm:text-lg">
                  Safe Standards
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  WHO & ISO compliant.
                </p>
              </div>
            </div>

            {/* CTA CARD */}
            <div
              className={`rounded-3xl p-5 bg-gradient-to-r from-cyan-500 to-sky-500 text-white ${cardHover}`}
            >
              <h3 className="font-royal text-lg">
                Serving{" "}
                <span className="font-script text-yellow-200">
                  Communities
                </span>
              </h3>

              <p className="text-xs mt-1 opacity-90">
                Industries, homes & cities.
              </p>

              <button className="mt-3 text-xs font-semibold flex items-center gap-1">
                Explore More <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className={`rounded-3xl p-6 bg-gradient-to-br from-sky-600 to-cyan-600 text-white flex flex-col justify-between ${cardHover}`}
          >
            <h2 className="text-2xl sm:text-3xl font-royal leading-tight">
              Clean <br />
              Safe <br />
              Water
            </h2>

            <p className="text-xs sm:text-sm opacity-90">
              Reliable purification systems.
            </p>

            <div className="text-right text-xs font-medium">
              Since 2015
            </div>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">

          <StatCard title="Plants" value="150+" />
          <StatCard title="Experts" value="40+" />
          <StatCard title="Projects" value="300+" />

        </div>

      </div>
    </section>
  );
};

/* Reusable Stat Card */
const StatCard = ({ title, value }) => (
  <div
    className={`rounded-2xl p-4 bg-white/80 backdrop-blur shadow-md text-center ${cardHover}`}
  >
    <p className="text-xs text-gray-500">{title}</p>

    <h3 className="text-xl font-fancy text-cyan-700 mt-1">
      {value}
    </h3>
  </div>
);

export default HeroFeature;
