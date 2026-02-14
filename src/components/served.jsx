import React, { useState, useEffect, useRef } from 'react';
import { Factory, Building2, Zap, Droplets, TreePine, Car, Pill, Wheat, ShoppingCart, Home, Wrench, Recycle } from 'lucide-react';

const IndustriesServed = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [counts, setCounts] = useState({ projects: 0, industries: 0, satisfaction: 0, support: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const statsRef = useRef(null);
  const animationRef = useRef(null);

  const industries = [
    { 
      name: 'Manufacturing', 
      icon: Factory, 
      color: 'from-blue-500 to-blue-600', 
      shadowColor: 'shadow-blue-200',
      description: 'Advanced water treatment systems for industrial manufacturing processes',
      features: ['Process Water Treatment', 'Wastewater Management', 'Boiler Feed Water', 'Cooling Tower Treatment'],
      projects: '150+',
      satisfaction: '98%'
    },
    { 
      name: 'Commercial Buildings', 
      icon: Building2, 
      color: 'from-emerald-500 to-emerald-600', 
      shadowColor: 'shadow-emerald-200',
      description: 'Sustainable water solutions for commercial and office buildings',
      features: ['HVAC Water Treatment', 'Potable Water Systems', 'Greywater Recycling', 'Legionella Prevention'],
      projects: '200+',
      satisfaction: '96%'
    },
    { 
      name: 'Power Generation', 
      icon: Zap, 
      color: 'from-yellow-500 to-orange-500', 
      shadowColor: 'shadow-yellow-200',
      description: 'Critical water treatment for power plants and energy facilities',
      features: ['Steam Generation', 'Condensate Treatment', 'Cooling Water', 'Demineralization'],
      projects: '45+',
      satisfaction: '100%'
    },
    { 
      name: 'Municipal Water', 
      icon: Droplets, 
      color: 'from-cyan-500 to-blue-500', 
      shadowColor: 'shadow-cyan-200',
      description: 'Comprehensive water treatment for municipal water systems',
      features: ['Drinking Water Treatment', 'Wastewater Processing', 'Water Distribution', 'Quality Monitoring'],
      projects: '75+',
      satisfaction: '99%'
    },
    { 
      name: 'Pulp & Paper', 
      icon: TreePine, 
      color: 'from-green-500 to-green-600', 
      shadowColor: 'shadow-green-200',
      description: 'Specialized water treatment for pulp and paper manufacturing',
      features: ['Process Water Recycling', 'Effluent Treatment', 'Fiber Recovery', 'Chemical Recovery'],
      projects: '35+',
      satisfaction: '97%'
    },
    { 
      name: 'Automotive', 
      icon: Car, 
      color: 'from-red-500 to-red-600', 
      shadowColor: 'shadow-red-200',
      description: 'Water treatment solutions for automotive manufacturing',
      features: ['Paint Booth Water', 'Parts Washing', 'Cooling Systems', 'Wastewater Treatment'],
      projects: '80+',
      satisfaction: '95%'
    },
    { 
      name: 'Pharmaceutical', 
      icon: Pill, 
      color: 'from-purple-500 to-purple-600', 
      shadowColor: 'shadow-purple-200',
      description: 'High-purity water systems for pharmaceutical production',
      features: ['Purified Water', 'Water for Injection', 'Clean Steam', 'Validation Services'],
      projects: '60+',
      satisfaction: '100%'
    },
    { 
      name: 'Food & Beverage', 
      icon: Wheat, 
      color: 'from-orange-500 to-orange-600', 
      shadowColor: 'shadow-orange-200',
      description: 'Food-grade water treatment for beverage and food processing',
      features: ['Product Water', 'CIP Systems', 'Ingredient Water', 'Wastewater Treatment'],
      projects: '120+',
      satisfaction: '98%'
    },
    { 
      name: 'Retail & Hospitality', 
      icon: ShoppingCart, 
      color: 'from-pink-500 to-pink-600', 
      shadowColor: 'shadow-pink-200',
      description: 'Water treatment for retail chains and hospitality venues',
      features: ['Kitchen Water Systems', 'Laundry Water', 'Pool & Spa Treatment', 'Ice Machine Water'],
      projects: '90+',
      satisfaction: '94%'
    },
    { 
      name: 'Residential', 
      icon: Home, 
      color: 'from-indigo-500 to-indigo-600', 
      shadowColor: 'shadow-indigo-200',
      description: 'Home water treatment systems for residential properties',
      features: ['Whole House Filtration', 'Softener Systems', 'Reverse Osmosis', 'UV Sterilization'],
      projects: '50+',
      satisfaction: '96%'
    },
    { 
      name: 'Oil & Gas', 
      icon: Wrench, 
      color: 'from-gray-500 to-gray-600', 
      shadowColor: 'shadow-gray-200',
      description: 'Water treatment for oil and gas extraction and refining',
      features: ['Produced Water Treatment', 'Injection Water', 'Process Water', 'Desalination'],
      projects: '40+',
      satisfaction: '99%'
    },
    { 
      name: 'Waste Management', 
      icon: Recycle, 
      color: 'from-teal-500 to-teal-600', 
      shadowColor: 'shadow-teal-200',
      description: 'Water treatment solutions for waste management facilities',
      features: ['Leachate Treatment', 'Landfill Water', 'Recycling Water', 'Odor Control'],
      projects: '25+',
      satisfaction: '97%'
    }
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized counting animation with reduced frequency
  const animateCount = (target, key, duration = 2000) => {
    const start = 0;
    const startTime = performance.now();
    let lastUpdate = 0;
    
    const updateCount = (currentTime) => {
      // Throttle updates to 30fps instead of 60fps
      if (currentTime - lastUpdate < 33) {
        requestAnimationFrame(updateCount);
        return;
      }
      lastUpdate = currentTime;
      
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (target - start) * easeOutQuart);
      
      setCounts(prev => ({ ...prev, [key]: current }));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => animateCount(500, 'projects'), 200);
          setTimeout(() => animateCount(12, 'industries'), 400);
          setTimeout(() => animateCount(99, 'satisfaction'), 600);
          setTimeout(() => animateCount(24, 'support'), 800);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Optimized rotation animation with performance checks
  useEffect(() => {
    // Only run animation if component is visible and not on mobile
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateIcons = () => {
      // Reduce animation frequency on mobile
      const rotationSpeed = isMobile ? 0.1 : 0.2;
      const updateInterval = isMobile ? 100 : 16; // 10fps on mobile, 60fps on desktop
      
      let lastUpdate = 0;
      
      const animate = (currentTime) => {
        if (currentTime - lastUpdate < updateInterval) {
          animationRef.current = requestAnimationFrame(animate);
          return;
        }
        lastUpdate = currentTime;

        iconsRef.current.forEach((icon, index) => {
          if (icon) {
            const startAngle = (index * 360) / industries.length;
            const radius = isMobile ? 140 : 180; // Smaller radius on mobile
            let currentAngle = startAngle + (currentTime * rotationSpeed * 0.01);
            
            const x = Math.cos((currentAngle * Math.PI) / 180) * radius;
            const y = Math.sin((currentAngle * Math.PI) / 180) * radius;
            
            // Use will-change CSS property for better performance
            icon.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px)`;
            icon.style.willChange = 'transform';
          }
        });
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animateIcons();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Clean up will-change property
      iconsRef.current.forEach(icon => {
        if (icon) {
          icon.style.willChange = 'auto';
        }
      });
    };
  }, [isVisible, isMobile]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#edf1ef] to-sky-200 overflow-hidden">
      {/* Simplified background elements for better performance */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Reduced number of floating elements on mobile */}
        <div className={`absolute top-20 left-10 w-32 h-32 border-2 border-blue-200 rounded-full opacity-20 ${isMobile ? 'hidden' : 'animate-pulse'}`}></div>
        <div className={`absolute top-40 right-20 w-24 h-24 border-2 border-green-200 rotate-45 opacity-20 ${isMobile ? 'hidden' : 'animate-pulse delay-500'}`}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 border-2 border-orange-200 rotate-12 opacity-20 animate-pulse delay-700"></div>
        
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-green-50 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-purple-50 to-transparent opacity-20 blur-3xl"></div>
      </div>

      {/* Optimized CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slide-left {
          animation: slideInFromLeft 0.8s ease-out;
        }
        
        .animate-slide-right {
          animation: slideInFromRight 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Performance optimizations */
        .rotating-icon {
          backface-visibility: hidden;
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        /* Reduce animations on mobile */
        @media (max-width: 768px) {
          .animate-pulse {
            animation-duration: 3s;
          }
          .animate-float {
            animation-duration: 4s;
          }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-700 to-green-500 rounded-2xl mb-6 shadow-lg animate-float">
            <Droplets className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-700 via-blue-700 to-green-700 bg-clip-text text-transparent mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Delivering innovative water treatment solutions across diverse industries with precision and sustainability
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Rotating Industry Icons */}
          <div className="lg:w-1/2 relative" ref={containerRef}>
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-xl border-2 border-gray-100">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-gray-700">12+</div>
                  <div className="text-xs text-gray-500">Industries</div>
                </div>
              </div>
            </div>

            {/* Auto-Rotating Industry Cards */}
            <div className={`relative w-full ${isMobile ? 'h-80' : 'h-96 md:h-[500px]'}`}>
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                const angle = (index * 360) / industries.length;
                const radius = isMobile ? 140 : 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={index}
                    ref={(el) => (iconsRef.current[index] = el)}
                    className="absolute transition-all duration-300 hover:scale-125 cursor-pointer rotating-icon"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translateX(${x}px) translateY(${y}px)`,
                      zIndex: hoveredIndex === index ? 20 : 10,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedIndustry(industry)}
                  >
                    <div className="relative group">
                      <div className={`relative ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 ${selectedIndustry?.name === industry.name ? 'ring-4 ring-blue-300' : ''}`}>
                        <div className="w-full h-full rounded-full flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300">
                          <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center shadow-sm`}>
                            <IconComponent className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-white group-hover:scale-110 transition-transform duration-300`} />
                          </div>
                        </div>
                      </div>
                      
                      {/* Industry Label - hidden on mobile for performance */}
                      {!isMobile && (
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : ''}`}>
                          <div className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 whitespace-nowrap shadow-lg border border-gray-200">
                            {industry.name}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Industry Details Card */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              {selectedIndustry ? (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 animate-slide-right">
                  <div className="flex items-center mb-6">
                    <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-xl bg-gradient-to-r ${selectedIndustry.color} flex items-center justify-center shadow-lg mr-4`}>
                      <selectedIndustry.icon className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-white`} />
                    </div>
                    <div>
                      <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-gray-800`}>{selectedIndustry.name}</h3>
                      <p className="text-gray-600 text-sm md:text-base">Water Treatment Solutions</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                    {selectedIndustry.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-gray-800 mb-3`}>Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedIndustry.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-gray-800`}>{selectedIndustry.projects}</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-gray-800`}>{selectedIndustry.satisfaction}</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 text-center">
                  <div className={`${isMobile ? 'w-16 h-16' : 'w-24 h-24'} mx-auto mb-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center`}>
                    <Droplets className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} text-gray-400`} />
                  </div>
                  <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-800 mb-4`}>Select an Industry</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Click on any industry icon to learn more about our specialized water treatment solutions and see detailed information about our services.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                {counts.projects}+
              </div>
              <div className="text-gray-600 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                {counts.industries}
              </div>
              <div className="text-gray-600 text-sm md:text-base">Industries Served</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                {counts.satisfaction}%
              </div>
              <div className="text-gray-600 text-sm md:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                {counts.support}/7
              </div>
              <div className="text-gray-600 text-sm md:text-base">Support Available</div>
            </div>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-center animate-fade-in text-sm md:text-base">
            Trusted by leading companies worldwide for reliable, efficient, and sustainable water treatment solutions tailored to each industry's specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;