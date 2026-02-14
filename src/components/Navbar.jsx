// components/Navbar.jsx

import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navLists } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const mobileNavRef = useRef([]);
  const desktopNavRef = useRef([]);

  // GSAP Animation
  useGSAP(() => {
    gsap.from(mobileNavRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.from(desktopNavRef.current, {
      opacity: 0,
      x: -30,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  // Navigation Handler
  const handleClick = (item) => {
    navigate(item.id);
  };

  return (
    <>
      {/* ================= Mobile Bottom Nav ================= */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-sky-600 rounded-full shadow-2xl px-4 py-3 flex gap-4 items-center justify-center border border-gray-200 z-50 max-w-md w-[90%]">
        {navLists.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              ref={(el) => (mobileNavRef.current[index] = el)}
            >
              <button
                onClick={() => handleClick(item)}
                className={`flex flex-col items-center justify-center transition-all duration-300 rounded-full w-12 h-12
                  ${
                    location.pathname === item.id
                      ? "bg-white text-black scale-110"
                      : "text-black hover:bg-gray-100"
                  }
                `}
              >
                <Icon size={20} />
              </button>
            </div>
          );
        })}
      </div>

      {/* ================= Desktop Side Nav ================= */}
      <div className="hidden md:flex fixed left-2 top-1/2 -translate-y-1/2 bg-sky-600 rounded-full shadow-2xl p-2 flex-col items-center gap-2 border z-50">
        {navLists.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              ref={(el) => (desktopNavRef.current[index] = el)}
            >
              <button
                onClick={() => handleClick(item)}
                className={`flex flex-col items-center justify-center transition-all duration-300 rounded-full w-9 h-9
                  ${
                    location.pathname === item.id
                      ? "bg-white text-black scale-105"
                      : "text-black hover:bg-sky-300"
                  }
                `}
              >
                <Icon size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
