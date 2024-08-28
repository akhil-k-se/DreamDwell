import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { CiMap } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

 const navigate = useNavigate();
 const handleStartedClick = ()=>{
  navigate("/Choice")
 }


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".logo", {
      y: 30,
      opacity: 0,
      duration: 2,
      delay: 2,
    });
    gsap.from(".icon", {
      scale: 0,
      opacity: 0,
      duration: 2,
      delay: 2,
    });
    gsap.from(".landingH1", {
      y: 40,
      scale: 0,
      opacity: 0,
      duration: 2,
      delay: 2,
      stagger: 0.2,
    });
    gsap.from(".landingH4", {
      y: -20,
      scale: 0,
      duration: 2,
      delay: 2,
      opacity: 0,
    });
    gsap.from("h6", {
      y: -20,
      scale: 0,
      duration: 2,
      delay: 2,
      opacity: 0,
    });
    gsap.from(".contact-div", {
      duration: 3,
      delay: 2,
      opacity: 0,
      y: 30,
    });
    gsap.to(".contact-text", {
      duration: 3,
      delay: 2,
      opacity: 1,
      scale: 1,
    });
    gsap.from(".image-bottom", {
      duration: 3,
      delay: 2,
      opacity: 0,
      scale: 0,
    });
    gsap.from(".catalog", {
      duration: 2,
      delay: 2,
      opacity: 0,
      scale: 0,
    });
    gsap.from(".right-img", {
      duration: 2,
      delay: 2,
      opacity: 0,
      scale: 0,
    });
    gsap.to(".leftside", {
      x: -1000,
      y: -100,
      duration: 2,
      scrollTrigger: {
        scroller: "body",
        trigger: ".leftside",
        start: "bottom 40%",
        scrub: 2,
      },
    });
    gsap.to(".rightside", {
      x: 1000,
      y: -100,
      duration: 2,
      scrollTrigger: {
        scroller: "body",
        trigger: ".leftside",
        start: "bottom 40%",
        scrub: 2,
      },
    });
  });

  useEffect(() => {
    if (isMenuOpen) {
      const tl = gsap.timeline();

      tl.to(".menu-container", {
        x: 0,
        duration: 0.5,
      });
      tl.from(".menu-item", {
        x: "-1000%",
        duration:0.5,
        stagger: 0.3,
      });
    } else {
      gsap.to(".menu-container", {
        x: "-100%",
        duration: 1,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  const handleMenuClick = (target) => {
    gsap.to(".menu-container", {
      x: "-100%",
      duration: 1,
      ease: "power3.in",
      onComplete: () => {
        setIsMenuOpen(false);
        document.querySelector(target).scrollIntoView({
          behavior: "smooth",
        });
      },
    });
  };

  return (
    <div id="home" className="landingpage overflow-x-hidden flex w-full h-screen gap-10">
      <div className="leftside relative w-full h-screen flex flex-col">
        <nav className="h-[120px] w-full relative flex justify-between">
          <div className="relative flex">
            <img className="logo" width={150} src="/logo.png" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <CiMap className="icon text-[40px] hover:scale-110" />
            <RiMenu3Fill
              id="menu"
              className="icon text-[40px] hover:scale-110 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </nav>
        <div className="h-full flex flex-col items-center justify-center">
          <h4 className="landingH4 text-[30px] font-montserrat">
            Building Your dreams
          </h4>
          <h1 className="landingH1 text-[50px] font-bold w-[553.1px] text-center font-montserrat">
            Real Estate in{" "}
            <span className="font-tajawal text-[110px]">Dubai</span>:
          </h1>
          <h1 className="landingH1 text-[50px] font-bold w-[553.1px] text-center font-montserrat">
            Ideal for Living and
          </h1>
          <h1 className="landingH1 text-[50px] font-bold w-[553.1px] text-center font-montserrat">
            Investing
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="contact-div flex bg-gray-700 p-4 m-6 rounded-[100px] gap-2">
            <div className="flex items-center bg-white p-2 rounded-[60px]">
              <IoCall className="text-[30px]" />
            </div>
            <div className="flex items-center ">
              <h6 className="contact-text text-white font-montserrat opacity-0 scale-0">
                Contact Us Now
              </h6>
            </div>
          </div>
          <div className="relative flex ">
            <img
              className="image-bottom rounded-[100px]"
              width={100}
              src="https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="rightside w-full h-screen px-18 py-2 flex items-center justify-center relative">
        <div className="absolute text-white flex top-10 justify-between gap-20 px-4">
          <h6 className="z-10 w-[230px] text-[19px] font-montserrat">
            More Than 1500 real Estate Properties
          </h6>
          <h6 className="z-10 w-[250px] text-[19px] font-montserrat">
            From ₹1,50,000 to yield of 10% per annum
          </h6>
          <button onClick={handleStartedClick} className="icon z-10 flex rounded-xl w-[100px] text-[15px] bg-white text-[#252525] items-center justify-center">
            Get Started
          </button>
        </div>
        <div className="z-10 catalog absolute rounded-xl p-8 bottom-0 gap-4 right-0 bg-white mx-20 my-20 flex ">
          <h5 className="text-[20px] w-24 font-montserrat">
            catalog download
          </h5>
          <div className="flex items-center">
            <IoMdDownload className="text-[30px]" />
          </div>
        </div>
        <img
          className="right-img w-full h-full object-cover rounded-[50px]"
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      {/* Menu */}
      <div className="menu-container flex flex-col items-center justify-center fixed top-0 left-0 h-full w-[50%] bg-black shadow-lg z-50 transform -translate-x-full text-white">
        <div className="">
          <button
            className="absolute top-5 right-5 text-3xl font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </button>
          <ul className="space-y-10 text-center text-3xl">
            <li
              className="menu-item hover:text-gray-300 cursor-pointer"
              onClick={() => handleMenuClick("#explore")}
            >
              Explore Us
            </li>
            <li
              className="menu-item hover:text-gray-300 cursor-pointer"
              onClick={() => handleMenuClick("#about")}
            >
              About Us
            </li>
            <li
              className="menu-item hover:text-gray-300 cursor-pointer"
              onClick={() => handleMenuClick("#solution")}
            >
              Why Us?
            </li>
            <li
              className="menu-item hover:text-gray-300 cursor-pointer"
              onClick={() => handleMenuClick("#path-own")}
            >
              Path To Smart OwnerShip
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
