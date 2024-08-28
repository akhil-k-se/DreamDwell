import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChoicePage = () => {
  const navigate = useNavigate();
  const buyerRef = useRef(null);
  const sellerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buyerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      sellerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );
  }, []);

  const handleChoice = (type) => {
    navigate(`/${type}`);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white overflow-hidden relative font-montserrat">
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        <h1 className="text-black bg-transparent text-4xl mb-4 font-bold">Choose Your Role</h1>
        <div className="flex gap-8">
          <div
            ref={buyerRef}
            onClick={() => handleChoice('Signup')}
            className="bg-black h-[500px] relative text-white p-8 rounded-lg shadow-lg cursor-pointer transition-all transform hover:scale-105"
          >
          <img className='absolute w-full h-full top-0 left-0 opacity-[0.05] hover:opacity-[0.5] transition-all duration-300 ' src="https://images.pexels.com/photos/16600057/pexels-photo-16600057/free-photo-of-minimal-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <h2 className="text-2xl font-semibold mb-4">I am a Buyer</h2>
            <p className="text-lg">
              Explore properties and find your dream home with ease.
            </p>
          </div>
          <div
            ref={sellerRef}
            onClick={() => handleChoice('SellerSignup')}
            className="bg-white text-black p-8 rounded-lg shadow-lg cursor-pointer transition-all transform hover:scale-105"
          >
          <img className='absolute w-full h-full top-0 left-0 opacity-[0.05] hover:opacity-[0.5] transition-all duration-300 ' src="https://images.pexels.com/photos/16600057/pexels-photo-16600057/free-photo-of-minimal-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

            <h2 className="text-2xl font-semibold mb-4">I am a Seller</h2>
            <p className="text-lg">
              List your property and reach potential buyers quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoicePage;
