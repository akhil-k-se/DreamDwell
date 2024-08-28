import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const SellerSignup = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [step, setStep] = useState(1);

  const images = [
    {
      src: "https://images.pexels.com/photos/3378916/pexels-photo-3378916.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Capture the Beauty",
    },
    {
      src: "https://images.pexels.com/photos/3567218/pexels-photo-3567218.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      src: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".signup-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(".signup-image", {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.1,
      })
      .set(".signup-image", { opacity: 0, scale: 0.8 })
      .to(`.signup-image:nth-child(${currentImage + 1})`, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power4.out",
      });
  }, [currentImage]);

  useEffect(() => {
    gsap.fromTo(
      ".signup-step-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [step]);

  const handleSlide = (index) => {
    setCurrentImage(index);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    navigate("/");
    if (window.location.pathname === "/") {
      window.location.reload();
    }
  };

  return (
    <div className="w-full h-screen bg-[#252525] flex items-center justify-center">
      <div className="signup-container w-[70%] h-[70%] bg-white rounded-2xl flex overflow-hidden p-3 px-1 relative gap-3">
        <button
          onClick={() => {
            navigate("/");
            if (window.location.pathname === "/") {
              window.location.reload();
            }
          }}
          className="absolute flex items-center justify-around z-10 text-white right-[50%] m-4 mt-8 mx-6 text-[15px] gap-2 bg-gray-500/50 p-3 rounded-xl font-montserrat hover:bg-gray-500 transition-all"
        >
          <h1>Back to website</h1>
          <IoIosArrowRoundForward />
        </button>
        <img
          className="absolute left-0 z-10 top-0"
          width={150}
          src="/logo-noback.png"
          alt="Logo"
        />
        <p className="absolute z-10 text-white bottom-0 text-[70px] font-montserrat my-20 mx-[100px] font-bold block text-center ">
          The DUBAI
        </p>
        <div className="w-full h-full relative rounded-2xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity rounded-2xl signup-image ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
              }}
            />
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlide(index)}
                className={`w-6 h-3 rounded-full ${
                  currentImage === index ? "bg-white" : "bg-white/50"
                } transition-all duration-300`}
              ></button>
            ))}
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-between font-montserrat gap-2 p-5">
          {step === 1 && (
            <div className="signup-step-content">
              <h1 className="text-[50px]">Seller Signup</h1>
              <div className="flex flex-col gap-4 justify-between">
                <div>
                  Already have an account? <a href="">Log in</a>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="border-black flex-1 border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="flex-1 border-black border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex">
                  <input
                    className="border-black border-solid border-[2px] p-5 rounded-2xl w-full"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    className="border-black border-solid border-[2px] p-5 rounded-2xl w-full"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center gap-3 text-[15px]">
                  <input type="checkbox" />
                  <h1>
                    I agree to <a>Terms & Conditions</a>
                  </h1>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <button
                  onClick={handleNext}
                  className="w-full text-[30px] text-white bg-[#252525] p-3 rounded-2xl hover:bg-white hover:text-[#252525] transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="signup-step-content">
              <h1 className="text-[50px]">Property Details</h1>
              <div className="flex flex-col gap-4 justify-between">
                <div>
                  <input
                    className="border-black border-solid border-[2px] p-5 rounded-2xl w-full"
                    type="text"
                    placeholder="Property Type"
                  />
                </div>
                <div>
                  <input
                    className="border-black border-solid border-[2px] p-5 rounded-2xl w-full"
                    type="text"
                    placeholder="Property Location"
                  />
                </div>
                <div>
                  <input
                    className="border-black border-solid border-[2px] p-5 rounded-2xl w-full"
                    type="text"
                    placeholder="Property Value"
                  />
                </div>
                <div>
                  <input
                    className="border-black border-solid border-[2px] p-5 rounded-2xl w-full"
                    type="text"
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <button
                  onClick={handleBack}
                  className="text-[30px] text-white bg-[#252525] p-3 rounded-2xl hover:bg-white hover:text-[#252525] transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="text-[30px] text-white bg-[#252525] p-3 rounded-2xl hover:bg-white hover:text-[#252525] transition-all"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerSignup;
