import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { CiHome, CiSearch } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

const Scroller = () => {
  useGSAP(() => {
    gsap.from(".video1", {
      scale: 0,
      opacity: 0,
      duration: 2,
      backgroundColor: "black",
      scrollTrigger: {
        scroller: "body",
        start: "top -50%",
        end: "top -100%",
        pin: true,
        scrub: 2
      }
    });
    gsap.from(".menu-buttons", {
      scale: 0,
      duration: 2,
      scrollTrigger: {
        scroller: "body",
        trigger: ".menu-buttons",
        start: "top 50%",
        pin: true,
        scrub: 2
      }
    });
  });

  return (
    <div id='scroll1' className='w-full h-screen flex flex-col items-top relative overflow-x-hidden'>
      <div className='menu-buttons w-full absolute z-10 flex items-center justify-center gap-5'>
        <a href="#home"><CiHome className='text-[70px] bg-gray-800 text-white p-2 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-600 hover:shadow-lg' /></a>
        <CiSearch className='text-[70px] bg-gray-800 text-white p-2 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-600 hover:shadow-lg' />
      </div>
      <h1 className=' w-screen object-cover text-white text-[200px] absolute z-20 font-tajawal text-center' >The Dubai</h1>
      <video 
        className='video1 w-[100%] rounded-[30px] h-[100%] top-0' 
        src="https://cdn.pixabay.com/video/2022/03/18/111204-689949818_large.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline
      />
    </div>
  );
};

export default Scroller;
