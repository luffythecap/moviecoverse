import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cards } from '../constants';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SolutionsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  const [expandedMobileCards, setExpandedMobileCards] = useState({});

  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const mobileCardsRef = useRef([]);
  const desktopCardsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setExpandedIndex(null);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading on scroll
      gsap.fromTo(
        headingRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate mobile cards
      if (isMobile) {
        mobileCardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.fromTo(
              card,
              {
                y: 80,
                opacity: 0,
                scale: 0.9,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                delay: index * 0.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  end: "bottom 15%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });
      } else {
        // Animate desktop cards
        desktopCardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.fromTo(
              card,
              {
                y: 100,
                opacity: 0,
                scale: 0.95,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: index * 0.15,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  end: "bottom 15%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Animation for card expansion
  useEffect(() => {
    if (!isMobile && expandedIndex !== null) {
      const expandedCard = desktopCardsRef.current[expandedIndex];
      if (expandedCard) {
        gsap.fromTo(
          expandedCard,
          {
            scale: 0.98,
          },
          {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }
    }
  }, [expandedIndex, isMobile]);

  const handleClick = (index) => {
    if (!isMobile) {
      setExpandedIndex(index === expandedIndex ? null : index);
    }
  };

  const handleMobileToggle = (index) => {
    setExpandedMobileCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderCard = (card, index, isExpanded) => {
    const Icon = card.icon;
    return (
      <div
        key={index}
        ref={(el) => (desktopCardsRef.current[index] = el)}
        onClick={() => handleClick(index)}
        className={`cursor-pointer group transition-all duration-500 overflow-hidden rounded-[60px] shadow-xl 
          ${card.color} ${card.textColor}
          ${isExpanded ? 'md:flex-row w-full h-[460px] flex' : 'flex flex-col h-[400px] flex-1'}
        `}
      >
        {/* Text Section */}
        <div
          className={`p-8 flex flex-col justify-center ${
            isExpanded ? 'w-1/2 text-left' : 'w-full text-center'
          }`}
        >
          <div
            className={`flex items-center ${
              isExpanded ? 'justify-start' : 'justify-center'
            } gap-3 mb-4`}
          >
            {Icon && <Icon className="w-6 h-6 md:w-7 md:h-7" />}
            <h2 className="text-3xl md:text-4xl font-bold">{card.title}</h2>
          </div>
          <p className="text-lg leading-relaxed">
            {isMobile || isExpanded ? card.full : card.short}
          </p>
        </div>

        {/* Image Section */}
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            isExpanded ? 'w-1/2' : 'w-full'
          }`}
        >
          <img
            src={card.image}
            alt={card.title}
            className="object-contain w-80 -mt-10 h-auto mx-auto transition duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    );
  };

  const firstRow = cards.slice(0, 2);
  const secondRow = cards.slice(2, 4);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 bg-gradient-to-b from-sky-200 to-[#edf1ef] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div ref={headingRef} className="mb-10 w-full ml-0 md:ml-14">
          <h1 id="features_title" className="section-heading">Our Solution.</h1>
          <p className="mt-2 text-lg text-gray-700 max-w-3xl">
            Discover how Movi Ecoserve delivers smart, sustainable solutions for modern water
            management.
          </p>
        </div>

        {/* Mobile View: with Read More toggle */}
        <div className="md:hidden space-y-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isExpanded = expandedMobileCards[index];
            return (
              <div
                key={index}
                ref={(el) => (mobileCardsRef.current[index] = el)}
                className={`flex flex-col h-auto flex-1 cursor-pointer group transition-all duration-500 overflow-hidden rounded-[80px] shadow-xl ${card.color} ${card.textColor}`}
              >
                {/* Text Section */}
                <div className="p-8 w-full text-center">
                  <div className="flex justify-center items-center gap-3 mb-4">
                    {Icon && <Icon className="w-6 h-6" />}
                    <h2 className="text-3xl font-bold">{card.title}</h2>
                  </div>
                  <p className="text-lg leading-relaxed">
                    {isExpanded ? card.full : card.short}
                  </p>
                  <button
                    onClick={() => handleMobileToggle(index)}
                    className="mt-2 text-blue-700 underline font-medium"
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </button>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center w-full ">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-contain w-72 h-auto mx-auto transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: expandable cards */}
        <div className="hidden md:block space-y-8 px-8">
          <div className="flex gap-6">
            {firstRow.map((card, i) => renderCard(card, i, expandedIndex === i))}
          </div>
          <div className="flex gap-6">
            {secondRow.map((card, i) => renderCard(card, i + 2, expandedIndex === i + 2))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;