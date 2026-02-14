import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { animateWithGsap } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // Chip animation
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    });

    // Text animation
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <section className="common-padding">
  <div className="screen-max-width">
    {/* Plant Image */}
    <div id="chip" className="flex-center w-full my-20">
      <img src={chipImg} alt="Water Treatment Plant" width={240} height={240} />
    </div>

    {/* Heading */}
    <div className="flex flex-col items-center">
      <h2 className="hiw-title g_fadeIn text-sky-700 ">
        Advanced Water Treatment System.
        <br /> Pure Water. Better Life.
      </h2>

      <p className="hiw-subtitle g_fadeIn">
        Delivering clean, safe, and sustainable water for every community.
      </p>
    </div>

    {/* Video Section */}
    <div className="mt-10 md:mt-20 mb-14">
      <div className="relative h-full flex-center">
        <div className="overflow-hidden">
          <img
            src={frameImg}
            alt="Treatment Frame"
            className="bg-transparent relative z-10"
          />
        </div>

        <div className="hiw-video">
          <video
            className="pointer-events-none"
            playsInline
            preload="none"
            muted
            autoPlay
            ref={videoRef}
          >
            <source src={frameVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <p className="text-gray font-semibold text-center mt-3 g_fadeIn">
        Multi-Stage Purification Process
      </p>
    </div>

    {/* Description Section */}
    <div className="hiw-text-container">
      {/* Left Side */}
      <div className="flex flex-1 justify-center flex-col">
        <p className="hiw-text g_fadeIn">
          Our water treatment facility uses
          <span className="text-sky-700"> advanced filtration and purification </span>
          systems to remove harmful impurities.
        </p>

        <p className="hiw-text g_fadeIn">
          Every drop is processed to ensure
          <span className="text-sky-700"> safety, purity, and reliability</span>
          for daily consumption.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center flex-col g_fadeIn">
        <p className="hiw-text">High Performance</p>
        <p className="hiw-bigtext text-sky-700">Smart Treatment</p>
        <p className="hiw-text">5-Stage Filtration</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default HowItWorks;
