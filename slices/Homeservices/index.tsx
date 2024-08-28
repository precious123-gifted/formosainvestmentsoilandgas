"use client"


import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from '../../app/components/ServicesBounded';
import { PrismicNextImage } from "@prismicio/next";
import React, { MutableRefObject, RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

/**
 * Props for `Homeservices`.
 */
export type HomeservicesProps = SliceComponentProps<Content.HomeservicesSlice>;

/**
 * Component for "Homeservices" Slices.
 */
const Homeservices = ({ slice }: HomeservicesProps): JSX.Element => {

  type ProductRef = MutableRefObject<HTMLDivElement | null>;

  const productrefs = useRef<ProductRef[]>([]);
  const imagerefs = useRef<ProductRef[]>([]);
  const writeuprefs = useRef<ProductRef[]>([]);
  const headerrefs = useRef<ProductRef[]>([]);
  const header2refs = useRef<ProductRef[]>([]);
  const headerref = useRef(null)
  const button = useRef(null)

 

  type SplitHeaderRef = MutableRefObject<HTMLSpanElement | null>;

  const splitheaderrefs = useRef<SplitHeaderRef[]>([]);

  function matchMediaOrientation(orientation:string) {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(orientation);
      return mediaQuery.matches;
    }
    return false; // Or handle the case where window is not defined
  }
  
  
  // Example usage:
  const isPortrait = matchMediaOrientation('(orientation: portrait)');
  const isLandscape = matchMediaOrientation('(orientation: landscape)');

  const content = useRef(null)
  const view = useRef(null)


  const [loaded,setLoaded] = useState(false)


  useEffect(()=>{
  
  setLoaded(true)
  
  
  
  },[])



  useLayoutEffect(() => {
    if (loaded === true) {
      let ctx = gsap.context(() => {
  
        const timeline = gsap.timeline({ yoyo: true });
        const serviceTimeline = gsap.timeline({ yoyo: true });
   
        timeline
          .to('.services', { backgroundColor:'#0f0908', duration: 2, ease: "power3.out" }) 
          serviceTimeline
          .to('.service-pin-container', { opacity:0.2, duration: 4, ease: "power3.out" }) 
          .to('.service-pin-container', { opacity:1, duration: 4, ease: "power3.out" }) 
          
          
        
        ScrollTrigger.create({
          trigger: '.services',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          animation: timeline
        });
       
        ScrollTrigger.create({
          trigger: '.weoffer-trigger',
          start: 'bottom 100px',
          // end: 'bottom bottom',
          scrub: true,
          animation: serviceTimeline
        });
       
  

        ScrollTrigger.create({
          trigger:'.service-pin-container',
          start: 'top top',
          end:  "bottom top",
          scrub: true,
          pin:'.service-box-div',
          pinReparent:true,
          pinSpacing:false,
          pinType:'fixed',
           
         })
     
         
        

         gsap.set(".services-photo", { opacity: 0, scale: 0.8 })

         const animation = gsap.timeline({ yoyo: true });
         const animation1 = gsap.timeline({ yoyo: true });
         const animation2 = gsap.timeline({ yoyo: true });
         const animation3 = gsap.timeline({ yoyo: true });
     animation.to(["#services0",".header"], {
           opacity: 1, scale: 1, duration: 0.1,stagger:0.3
         })
     animation.to(["#services1",".header1"], {
           opacity: 1, scale: 1, duration: 0.1,stagger:0.3
         })
     animation.to(["#services2",".header2"], {
           opacity: 1, scale: 1, duration: 0.1,stagger:0.3
         })
     animation.to(["#services3",".header3"], {
           opacity: 1, scale: 1, duration: 0.1,stagger:0.3
         })
     
   
         ScrollTrigger.create({
           trigger: "#services0",
           start: "top center",
           end: "bottom bottom",
           animation: animation,
           scrub: true,
           
         })
         ScrollTrigger.create({
           trigger: "#services0",
           start: "bottom center",
          //  end: "bottom bottom",
           animation: animation1,
           scrub: true,
           
         })
         ScrollTrigger.create({
           trigger: "#services1",
           start: "bottom center",
          //  end: "bottom bottom",
           animation: animation2,
           scrub: true,
           
         })
         ScrollTrigger.create({
           trigger: "#services2",
           start: "bottom center",
          //  end: "bottom bottom",
           animation: animation3,
           scrub: true,
           
         })
        
   
      
        
   













        return () => ctx.revert(); 
      });
    }
  }, [loaded]);

  


 
   

  return (
    <Bounded  
   
   className="services pt-[18vw] portrait:pt-[24vw] pb-[18vw] overflow-hidden  text-[#EDF4F6] bg-[#080e0f]" 
  
    >

<div ref={content} id="services" className="services-content h-full w-full flex flex-col items-center pt-[10vw]  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw]"> 
 
<div className="weoffer-trigger text-[3vw] portrait:text-[6vw] mb-[8vw] portrait:sm:mb-8">
We Offer a Wide Range of Services
</div>


<div className=" w-full ">


  
          
    <div className="service-pin-container opacity-0 flex flex-col items-center">
      

<div className="service-box-div border-4 border-[#8da054]  flex flex-col w-[90vw] h-[9vw]     ">

<div className="header_section h-full w-full relative   flex justify-center bg-[#131c29]   text-[#d8e4b1] text-[2vw] portrait:text-[4vw]">
<div className="header h-full flex-grow opacity-0   absolute  "><div className="boxcontent w-full h-full flex justify-center items-center px-[2vw]"><div className="box-writeup  ">We do Offshore</div> </div> </div>
<div className="header1 h-full flex-grow opacity-0  absolute "><div className="boxcontent1 w-full h-full flex justify-center items-center px-[2vw] "><div className="box-writeup1  ">We Market Petroleum and Gas</div></div> </div>
<div className="header2 h-full flex-grow opacity-0  absolute  "><div className="boxcontent2 w-full h-full flex justify-center items-center px-[2vw] "><div className="box-writeup2 ">We Offer Storage</div></div> </div>
<div className="header3 h-full flex-grow opacity-0  absolute "><div className="boxcontent3 w-full h-full flex justify-center items-center px-[2vw]"><div className="box-writeup3 ">We do Bunkering</div></div> </div>
</div>



</div>

      <div className="space-y-16 h-full flex flex-col items-center  ">
        <div   className="ProductsContainer h-full relative w-full grid  portrait:grid-cols-1   gap-1 portrait:gap-[4vw] portrait:sm:gap-[4vw]   gap-y-1"> 
          <div className="services-photo rounded-md"></div>
        {slice.primary.services_container.map((product:any,index:number) => (
          
          <>
          <div
            key={product._id}
            id={`services${index}`}
            ref={productrefs.current[index] = React.createRef<HTMLDivElement>()}
            // onClick={()=>{microActionOnProductClick(productrefs.current[index])}}
            className="services-photo  transition duration-200 ease-in
              w-auto flex flex-col items-center text-start  "
          >


            
            <div className=" flex flex-col items-start ">

 

      <div ref={imagerefs.current[index] = React.createRef<HTMLDivElement>()} className="rounded-lg productImage relative flex justify-center  cursor-pointer w-[90vw] h-[40vw] portrait:h-[100%] overflow-hidden mb-3 portrait:w-full ">
                <PrismicNextImage   field={product.service_image} className=" mt-[-10vw] rounded-lg "/>

               
              </div>
 

            </div>

          </div>
          </>
        ))}


      </div>

  
      </div>
      </div>     

      </div>
      </div>
      </Bounded>
  );
};

export default Homeservices;
