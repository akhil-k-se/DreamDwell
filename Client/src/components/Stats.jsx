import { useGSAP } from '@gsap/react';
import React from 'react';
import { IoCall } from "react-icons/io5";
import gsap from "gsap"

const Stats = () => {
    useGSAP(()=>{
        gsap.from(".para-1",{
            duration:2,
            x:-100,
            y:100,
            opacity:0,
            scrollTrigger:{
                scroller:"body",
                trigger:".para-1",
                start:"top 50%",
                end:"top 80%",
                scrub:3,
            }
        });

        gsap.from(".video-1",{
            duration:2,
            z:-1,
            x:200,
            y:200,
            opacity:0,
            scrollTrigger:{
                scroller:"body",
                trigger:".video-1",
                start:"top 50%",
                end:"top 80%",
                scrub:3,
            }
        });

        const tl = gsap.timeline();
        tl.from(".img-div img",{
            duration:2,
            z:-1,
            x:200,
            y:200,
            stagger:1,
            opacity:0,
            scrollTrigger:{
                scroller:"body",
                trigger:".img-div img",
                start:"top 50%",
                end:"top 80%",
                scrub:3,
            }
        });
        tl.from(".team-div",{
            duration:2,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                scroller:"body",
                trigger:".team-div",
                start:"top 50%",
                end:"top 80%",
                scrub:3,
            }
        });
        gsap.from(".call-div",{
            duration:2,
            z:-1,
            x:200,
            y:200,
            stagger:1,
            opacity:0,
            scrollTrigger:{
                scroller:"body",
                trigger:".call-div",
                start:"top 50%",
                end:"top 80%",
                scrub:3,
            }
        });

        const gl = gsap.timeline();
        gl.from(".line-div",{
            duration:2,
            stagger:1,
            opacity:0,
            scrollTrigger:{
                scroller:"body",
                trigger:".line-div",
                start:"top 100%",
                end:"top 80%",
                scrub:3,
            }
        });
        gl.from(".stats-div",{
            duration:2,
            stagger:2,
            y:50,
            delay:1,
            scrollTrigger:{
                scroller:"body",
                trigger:".stats-div",
                start:"top 100%",
                end:"top 80%",
                scrub:3,
            }
        });

        gsap.fromTo(
          ".stats-left",
          { x:0 , y:0 },
          {
            x:-100,
            y:-100,
            scrollTrigger: {
              trigger: ".stats-left",
              start: "bottom 600px",
              toggleActions: "play none none reverse",
              scrub: 1,
            },
          }
        );
        gsap.fromTo(
          ".stats-right",
          { x:0,y:0 },
          {
            x:100,
            y:-100,
            scrollTrigger: {
              trigger: ".stats-right",
              start: "bottom 600px",
              toggleActions: "play none none reverse",
              scrub: 1,
            },
          }
        );
    })
  return (
    <div id='about' className='stats-page w-full h-screen flex overflow-hidden '>
      <div className='stats-left w-full h-screen flex flex-col'>
        <div className='flex flex-col justify-start font-montserrat m-12'>
          <div className='w-[500px] text-[22px] relative'>
            <h1 className='para-1' >
              At DreamDwell, we offer more than just a real estate service, we provide an unparalleled experience tailored to meet your needs and exceed your expectations.
            </h1>
            <div className='my-10' >
            <div className='img-div flex w-[300px] mt-4 relative'>
              <img className='w-[70px] h-[70px] rounded-full border-2 border-white absolute' src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <img className='w-[70px] h-[70px] rounded-full border-2 border-white absolute left-[50px]' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <img className='w-[70px] h-[70px] rounded-full border-2 border-white absolute left-[100px]' src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <img className='w-[70px] h-[70px] rounded-full border-2 border-white absolute left-[150px]' src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <img className='w-[70px] h-[70px] rounded-full border-2 border-white absolute left-[200px]' src="https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className='team-div' >
                <h1 className='w-[400px] my-5 mx-[300px] text-gray-600' >Meet Our Professional Team</h1>
            </div>
            </div>
          </div>
          <div className='flex flex-col gap-8 my-24' >
            <div className='stats-div flex justify-between text-[40px] '>
                <div  ><h1 className='text-[60px] font-bold'>86+</h1></div>
                <div className='w-[500px]' > <h1>Successfull <br/> Transactions Monthly</h1></div>
            </div>
            <div className='line-div w-full h-[5px] rounded-xl bg-gray-500' ></div>
            <div className='stats-div flex justify-between text-[40px] '>
                <div ><h1 className='text-[60px] font-bold'>80%</h1></div>
                <div className='w-[500px] right-0' > <h1>Customer <br/> Satisfaction Rate</h1></div>
            </div>
            <div className='line-div w-full h-[5px] rounded-xl bg-gray-500' ></div>
            <div className='stats-div flex justify-between text-[40px] '>
                <div  ><h1 className='text-[60px] font-bold'>409</h1></div>
                <div className='w-[500px]' > <h1>Exquisite Properties <br/> Ready For Your Selection</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className='stats-right w-full h-screen flex justify-center py-10 relative'>
        <div className='call-div z-20 absolute contact-div flex bg-gray-700 p-4 m-6 rounded-[100px] gap-2 right-0 mx-20'>
          <div className='flex items-center bg-white p-2 rounded-[60px]'>
            <IoCall className='text-[30px]' />
          </div>
          <div className='flex items-center'>
            <h6 className='contact-text text-white font-montserrat opacity-0 scale-0'>
              Contact Us Now
            </h6>
          </div>
        </div>
        <video className='video-1 rounded-[20px] w-full h-full object-cover mx-8' src="https://cdn.pixabay.com/video/2024/05/06/210905_large.mp4" autoPlay loop muted />
        <h1 className='absolute bottom-4 left-4 text-white font-montserrat text-[30px] my-14 mx-24'>
          Building Your Dreams
        </h1>
      </div>
    </div>
  );
};

export default Stats;