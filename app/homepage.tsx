"use client"

import React, { useEffect, useRef, useState } from 'react'
import SmoothScroller from '../smoothscroll'
import { useStateContext } from './StateManager';
import Template from './template';
import { useRouter } from 'next/navigation';
import gsap from "gsap"
import GridAnimation from './components/GridAnimation'

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"



function animateHomeIn () {
  const bannerOne = document.getElementById("banne-1")
  const bannerTwo = document.getElementById("banne-2")
  const bannerThree = document.getElementById("banne-3")
  const bannerFour = document.getElementById("banne-4")
  const bannerContainer = document.getElementById("banne-container");


  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
      onComplete: () => {
        gsap.to(bannerContainer, { display: 'none', pointerEvents: 'none',opacity:0 });
      },
    });
  }
};

 

export default function Homepage({Children}:any) {


  const { oilDataState } = useStateContext();
 
  const router = useRouter();

  useEffect(() => {
    if (oilDataState === 201) {
      router.replace('/');
      window.scrollTo(0, 0); // Scroll to the top
      animateHomeIn();
    }
  }, [oilDataState]);

  return (

    <>
   
    <div  
    id='banne-container'
    className='w-[100vw] h-screen overflow-y-hidden  absolute top-0 z-50'>

      <div className='grid-container absolute z-40 '>
 <GridAnimation/>
      </div>
    <div
        id="banne-1"
        className="min-h-screen bg-[#080e0f] "
      ></div>
      <div
        id="banne-2"
        className="min-h-screen bg-[#080e0f] "
      ></div>
      <div
        id="banne-3"
        className="min-h-screen bg-[#080e0f] "
      ></div>
      <div
        id="banne-4"
        className="min-h-screen bg-[#080e0f] "
      ></div>
    </div>
   {/* <PreloadingTemplate /> */}
{   oilDataState === 201 &&     <SmoothScroller> 
        
    {Children}
       
    </SmoothScroller>
     
           
}
    </>
    
  )
}
