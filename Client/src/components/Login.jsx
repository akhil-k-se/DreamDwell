import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:1218/loginBuyer",
        formData
      );
      console.log(response.data.mssg);

      if (response.data.mssg == "The Credentials are Wrong") {
        alert("The Credentials are Wrong");
      } else {
        console.log("Login successful:", response.data.check);
        localStorage.setItem("isLoggedIn", "true")
        navigate("/");
        if (window.location.pathname === "/") {
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
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
          <div className="flex flex-col gap-5 justify-between">
            <h1 className="text-[60px]">
              LogIn <br /> to Your Account
            </h1>
            <div className="w-full h-full flex flex-col gap-4 justify-between">
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
              onClick={handleSubmit}
              className="rounded-full border-black border-solid border-[2px] p-5 px-10 hover:bg-black hover:text-white transition-all"
            >
              LogIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
