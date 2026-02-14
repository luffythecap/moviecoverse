import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const defaultBackgrounds = [
  "https://images.pexels.com/photos/6985136/pexels-photo-6985136.jpeg",
  "https://images.pexels.com/photos/6985128/pexels-photo-6985128.jpeg",
  "https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg",
  "https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-scenic-view-of-mountains.jpeg",
  "https://images.pexels.com/photos/12194487/pexels-photo-12194487.jpeg",
];

const ScrollStack = ({
  cards = [
    {
      title: "Natural Water Sources",
      subtitle: "Pure mountain springs and natural reservoirs providing clean water for communities worldwide.",
      badge: "Source Water",
      backgroundImage: "https://images.pexels.com/photos/33117437/pexels-photo-33117437.jpeg",
    },
    {
      title: "Advanced Filtration Systems",
      subtitle: "State-of-the-art membrane technology removing contaminants at molecular level for pristine water quality.",
      badge: "Filtration",
      backgroundImage: "https://images.pexels.com/photos/24802113/pexels-photo-24802113.jpeg",
    },
    {
      title: "Quality Control & Testing",
      subtitle: "Comprehensive monitoring ensures safety standards exceed regulatory requirements with real-time analysis.",
      badge: "Quality Control",
      backgroundImage: "https://images.pexels.com/photos/7722666/pexels-photo-7722666.jpeg",
    },
    {
      title: "UV Disinfection Technology",
      subtitle: "Chemical-free sterilization using ultraviolet light technology for completely pure and safe water.",
      badge: "Disinfection",
      backgroundImage: "https://images.pexels.com/photos/7298544/pexels-photo-7298544.jpeg",
    },
    {
      title: "Smart Distribution Networks",
      subtitle: "IoT-enabled systems monitor flow, pressure, and quality in real-time across entire distribution networks.",
      badge: "Distribution",
      backgroundImage: "https://images.pexels.com/photos/11452356/pexels-photo-11452356.jpeg",
    },
  ],
  backgroundColor = "bg-gradient-to-b from-[#edf1ef] to-sky-200",
  cardHeight = "60vh",
  animationDuration = "0.5s",
  sectionHeightMultiplier = 3,
  intersectionThreshold = 0.1,
  className = "",
}) => {
  const scrollableSectionRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const scrollIconRef = useRef(null);
  const scrollDotRef = useRef(null);
  const cardCount = Math.min(cards.length, 5);

  const cardStyle = {
    height: cardHeight,
    maxHeight: "500px",
    borderRadius: "42px",
    transition: `transform ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1), opacity ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1)`,
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: intersectionThreshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !cardsContainerRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const parentRect = scrollableSectionRef.current?.getBoundingClientRect();
          const viewportHeight = parentRect?.height ?? window.innerHeight;

          const sectionTop = sectionRect.top - (parentRect?.top ?? 0);
          const sectionHeight = sectionRef.current.offsetHeight;
          const scrollableDistance = sectionHeight - viewportHeight;

          let progress = 0;
          if (sectionTop <= 0 && Math.abs(sectionTop) <= scrollableDistance) {
            progress = Math.abs(sectionTop) / scrollableDistance;
          } else if (sectionTop <= 0) {
            progress = 1;
          }

          let newActiveIndex = 0;
          const progressPerCard = 1 / cardCount;
          for (let i = 0; i < cardCount; i++) {
            if (progress >= progressPerCard * (i + 1)) {
              newActiveIndex = i + 1;
            }
          }

          setActiveCardIndex(Math.min(newActiveIndex, cardCount - 1));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    const scrollElement = scrollableSectionRef.current;
    scrollElement?.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      scrollElement?.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [cardCount, sectionHeightMultiplier, intersectionThreshold]);

  useEffect(() => {
    if (scrollDotRef.current && scrollIconRef.current) {
      gsap.fromTo(
        scrollDotRef.current,
        { y: 0 },
        {
          y: 20,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 1.2,
        }
      );

      gsap.fromTo(
        scrollIconRef.current,
        { opacity: 0.6 },
        {
          opacity: 1,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "sine.inOut",
        }
      );
    }
  }, []);

  const getCardTransform = (index) => {
    const isVisible = isIntersecting && activeCardIndex >= index;
    const scale = 0.9 + index * 0.05;
    let translateY = "100px";

    if (isVisible) {
      translateY = `${90 - index * 30}px`;
    }

    return {
      transform: `translateY(${translateY}) scale(${scale})`,
      opacity: isVisible ? (index === 0 ? 0.9 : 1) : 0,
      zIndex: 10 + index * 10,
      pointerEvents: isVisible ? "auto" : "none",
    };
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-[#edf1ef]">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/30 via-sky-300/40 to-cyan-200/30 md:animate-pulse" />
        <div className="absolute inset-0 opacity-30 md:opacity-40">
          <div className="absolute top-1/4 left-0 w-full h-20 md:h-32 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent transform -skew-y-2" />
          <div className="absolute bottom-1/3 left-0 w-full h-16 md:h-24 bg-gradient-to-r from-transparent via-emerald-300/15 to-transparent transform skew-y-1" />
        </div>
        <div className="absolute inset-0 hidden md:block">
          {[...Array(12)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-ping"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute top-10 right-10 w-48 md:w-80 h-48 md:h-80 bg-gradient-to-br from-sky-300/15 to-cyan-400/10 rounded-full blur-2xl md:blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 md:w-96 h-56 md:h-96 bg-gradient-to-tr from-emerald-300/12 to-sky-400/15 rounded-full blur-2xl md:blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-sky-100/35" />
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-100/15 via-transparent to-cyan-100/20" />
      </div>

      {/* Header Section */}
      <div className="relative z-20 text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-sky-100/80 backdrop-blur-sm border border-sky-200/50 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            💧 Water Treatment Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            Advanced Water Purification Technology
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            Discover our comprehensive range of cutting-edge water treatment technologies designed to deliver
            pure, safe, and sustainable water solutions for communities and industries worldwide.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIconRef} className="relative z-30 flex flex-col items-center justify-center -mt-9 mb-6 md:mb-12">
        <div className="w-6 h-10 border-2 border-sky-800 rounded-full flex items-start justify-center p-1 mb-2">
          <div ref={scrollDotRef} className="w-1 h-2 bg-sky-800 rounded-full" />
        </div>
        <p className="text-sky-800 text-sm md:text-base animate-pulse">Scroll to card</p>
      </div>

      {/* Card Scroll Section */}
      <section
  ref={scrollableSectionRef}
  className="relative max-h-screen w-full overflow-y-scroll z-10 -mt-28 no-scrollbar"
  style={{ WebkitOverflowScrolling: "touch" }}
>

        <div
          ref={sectionRef}
          className={`relative ${className}`}
          style={{ height: `${sectionHeightMultiplier * 85}vh` }}
        >
          <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col justify-center">
              <div
                ref={cardsContainerRef}
                className="relative w-full max-w-5xl mx-auto flex-shrink-0"
                style={{ height: cardHeight }}
              >
                {cards.slice(0, 5).map((card, index) => {
                  const cardTransform = getCardTransform(index);
                  const backgroundImage =
                    card.backgroundImage || defaultBackgrounds[index % defaultBackgrounds.length];

                  return (
                    <div
                      key={index}
                      className="absolute z-50 overflow-hidden shadow-lg md:shadow-2xl transition-all duration-300 md:backdrop-blur-sm border border-white/10 md:border-white/20"
                      style={{
                        ...cardStyle,
                        top: 0,
                        left: "50%",
                        transform: `translateX(-50%) ${cardTransform.transform}`,
                        width: "100%",
                        maxWidth: "100%",
                        opacity: cardTransform.opacity,
                        zIndex: cardTransform.zIndex,
                        pointerEvents: cardTransform.pointerEvents,
                      }}
                    >
                      <div
                        className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/80"
                        style={{
                          backgroundImage: `url('${backgroundImage}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundBlendMode: "overlay",
                        }}
                      />

                      {card.badge && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-emerald-500/80 backdrop-blur-sm text-white shadow-lg">
                            <span className="text-sm font-medium">{card.badge}</span>
                          </div>
                        </div>
                      )}

                      <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                        {card.content ? (
                          card.content
                        ) : (
                          <div className="max-w-lg">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                              {card.title}
                            </h3>
                            {card.subtitle && (
                              <p className="text-lg text-white/90 drop-shadow-md leading-relaxed">{card.subtitle}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollStack;
