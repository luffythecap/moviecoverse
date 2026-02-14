import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-20% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);

  return (
    <section className="h-full common-padding bg-gradient-to-b from-sky-200 to-[#edf1ef] relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Explore the full story.</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-4 -mb-20 md:mt-32 md:mb-24 pl-16  ">
            <h2 className="text-5xl lg:text-6xl font-semibold">Pure Water.</h2>
            <h2 className="text-5xl lg:text-6xl font-semibold">Powered by Advanced Treatment.</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] md:h-[70vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-contain md:object-cover object-center rounded-3xl mt-32 md:mt-0 md:mb-14 " preload="none" muted autoPlay ref={videoRef}>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative ">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh] rounded-none md:rounded-3xl ">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh] rounded-none md:rounded-3xl">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
<div className="feature-text-container">
  <div className="flex-1 flex-center">
    <p className="feature-text g_text">
      Our water treatment system is{' '}
      <span className="text-sky-700">
        designed with advanced purification technology
      </span>
      , ensuring safe, clean, and reliable water for communities and industries.
    </p>
  </div>

  <div className="flex-1 flex-center">
    <p className="feature-text g_text">
      Using multi-stage filtration and eco-friendly processes, we deliver{' '}
      <span className="text-sky-700">
        high-quality water with maximum efficiency.
      </span>
      You can trust our system for consistent performance every day.
    </p>
  </div>
</div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features