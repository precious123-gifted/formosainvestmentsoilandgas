"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from '../../app/components/Bounded';
import React, { MutableRefObject, RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { InView } from "react-intersection-observer";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

/**
 * Props for `Homeproducts`.
 */
export type HomeproductsProps = SliceComponentProps<Content.HomeproductsSlice>;

/**
 * Component for "Homeproducts" Slices.
 */
const Homeproducts = ({ slice }: HomeproductsProps): JSX.Element => {

  type ProductRef = MutableRefObject<HTMLDivElement | null>;
  type SplitHeaderRef = MutableRefObject<HTMLSpanElement | null>;

  const productrefs = useRef<ProductRef[]>([]);
  const headerref = useRef(null)
  const button = useRef(null)
  const buttonwritup = useRef(null)
  const imagerefs = useRef<ProductRef[]>([]);
  const writeuprefs = useRef<ProductRef[]>([]);
  const headerrefs = useRef<ProductRef[]>([]);
  const splitheaderrefs = useRef<SplitHeaderRef[]>([]);
  const splittitlerefs = useRef<SplitHeaderRef[]>([]);


  const opacityAnimation = (ref: RefObject<HTMLDivElement>, time: number,inView:boolean) => {
  
    gsap.to(ref.current, time, {
      opacity: inView? '100%':'0',
      scrub: 1,
      ease: "expo.in",
    });
  
 
  };

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


  const opacityAndLetterAnimation = (ref: RefObject<HTMLSpanElement> , time: number, inView: boolean) => {
  
  

  
    const timeline = gsap.timeline();
  splitheaderrefs.current.forEach((ref)=>{
 timeline.to(ref.current, time, { opacity: inView ? 1 : 0, ease: "power1.easeIn" });
    timeline.play(); 

  })
  
 
  };
  const opacityAndLetterAnimation2 = (ref: RefObject<HTMLSpanElement> , time: number, inView: boolean) => {
  
  

  
    const timeline = gsap.timeline();
    splittitlerefs.current.forEach((ref)=>{
      timeline.to(ref.current, time, { opacity: inView ? 1 : 0, ease: "power1.easeIn" });
         timeline.play(); 
     
       })
  
 
  };




 
const [loaded,setLoaded] = useState(false)


useEffect(()=>{

setLoaded(true)



},[])

  useGSAP(() => {
  if(loaded === true){
    ScrollTrigger.create({
trigger:'.writeup-cont',
start: 'top 120px',
end:  "bottom bottom",
pin:'.image-cont',
pinReparent:true,
pinSpacing:false,
pinType:'fixed',

})



if(isPortrait){

  ScrollTrigger.create({
    trigger:'.contentz',
    start: 'top top',
    end:  "bottom bottom",
    pin:'.products-photo',
    pinReparent:true,
    pinSpacing:false,
    pinType:'fixed',
    })




}



}

  }, [loaded]);
  



  useLayoutEffect(() => {

    if(loaded === true){


      const animation = gsap.timeline({ yoyo: true });
  animation.to("#product-image0", {
				opacity: 1, scale: 1, duration: 0.3,stagger:0.3
			})
      const animation1 = gsap.timeline({ yoyo: true });
  animation1.to("#product-image1", {
				opacity: 1, scale: 1, duration: 0.3,stagger:0.3
			})
      const animation2 = gsap.timeline({ yoyo: true });
  animation2.to("#product-image2", {
				opacity: 1, scale: 1, duration: 0.3,stagger:0.3
			})
  

  

			ScrollTrigger.create({
				trigger: "#product-writeup0",
				start: "top bottom",
				end: "bottom top",
				animation: animation,
				scrub: true,
				
			})
			ScrollTrigger.create({
				trigger: "#product-writeup0",
				start: "bottom center",
				// end: "bottom top",
				animation: animation1,
				scrub: true,
				
			})
			ScrollTrigger.create({
				trigger: "#product-writeup1",
				start: "bottom center",
				// end: "bottom top",
				animation: animation2,
				scrub: true,
        
				
			})
		 

  }
  
    }, [loaded]);




 

  
  return (
    <Bounded
    // data-slice-type={slice.slice_type}
    // data-slice-variation={slice.variation}
   className=" text-[#c5d4d6]   pb-[10vw] bg-[#151c1d] overflow-hidden" 
    >
<div className="contentz w-full flex flex-col items-center pt-[10vw]  pb-[6vw] space-y-[8vw] portrait:space-y-[0vw]"> 

<div ref={headerref} className="">
{slice.primary.header?.split('').map((letter,index)=>(

  <span key={index} className="relative">
  
<InView as="div" onChange={(inView, entry) => opacityAndLetterAnimation(splitheaderrefs.current[index],0.1,inView)} className="absolute"/>
 
  <span key={index} ref={splitheaderrefs.current[index] = React.createRef<HTMLSpanElement>()} 
   className="heading opacity-0 text-[3vw] portrait:sm:text-[7vw] portrait:text-[10vw]  portrait:mb-10 ">
    {letter}
   </span>
</span>
))}
</div>



<div className="hairsection w-full ">


  
          
         

      

      <div className="space-y-16 flex flex-col items-center w-full  ">
        <div   className="productsContainer w-full grid  portrait:grid-cols-1 landscape:grid-cols-1  gap-5 portrait:gap-[23vw] portrait:sm:gap-[20vw]   gap-y-20"> 
        
          <div
          
            // onClick={()=>{microActionOnProductClick(productrefs.current[index])}}
            className="productContainer   transition duration-200 ease-in
              w-full flex flex-col items-center text-start "
          >
            <div className="landscape:flex justify-between w-[100%] landscape:space-x-1 portrait:space-y-[60vw]">

<div className="products-photo ease-linear transition-all duration-[9s] w-[50%] h-auto portrait:w-full  ">

<div className="image-cont relative w-[100%] pointer-events-none  flex flex-col  ">

      {slice.primary.product_container.map((product:any,index:number) => (
              <div
              key={product._id}
              id={`product-image${index}`}
              ref={productrefs.current[index] = React.createRef<HTMLDivElement>()} className="product-image-div absolute opacity-0">
<div
ref={imagerefs.current[index] = React.createRef<HTMLDivElement>()}
className="productImage cursor-pointer  mb-3 portrait:w-full ">
                <PrismicNextImage  field={product.product_image} className="rounded-md w-[80%]"/>
              </div>

            </div>
        ))}
</div>

</div>
      


<div className="writeup-cont  w-[50%] portrait:w-full flex flex-col    space-y-[18vw]">
{slice.primary.product_container.map((product:any,index:number) => (

          <div
          key={product._id}
          id={`product-writeup${index}`} className="writup_div landscape:w-[100%] ">
   <div key={index} className="" >
              
              <InView as="div" key={index} 
onChange={(inView, entry) => opacityAnimation(headerrefs.current[index],0.1,inView)}
   className="productTitle  w-full portrait:w-full  cursor-pointer text-[#2a9457] text-[2.6vw] portrait:text-[6vw] text-nowrap portrait:text-wrap mb-1 portrait:mb-3"
  > <span className="opacity-0 border-2 border-r-gray-700 border-b-gray-700 p-1"
ref={headerrefs.current[index] = React.createRef<HTMLDivElement>()}
  
  > {product.title}</span> </InView>     
              
              </div> 


<InView as="div" onChange={(inView, entry) => opacityAnimation(writeuprefs.current[index],0.4,inView)} className="w-full">

 <div 
            ref={writeuprefs.current[index] = React.createRef<HTMLDivElement>()}
            
            className="productDescription opacity-0 w-[100%] portrait:w-full  cursor-pointer text-[2vw]   portrait:text-[4vw] portrait:sm:text-[3vw]">{product.description}</div>


</InView>


          </div>

))}

<div className="writeup-cont  "></div>
</div>

    




           

            </div>
          </div>


      </div>

      <div className="btn-div   w-full flex flex-col  items-center"> 

      <InView as="div" onChange={(inView, entry) => opacityAnimation(buttonwritup,0.4,inView)}>
      <div className="btn_writeup_lead opacity-0 text-center mb-8 portrait:mb-14 mt-4 text-[2vw]  portrait:text-[6vw] portrait:sm:text-[3vw]">{slice.primary.button_intro_text}</div>


</InView>

<InView as="div" onChange={(inView, entry) => opacityAnimation(button,0.4,inView)}>
<PrismicNextLink  field={slice.primary.all_products_button}> <div ref={button} className="button opacity-0 bg-[#a99c60] text-[#1d3840] cursor-pointer portrait:px-[22vw] px-[8vw] py-3 rounded-[0.280rem] text-[2vw] portrait:text-[8vw] hover:bg-[#252d2e] duration-[0.2s]  ease-in-out "> All Products</div> </PrismicNextLink> 

</InView>

  
   </div>
      </div>
      </div>
      </div>
      </Bounded>
  );
};

export default Homeproducts;
