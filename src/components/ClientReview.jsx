"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Droplets } from "lucide-react";

const reviews = [
  {
    company: "AquaPure Solutions",
    name: "Ramesh Patil",
    role: "Plant Manager | AquaPure",
    review:
      "Since partnering with this water treatment plant, our water quality has improved drastically. Their modern filtration system and professional team ensure safe and clean water every day.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    company: "ClearFlow Industries",
    name: "Neha Sharma",
    role: "Operations Head | ClearFlow",
    review:
      "Their wastewater management and purification process is outstanding. We now meet all environmental standards with confidence.",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    company: "PureDrop Systems",
    name: "Amit Verma",
    role: "Technical Director | PureDrop",
    review:
      "Reliable service, advanced technology, and excellent support. This plant is a backbone for our industrial water needs.",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

export default function ClientReview() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(index === 0 ? reviews.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === reviews.length - 1 ? 0 : index + 1);
  };

  const data = reviews[index];

  return (
    <section className="bg-sky-200 py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-slate-800 text-white text-sm">
          <Droplets size={16} />
          Client Success Stories
        </span>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 md:p-10 shadow-2xl">

          {/* Inner Layout */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Left Panel */}
            <div className="bg-slate-800 rounded-2xl p-6 flex flex-col justify-between">

              {/* Company */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                <p className="text-white font-medium">
                  {data.company}
                </p>
              </div>

              {/* User */}
              <div className="flex items-center gap-4">

                <img
                  src={data.avatar}
                  alt={data.name}
                  className="w-12 h-12 rounded-full border border-sky-400"
                />

                <div className="text-left">
                  <h4 className="text-white font-semibold">
                    {data.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {data.role}
                  </p>
                </div>

              </div>

            </div>

            {/* Right Panel */}
            <div className="md:col-span-2 bg-slate-300 rounded-3xl p-8 text-left">

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {data.review}
              </p>

              {/* Button */}
              <button className="px-5 py-2 rounded-full bg-sky-400 text-slate-900 text-sm font-semibold hover:bg-sky-300 transition">
                View Project
              </button>

            </div>

          </div>

        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">

          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-slate-800 text-white hover:bg-slate-700 flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-slate-800 text-white hover:bg-slate-700 flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}
