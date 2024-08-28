import React from 'react';

const Marquee = () => {
  return (
    <div className="relative w-full h-[170px] py-2 overflow-hidden bg-transparent"> 
      <div className="flex gap-3 whitespace-nowrap animate-marquee font-montserrat">
        <span className="bg-[#939393]/20 text-[#252525] text-[60px] rounded-[200px] py-9 px-5 font-medium mx-4">
          Exceptional Real Estate Solutions
        </span>
        <span className="bg-[#939393]/20 text-[#252525] text-[60px] rounded-[200px] py-9 px-5 font-medium mx-4">
           Tailored to Your Needs
        </span>
        <span className="bg-[#939393]/20 text-[#252525] text-[60px] rounded-[200px] py-9 px-5 font-medium mx-4">
          Explore More Now 
        </span>
        <span className="bg-[#939393]/20 text-[#252525] text-[60px] rounded-[200px] py-9 px-5 font-medium mx-4">
          0% Commission
        </span>
      </div>
    </div>
  );
}

export default Marquee;
