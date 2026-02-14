"use client";

import React, { useEffect, useState } from "react";
import {
  Droplets,
  BarChart3,
  Recycle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

/* Counter Hook */
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default function WaterDashboard() {
  const capacity = useCounter(95);
  const coverage = useCounter(82);
  const recycle = useCounter(74);
  const quality = useCounter(99);

  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: "#edf1ef" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-3">
            Growth & Performance Dashboard
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Monitoring water treatment efficiency, sustainability,
            and service expansion.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          <StatCard
            icon={<Droplets size={26} />}
            title="Treatment Capacity"
            value={capacity}
            suffix="%"
          />

          <StatCard
            icon={<BarChart3 size={26} />}
            title="Area Coverage"
            value={coverage}
            suffix="%"
          />

          <StatCard
            icon={<Recycle size={26} />}
            title="Water Recycled"
            value={recycle}
            suffix="%"
          />

          <StatCard
            icon={<ShieldCheck size={26} />}
            title="Water Quality"
            value={quality}
            suffix="%"
          />

        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Progress */}
          <div className="space-y-7">

            <ProgressBar
              title="Purification Efficiency"
              value={92}
            />

            <ProgressBar
              title="Energy Optimization"
              value={78}
            />

            <ProgressBar
              title="Waste Reduction"
              value={85}
            />

            <ProgressBar
              title="Customer Satisfaction"
              value={96}
            />

          </div>

          {/* Info Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border">

            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="text-cyan-600" />
              <h3 className="text-2xl font-semibold text-slate-800">
                Growth Highlights
              </h3>
            </div>

            <ul className="space-y-4 text-slate-600">

              <li>✔ 25% increase in processing capacity</li>

              <li>✔ Coverage expanded to 50+ villages</li>

              <li>✔ 18% reduction in water loss</li>

              <li>✔ ISO-certified systems</li>

              <li>✔ Smart monitoring enabled</li>

            </ul>

            <button className="mt-8 bg-cyan-600 hover:bg-cyan-700 transition text-white px-6 py-3 rounded-full font-medium">
              View Full Report
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

/* Stat Card */
function StatCard({ icon, title, value, suffix }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border hover:shadow-lg transition">

      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 mb-4">
        {icon}
      </div>

      <h4 className="text-slate-500 text-sm mb-1">
        {title}
      </h4>

      <p className="text-3xl font-bold text-slate-800">
        {value}
        {suffix}
      </p>

    </div>
  );
}

/* Progress Bar */
function ProgressBar({ title, value }) {
  return (
    <div>

      <div className="flex justify-between mb-2 text-sm text-slate-700">
        <span>{title}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-cyan-600 rounded-full transition-all duration-700"
          style={{ width: `${value}%` }}
        ></div>

      </div>

    </div>
  );
}
