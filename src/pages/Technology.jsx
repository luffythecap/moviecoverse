"use client";

import React from "react";
import {
  Droplets,
  Filter,
  Recycle,
  Waves,
  ShieldCheck,
  Gauge,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Technology() {
  const steps = [
    {
      icon: <Droplets size={30} />,
      title: "Water Intake",
      desc: "Collection of raw water from rivers, reservoirs, and borewells.",
    },
    {
      icon: <Filter size={30} />,
      title: "Primary Filtration",
      desc: "Removal of suspended solids using sand and carbon filters.",
    },
    {
      icon: <Recycle size={30} />,
      title: "Sedimentation",
      desc: "Settling of heavy particles in sedimentation tanks.",
    },
    {
      icon: <Waves size={30} />,
      title: "Aeration",
      desc: "Improves taste and removes dissolved gases.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Disinfection",
      desc: "UV and chlorine treatment for pathogen removal.",
    },
    {
      icon: <Gauge size={30} />,
      title: "Quality Testing",
      desc: "Laboratory and online monitoring systems.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-t from-[#edf1ef] via-sky-100 to-sky-200 text-gray-800 overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-sky-400/30 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-300/30 blur-3xl rounded-full" />

      {/* ================= HERO ================= */}
      <section className="relative py-28 text-center px-6">

        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-sky-200 text-sky-700 rounded-full">
          Advanced Technology
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-sky-900 mb-6 leading-tight">
          Water Treatment <br /> Technology
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Delivering safe, clean, and sustainable water through intelligent
          systems and eco-friendly innovations.
        </p>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative py-24 max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-800 mb-14">
          Our Treatment Process
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {steps.map((item, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/40
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div
                className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-400
                           rounded-full flex items-center justify-center text-white mb-5
                           group-hover:scale-110 transition"
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-sky-900">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="py-24 bg-white/70 backdrop-blur-lg">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-6">
              Modern Infrastructure
            </h2>

            <p className="text-gray-700 mb-5 leading-relaxed">
              Our facilities use smart automation, energy-efficient
              equipment, and AI-based monitoring systems.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We strictly follow global water quality and safety standards.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "SCADA Based Control",
                "Automated Chemical Dosing",
                "24x7 Smart Monitoring",
                "Green Energy Systems",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">

                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={18} className="text-green-600" />
                  </div>

                  <span className="font-medium">{item}</span>

                </div>
              ))}

            </div>

          </div>

          {/* Right */}
          <div className="relative bg-gradient-to-br from-sky-500 to-cyan-400 rounded-2xl p-10 text-white shadow-xl">

            <h3 className="text-2xl font-bold mb-6">
              Why Our Technology?
            </h3>

            <ul className="space-y-4 text-lg">

              <li>✔ Ultra-high purification</li>
              <li>✔ Low maintenance cost</li>
              <li>✔ Smart automation</li>
              <li>✔ Zero wastage systems</li>
              <li>✔ 20+ years durability</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-28 text-center px-6">

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-sky-600 to-cyan-500 text-white rounded-3xl p-12 shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Technical Consultation?
          </h2>

          <p className="text-lg mb-8 opacity-90">
            Get expert guidance for designing efficient and reliable
            water treatment solutions.
          </p>

          <button
            className="inline-flex items-center gap-2 bg-white text-sky-700
                       px-8 py-3 rounded-full font-semibold
                       hover:bg-sky-100 transition shadow-lg"
          >
            Contact Our Experts
            <ArrowRight size={18} />
          </button>

        </div>

      </section>

    </div>
  );
}
