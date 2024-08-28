import React, { useEffect, useRef } from "react";
import { GoDotFill } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import DubaiCards from "./DubaiCards";
import { IoShieldOutline } from "react-icons/io5";
import { PiMoneyWavyBold } from "react-icons/pi";
import { MdGraphicEq } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Dubai = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ".top-lt",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".top-lt",
          start: "top 100%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".top-rt",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".top-rt",
          start: "top 100%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".why-dubai",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".why-dubai",
          start: "top 100%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".dubai-cards",
          start: "top 100%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  const arr = [
    {
      id: 1,
      title: "Safety",
      content:
        "Dubai is renowned for its advanced and robust security infrastructure, ensuring the safety and protection of its residents and visitors.",
      icon: <IoShieldOutline />,
    },
    {
      id: 2,
      title: "Stable Currency",
      content:
        "Dubai's currency is the UAE Dirham (AED), which remains stable and widely trusted.",
      icon: <PiMoneyWavyBold />,
    },
    {
      id: 3,
      title: "Low Mortgage Rates",
      content:
        "Dubai offers competitive mortgage rates, making it attractive for property buyers.",
      icon: <MdGraphicEq />,
    },
    {
      id: 4,
      title: "Diversity",
      content:
        "Dubai is a melting pot of diversity, with over 200 nationalities living and working in the city.",
      icon: <IoPeopleSharp />,
    },
    {
      id: 5,
      title: "Remote Property",
      content:
        "Remote properties in Dubai typically refer to real estate located in less densely populated areas, often offering more privacy and tranquility compared to the city's bustling districts.",
      icon: <LuHome />,
    },
  ];

  return (
    <div id="dubai" className="w-full h-screen overflow-hidden flex flex-col justify-between p-8">
      <div className="top-div w-full font-bold text-[20px] flex items-center justify-between font-montserrat gap-2 h-[100px]">
        <div className="top-lt flex items-center justify-evenly">
          <GoDotFill />
          <p>Explore Our Advantages</p>
        </div>
        <div className="top-rt flex bg-gray-700 p-4 m-6 rounded-[100px] gap-2">
          <div className="flex items-center bg-white p-2 rounded-[60px]">
            <IoCall className="text-[30px]" />
          </div>
          <div className="flex items-center">
            <h6 className="contact-text text-white font-montserrat opacity-0 scale-0">
              Contact Us Now
            </h6>
          </div>
        </div>
      </div>
      <div className="why-dubai flex justify-between items-center">
        <div className="w-[700px]">
          <p className="font-montserrat text-[80px]">
            Why Dubai Stands Unrivalled?
          </p>
        </div>
      </div>
      <div className="flex mt-24 gap-10">
        {arr.map((item, index) => (
          <DubaiCards
            key={item.id}
            title={item.title}
            content={item.content}
            icon={item.icon}
            ref={(el) => (cardsRef.current[index] = el)}
            className="dubai-cards"
          />
        ))}
      </div>
    </div>
  );
};

export default Dubai;
