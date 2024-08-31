import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import {useNavigate } from "react-router-dom";
import gsap from "gsap";
import axios from "axios";
import Login from "./Login";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    country: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

  const handleClick = () => {
    navigate("/");
    if (window.location.pathname === "/") {
      window.location.reload();
    }
  };

  const handleSlide = (index) => {
    if (index !== currentImage) {
      setCurrentImage(index);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const filteredData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "")
      );

      const response = await axios.post(
        "http://localhost:1218/addBuyer",
        filteredData
      );

      if (response.data.missingKeys) {
        alert(
          `Please fill in the following required fields: ${response.data.missingKeys.join(
            ", "
          )}`
        );
      } else if (response.data.msg === "User with this email already exists") {
        alert(
          "An account with this email already exists. Please use a different email."
        );
      } else if (
        response.data.msg === "User with this mobile number already exists"
      ) {
        alert(
          "An account with this mobile number already exists. Please use a different mobile number."
        );
      } else {
        console.log("Account created successfully:", response.data);

        localStorage.setItem("isLoggedIn", "true");

        navigate("/");
        if (window.location.pathname === "/") {
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Error creating account:", error);
      if (error.response && error.response.data.missingKeys) {
        alert(
          `Please fill in the following required fields: ${error.response.data.missingKeys.join(
            ", "
          )}`
        );
      } else if (
        error.response &&
        error.response.data.msg === "User with this email already exists"
      ) {
        alert(
          "An account with this email already exists. Please use a different email."
        );
      } else if (
        error.response &&
        error.response.data.msg ===
          "User with this mobile number already exists"
      ) {
        alert(
          "An account with this mobile number already exists. Please use a different mobile number."
        );
      } else {
        alert("There was an error creating your account. Please try again.");
      }
    }
  };

  return (
    <div className="w-full h-screen bg-[#252525] flex items-center justify-center">
      <div className="signup-container w-[70%] h-[70%] bg-white rounded-2xl flex overflow-hidden p-2 px-2 relative gap-3">
        <img
          className="absolute left-0 z-10 top-0"
          width={150}
          src="/logo-noback.png"
          alt=""
        />
        <button
          onClick={handleClick}
          className="absolute flex items-center justify-around z-10 text-white right-[50%] m-4 mt-8 mx-6 text-[15px] gap-2 bg-gray-500/50 p-3 rounded-xl font-montserrat hover:bg-gray-500 transition-all"
        >
          <h1>back to website</h1>
          <IoIosArrowRoundForward />
        </button>
        <p className="absolute z-10 text-white bottom-0 text-[70px] font-montserrat my-20 mx-[100px] font-bold block text-center">
          The DUBAI
        </p>
        <div className="w-full h-full relative rounded-2xl overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity rounded-2xl signup-image ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
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
            <div className="flex flex-col gap-5 justify-between">
              <h1 className="text-[60px]">Create An Account</h1>
              <div className="w-full h-full flex flex-col gap-4 justify-between">
                <div>
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="border-black flex-1 border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input
                    className="flex-1 border-black border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  className="border-black border-solid border-[2px] p-5 rounded-2xl w-full"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  className="border-black border-solid border-[2px] p-5 rounded-2xl w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <button
                onClick={handleNextStep}
                className="rounded-full border-black border-solid border-[2px] p-5 px-10 hover:bg-black hover:text-white transition-all"
              >
                Continue
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="w-full h-full flex flex-col justify-between gap-2">
              <h1 className="text-[50px]">Personal Information</h1>
              <div className="w-full h-full flex flex-col gap-5 justify-between">
                <div className="flex items-center gap-2">
                  <input
                    className="border-black flex-1 border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  <input
                    className="border-black flex-1 border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="border-black flex-1 border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <input
                    className="border-black flex-1 border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="border-black flex-1 border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                  <input
                    className="border-black flex-1 border-solid border-[2px] p-5 rounded-2xl"
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <button
                  onClick={handlePreviousStep}
                  className="rounded-full border-black border-solid border-[2px] p-5 px-10 hover:bg-black hover:text-white transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="rounded-full border-black border-solid border-[2px] p-5 px-10 hover:bg-black hover:text-white transition-all"
                >
                  Create Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
