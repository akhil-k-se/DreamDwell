import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ExploreCards = ({ images, title }) => {
  return (
    <div className="carddiv group w-[480px] rounded-[30px] h-[650px] flex relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-10px]">
      <img
        className="cardimg rounded-[20px] w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:grayscale-0 grayscale"
        src={images}
        alt=""
      />

      <IoIosArrowRoundUp className="absolute text-white z-20 bg-slate-500 right-0 m-10 text-[50px] w-[100px] h-[100px] rounded-[100%] rotate-45 font-weight-300 opacity-0 group-hover:opacity-100 hover:scale-110 transition-transform duration-300 ease-in-out" />

      <h1 className="absolute z-20 text-white bottom-0 left-0 m-12 font-montserrat text-center text-[21px] rounded-[20px] bg-slate-500 w-[190px] h-[75px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {title}
      </h1>
    </div>
  );
};

export default ExploreCards;
