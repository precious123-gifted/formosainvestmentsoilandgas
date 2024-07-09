"use client"

import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RefObject, useRef } from "react";
import { InView } from "react-intersection-observer";
import gsap from 'gsap'


/**
 * Props for `Whyus`.
 */
export type WhyusProps = SliceComponentProps<Content.WhyusSlice>;

/**
 * Component for "Whyus" Slices.
 */
const Whyus = ({ slice }: WhyusProps): JSX.Element => {

  const header = useRef(null)
  const writeup = useRef(null)
  const writeup2 = useRef(null)



  const opacityAnimation = (ref: RefObject<HTMLDivElement>, time: number,inView:boolean) => {
  
    gsap.to(ref.current, time, {
      opacity: inView? '100%':'0',
      scrub: 1,
      ease: "expo.in",
    });
  
 
  };





  return (
    <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
   className="  text-[#FBFFFE] bg-[#162226] pb-8 " >
   
  <div className=" content w-full  flex   portrait:flex-col rounded-xl relative">



<div className="headersection space-y-6 landscape:pt-14  portrait:pt-6 portrait:text-center  landscape:text-start h-full  flex flex-col items-center w-full">

<InView as="div" onChange={(inView, entry) => opacityAnimation(header,0.6,inView)}>

<div ref={header} className="header opacity-0 text-[3vw] portrait:text-[6vw] portrait:sm:mb-8">{slice.primary.header}</div>

</InView>

<InView as="div" onChange={(inView, entry) => opacityAnimation(writeup,0.6,inView)}>

<div ref={ writeup} className="writeup opacity-1 text-[1.4vw] portrait:text-[4.3vw]">{slice.primary.writeup1}</div>
</InView>


<InView as="div" onChange={(inView, entry) => opacityAnimation(writeup2,0.6,inView)}>

<div ref={ writeup2} className="writeup opacity-1 text-[1.4vw] portrait:text-[4.3vw]">{slice.primary.writeup2}</div>
</InView>

 
</div>



  </div>


  </Bounded>
  );
};

export default Whyus;
