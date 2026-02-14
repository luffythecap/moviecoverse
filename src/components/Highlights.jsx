import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
    gsap.to('.description', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-gradient-to-b from-[#edf1ef] to-sky-200"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading ml-0 md:ml-6">who we are </h1>

          {/* <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div> */}
        </div>

        {/* Paragraph section */}
        <p className="description max-w-3xl mb-12 ml-0 md:ml-6 text-base md:text-lg text-gray-700 opacity-0 translate-y-4">
          Dive into the key moments, announcements, and behind-the-scenes footage that define our journey. Here’s everything you need to know, all in one place.
        </p>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
