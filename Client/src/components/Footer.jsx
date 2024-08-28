import React from 'react';
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-[80vh] flex flex-col bg-[#f7f6f1]' >
      <div className='flex h-full justify-center'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <img width={300} className='' src="/logo-black-nobg.png" alt="" />
          <p className='text-[20px] font-montserrat' >Build Your Dreams With Us</p>
        </div>
        <div className='w-full h-full flex flex-col gap-10 items-center justify-center'>
          <div>
          <h4 className='text-[25px] font-montserrat' >Quick Navigation</h4>
          </div>
          <div className='flex flex-col font-montserrat text-[35px] font-bold gap-3'>
            <h1>Home</h1>
            <h1>Explore US</h1>
            <h1>About Us</h1>
          </div>
        </div>
        <div className='w-full h-full flex flex-col font-montserrat items-center justify-center gap-7'>
          <div className='flex gap-5 items-center justify-center'>
            <div>
              <img width={100} height={100} className='rounded-full' src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            </div>
            <div>
              <h4 className='text-[15px]'>DreamDwell Founders</h4>
              <h1 className='text-[20px] font-bold'>StackMasters</h1>
            </div>
          </div>
          <div className='text-[25px] font-semibold text-center'>
            We are here to change your future.
          </div>
          <div className='flex gap-7'>
            <button className='w-[100px] h-[50px] border-0 rounded-xl font-montserrat text-white bg-gray-900'>Contact us</button>
            <IoMail className='text-[50px]' />
            <FaLinkedin className='text-[50px]' />
          </div>
        </div>
      </div>
      <div className='flex h-full '>
        <div className='w-full h-full flex flex-col font-montserrat justify-center items-center gap-6'>
          <h1 className='text-[30px]'>Subscribe to our News</h1>
          <p className='w-[500px] text-gray-500 text-center'>Stay Informed and never miss a Beat.Subscribe to our Exclusive News Updates</p>
          <input className='border-0 ' type="text" placeholder='Enter Your Email' />
          <button className='bg-gray-800 w-[250px] h-[50px] text-white rounded-xl'>Subscribe</button>
        </div>
        <div className='w-full h-full flex flex-col font-montserrat items-center justify-center gap-1'>
          <h1 className='text-[25px]'>Address :</h1>
          <p className='text-[20px] text-gray-600 w-[200px]'>Chitkara University Punjab 140001, Rajpura</p>
        </div>
        <div className='w-full font-montserrat h-full flex flex-col items-center justify-center gap-5'>
          <div className='text-[20px] text-gray-500'>Copyright @ 2024 DreamDwells</div>
          <div className='flex gap-5'>
            <p className='text-[20px] font-semibold'>Terms of Policies</p>
            <p className='text-[20px] font-semibold'>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
