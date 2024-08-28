import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdDownload } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const Path = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const triangleTextRef = useRef(null);
  const finalTextRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 5%",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });

      gsap.set(circle1Ref.current, { x: "-95%", y: "0%", opacity: 0 });
      gsap.set(circle2Ref.current, { x: "95%", y: "0%", opacity: 0 });
      gsap.set(circle3Ref.current, { x: "0%", y: "0%", opacity: 0 });
      gsap.set([text1Ref.current, text2Ref.current, text3Ref.current], {
        opacity: 0,
      });
      gsap.set(titleRef.current, { opacity: 0, y: -50 });
      timeline.to(titleRef.current, { opacity: 1, y: 0, duration: 1 });

      timeline
        .to(circle1Ref.current, { x: "-95%", opacity: 1, duration: 1 }, "-=0.5")
        .to(circle2Ref.current, { x: "95%", opacity: 1, duration: 1 }, "-=0.5")
        .to(circle3Ref.current, { x: "0%", opacity: 1, duration: 1 }, "-=0.5")
        .to(
          [text1Ref.current, text2Ref.current, text3Ref.current],
          { opacity: 2, duration: 0.5 },
          "-=0.5"
        )
        .to([circle1Ref.current, circle2Ref.current, circle3Ref.current], {
          x: (i) => ["0%", "25%", "-25%"][i],
          y: (i) => ["-25%", "15%", "15%"][i],
          duration: 2,
        })
        .to(
          [text1Ref.current, text2Ref.current, text3Ref.current],
          { opacity: 0, duration: 0.5, },
          "-=0.5"
        )
        .to(triangleTextRef.current, { opacity: 1, scale: 1, color:"black", duration: 0.5 })
        .to([circle1Ref.current, circle2Ref.current, circle3Ref.current], {
          x: "0%",
          y: "0%",
          duration: 2,
        })
        .to(
          triangleTextRef.current,
          { opacity: 0, scale: 0, duration: 0.5 },
          "-=0.5"
        )
        .to(finalTextRef.current, { opacity: 1,color:"black", scale: 1, duration: 0.5 })
        .to(".button-div .catalog-button", {
          opacity: 1,
          scale: 1,
          duration: 2,
        })
        ;
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="h-screen flex flex-col overflow-hidden text-bold"
    >
      <h1  ref={titleRef} className="text-white text-[70px] text-center mt-8">
        Path to Smart Ownership
      </h1>
      <div className="flex-grow flex justify-center items-center">
        <div className="relative w-full max-w-5xl">
          <div  className="relative h-[350px]">
            <div
              ref={circle1Ref}
              className="absolute w-[350px] h-[350px] border border-gray-700 rounded-full flex justify-center items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span ref={text1Ref} className="text-white text-[17px]">
                10% Initial Payment
              </span>
            </div>
            <div 
              ref={circle2Ref}
              className="absolute w-[350px] h-[350px] border border-gray-700 rounded-full flex justify-center items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span ref={text2Ref} className="text-white text-[17px]">
                5 years installment, 0% overpayment
              </span>
            </div>
            <div
              ref={circle3Ref}
              className="absolute w-[350px] h-[350px] border border-gray-700 rounded-full flex justify-center items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span id="path-own" ref={text3Ref} className="text-white text-[17px]">
                Rental income ~ 15%
              </span>
            </div>
            <div
              ref={triangleTextRef}
              className="absolute w-[350px] h-[350px] rounded-full flex justify-center items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0"
            >
              <span className="text-black text-[17px]">Smart OwnerShip</span>
            </div>
            <div
              ref={finalTextRef}
              className="absolute w-[350px] h-[350px] rounded-full flex justify-center items-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0"
            >
              <span className="text-black text-[40px] font-montserrat">DreamDwell</span>
            </div>
          </div>
        </div>
      </div>
      <div className="button-div flex w-full justify-center mb-10">
        <div className="catalog-button rounded-2xl flex items-center justify-around opacity-0 bg-white text-black px-4  hover:text-white hover:bg-gray-700 transition-all" >
          <button className="p-8 rounded-[100px] font-montserrat text-[25px] ">
            Download Catalog
          </button>
          <IoMdDownload className="text-[25px] " />
        </div>
      </div>
    </div>
  );
};

export default Path;
