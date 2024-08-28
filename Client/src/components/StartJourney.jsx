import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StartJourney = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".video-div video",
      { scale: 0 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: ".video-div",
          start: "top 100%",
          end: "top 10%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
    
    gsap.fromTo(
      ".action-button",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".start",
          start: "top 100%",
          end: "top 10%",
          scrub: 2,
          toggleActions: "play none none reverse",
        },
      }
    );


  }, []);

  return (
    <div className="w-full h-screen overflow-hidden start relative">
      <div className="video-div relative">
        <div className="absolute m-5 z-10">
          <h1 className="heading-h1 text-white font-montserrat text-[90px] z-10">
            Build Your Future<br/> With Us
          </h1>
          <button className="action-button text-white px-10 opacity-0 py-5 bg-gray-700 font-montserrat mt-12 rounded-xl">
            Get Started
          </button>
        </div>
        <video
          src="https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default StartJourney;
