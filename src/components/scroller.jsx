"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const SmoothScrollWrapper = ({ children }) => {
  const scrollContainer = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (!scrollContainer.current || !contentRef.current) return;

    const container = scrollContainer.current;
    const content = contentRef.current;

    gsap.set(container, {
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      willChange: "transform",
    });

    const setBodyHeight = () => {
      document.body.style.height =
        content.getBoundingClientRect().height + "px";
    };

    // 🔥 Fix first-load height issue
    const resizeObserver = new ResizeObserver(() => {
      setBodyHeight();
    });

    resizeObserver.observe(content);

    window.addEventListener("load", setBodyHeight);
    window.addEventListener("resize", setBodyHeight);

    let scrollY = 0;
    let targetScrollY = 0;
    const ease = 0.08;

    const smoothScroll = () => {
      targetScrollY = window.scrollY;
      scrollY += (targetScrollY - scrollY) * ease;
      gsap.set(container, { y: -scrollY });
      requestAnimationFrame(smoothScroll);
    };

    requestAnimationFrame(smoothScroll);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("load", setBodyHeight);
      window.removeEventListener("resize", setBodyHeight);
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div ref={scrollContainer} className="bg-[#edf1ef] min-h-screen w-full">
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default SmoothScrollWrapper;
