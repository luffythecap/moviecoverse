import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta-desktop', { opacity: 1, y: -20, delay: 2 });
    gsap.to('#cta-mobile', { opacity: 1, y: -10, delay: 2 });
  }, []);

  return (
    <section
      style={{ backgroundColor: '#edf1ef' }}
      className="w-full min-h-screen relative"
    >
      <div className="min-h-[90vh] w-full flex-center flex-col">
        {/* <p id="hero" className="hero-title text-5xl md:text-7xl">
          iPhone 15 Pro
        </p> */}

        {/* Video and CTA container */}
        <div className="md:w-11/12 w-full px-4 relative">
          <div className="relative md:flex md:items-center">
            <video
              className="pointer-events-none w-full"
              autoPlay
              muted
              playsInline
              key={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Desktop CTA buttons */}
            <div
              id="cta-desktop"
              className="hidden md:flex gap-4 absolute right-10 top-1/2 mt-9 items-center opacity-0 translate-y-10"
            >
              <a
                href="#explore"
                className="flex items-center gap-2 bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-800 transition"
              >
                Explore
                <ArrowRight size={18} />
              </a>
              <a
                href="#contactus"
                className="flex items-center gap-2 border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition"
              >
                Contact Me
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div
          id="cta-mobile"
          className="flex md:hidden flex-col items-center mt-6 opacity-0 translate-y-10"
        >
          <a href="#highlights" className="btn">Buy</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
