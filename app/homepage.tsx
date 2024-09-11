"use client"

import React, { useEffect, useRef, useState } from 'react'
import SmoothScroller from '../smoothscroll'
import { useStateContext } from './StateManager';
import Template from './template';
import { useRouter } from 'next/navigation';
import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"


const animateHomeIn = () => {
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

// export const animatePageOut = (href: string, router: AppRouterInstance) => {
//   const bannerOne = document.getElementById("banne-1")
//   const bannerTwo = document.getElementById("banne-2")
//   const bannerThree = document.getElementById("banne-3")
//   const bannerFour = document.getElementById("banne-4")
//   const bannerContainer = document.getElementById("banne-container")

//   if (bannerOne && bannerTwo && bannerThree && bannerFour) {
//     const tl = gsap.timeline()

//     tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
//       yPercent: -100,
//     }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
//       yPercent: 0,
//       stagger: 0.2,
//       onComplete: () => {
// gsap.to(bannerContainer,{display:'none',pointerEvents:'none'})
         
//       },
//     })
//   }
// }


export default function Homepage({Children}:any) {


  const { oilDataState } = useStateContext();
 
  const router = useRouter();

  useEffect(() => {
    if(oilDataState === 201){animateHomeIn()}
    
  }, [oilDataState])

  return (

    <>
    <div  
    id='banne-container'
    className='w-[100vw] h-screen   absolute top-0 z-50'>
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
