import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import Marquee from "./Marquee";
import { IoMdArrowDown } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {
  useEffect(() => {
    gsap.fromTo(
      ".market",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".market",
          start: "top 90%",
          end: "top 50%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".marquee-div",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".solution-div",
          start: "top 40%",
          end: "bottom bottom",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".marquee-div",
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".solution-div",
          start: "bottom 20%",
          scrub: 2,
        },
      }
    );

  }, []);
const navigate= useNavigate();
  function handleClick(){
    navigate('/propertydesc');
  }

  return (
    <div id="solution" className="solution-div flex flex-col w-full min-h-screen overflow-hidden">
      <div className="flex">
        <div className="w-full">
          <p className="text-white m-8 w-[550px] text-[50px] font-montserrat">
            Tailored Solutions for Your Real Estate Needs
          </p>
          <div className="flex w-[200px] p-4 rounded-xl hover:text-black hover:bg-white transition-all duration-200 gap-3 text-white font-montserrat mx-8 items-center">
            <GoDotFill />
              <button onClick={handleClick}>Explore More</button>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="w-full flex flex-col gap-10 my-14">
          <div className="market bg-white w-[700px] h-[100px] rounded-[100px] flex items-center px-2">
            <div className="w-[95px] h-[95px] rounded-full overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Market Analysis"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-black font-montserrat text-[30px] text-center">
                Market Analysis
              </h1>
            </div>
            <div className="flex mx-6">
              <IoMdArrowDown className="text-[50px]" />
            </div>
          </div>
          <div className="market bg-white w-[700px] h-[100px] rounded-[100px] flex items-center px-2">
            <div className="w-[95px] h-[95px] rounded-full overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://images.pexels.com/photos/2403251/pexels-photo-2403251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Market Analysis"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-black font-montserrat text-[30px] text-center">
                Market Analysis<sup className="mx-2">04</sup>
              </h1>
            </div>
            <div className="flex mx-6">
              <IoMdArrowDown className="text-[50px]" />
            </div>
          </div>
          <div className="market bg-white w-[700px] h-[100px] rounded-[100px] flex items-center px-2">
            <div className="w-[95px] h-[95px] rounded-full overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://images.pexels.com/photos/3769312/pexels-photo-3769312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Market Analysis"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-black font-montserrat text-[30px] text-center">
                Market Analysis<sup className="mx-2">04</sup>
              </h1>
            </div>
            <div className="flex mx-6">
              <IoMdArrowDown className="text-[50px]" />
            </div>
          </div>
          <div className="market bg-white w-[700px] h-[100px] rounded-[100px] flex items-center px-2">
            <div className="w-[95px] h-[95px] rounded-full overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Market Analysis"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-black font-montserrat text-[30px] text-center">
                Market Analysis<sup className="mx-2">04</sup>
              </h1>
            </div>
            <div className="flex mx-6">
              <IoMdArrowDown className="text-[50px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-div mt-auto opacity-0">
        <Marquee />
      </div>
    </div>
  );
};

export default Solution;
