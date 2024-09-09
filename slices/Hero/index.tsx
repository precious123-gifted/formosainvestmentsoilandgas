"use client"

import Bounded from "@/app/components/HeroBounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/bg_image.jpg"
import { MutableRefObject, RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import displayElementWhenPageLoads from "@/app/animation-provider/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { InView } from "react-intersection-observer";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)



/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */









const Hero = ({ slice }: HeroProps): JSX.Element => {

  const header = useRef(null)
  const button = useRef<HTMLButtonElement | null>(null);
  const header2 = useRef(null)
  const backgroundImageRef = useRef(null)

  
  



  function matchMediaOrientation(orientation:string) {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(orientation);
      return mediaQuery.matches;
    }
  }
  
  
  const isPortrait = matchMediaOrientation('(orientation: portrait)');
  const isLandscape = matchMediaOrientation('(orientation: landscape)');
  
    const loadingAnimation = useEffect(()=>{
  
      if(isLandscape)  displayElementWhenPageLoads(button,0.5,750)
    displayElementWhenPageLoads(header,0.5,460)
      displayElementWhenPageLoads(backgroundImageRef,0.5,460)
    },[])



    const headerRef = useRef(null)
    const imageRef = useRef(null)

    const [loaded,setLoaded] = useState(false)


    useEffect(()=>{
    
    setLoaded(true)
    
    
    
    },[])
  
    
    

    const scrollTriggerRef = useRef(null);
const path = usePathname()
useGSAP(() => {
  if (loaded) {
    let ctx = gsap.context(() => {

      const timeline = gsap.timeline({ yoyo: true });

      gsap.set('.header1', { opacity: 1 });
      gsap.set('.button', { opacity: 1 });

      timeline
        .to('.header1', { opacity: 0, duration: 2, ease: "power3.out" })
        .to('.button', { opacity: 0, duration: 2, ease: "power3.out", onComplete: disableButtonClick,  onReverseComplete: disableButtonClick}) // Call for disabling on opacity out
        .to('.header2', { opacity: 1, duration: 4, ease: "power3.in" })
        .to(['.image','.header2'], { opacity: 0, duration: 9, ease: "power3.in" })
       
      if (isLandscape) {
        const scrollTrigger = ScrollTrigger.create({
          trigger: '.hero',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          snap: 0,
          pin: true,
          pinReparent: false,
          pinType: 'fixed',
          animation: timeline,
        });
      }

      if (isPortrait) {
        const scrollTrigger = ScrollTrigger.create({
          trigger: '.hero',
          start: 'top 1px',
          end: 'bottom bottom',
          scrub: true,
          snap: 0,
          pin: true,
          pinReparent: false,
          pinType: 'fixed',
          animation: timeline,
        });
      }

      function disableButtonClick() {
        button.current!.style.pointerEvents = button.current!.style.opacity === '0'? 'none' : 'auto'; // Disable click events on opacity out
      }
    });
  }
}, [loaded]);




const whyusAnimation = () => {

      const whyusTimeline = gsap.timeline({ yoyo: true });
    
      whyusTimeline
      .to('.whyus', { opacity: 1,  ease: "power3.in" }); 
 

      ScrollTrigger.create({
        trigger: '.whyus-content',
        scrub: true,
        animation: whyusTimeline,
         
      });

      
     
};



useGSAP(() => {
  if (loaded === true) {
    let ctx = gsap.context(() => {


whyusAnimation()
    });
  }
}, [loaded]);


const writeup1Animation = () => {

      const writeupTimeline = gsap.timeline({ yoyo: true });
      gsap.set('.whyus-writeup', { opacity: 0 });
    
   
      writeupTimeline
      .to('.whyus-writeup', { opacity: 1, duration:6,  ease: "power3.in" }); 


      ScrollTrigger.create({
        trigger: '.whyus',
        scrub: true,
        animation: writeupTimeline,
         

      });
   
     
};
 
const writeup2Animation = () => {

  gsap.set('.whyus-writeup2', { opacity: 0 });

  const writeupTimeline = gsap.timeline({ yoyo: true });

  writeupTimeline
    .to('.whyus-writeup2', { opacity: 1, ease: "power3.in" })

  ScrollTrigger.create({
    trigger: '.whyus-writeup',
    start: 'bottom bottom',
    end: 'bottom top',
    scrub: true,
    animation: writeupTimeline,
    
  });
};


 




const writeup = useRef(null)
const writeup2 = useRef(null)
const content = useRef(null)

 


type SplitHeaderRef = MutableRefObject<HTMLSpanElement | null>;

const splitheaderrefs = useRef<SplitHeaderRef[]>([]);

 



  return (
  <>
    <Bounded 
   className="hero  h-[580vh] portrait:h-[300vh]  portrait:text-[#E7FEFF]  overflow-hidden" >
 

   

  <div ref={headerRef} className=" w-full  flex pt-8  portrait:flex-col  h-[40vw] portrait:h-[100vh]  object-fit">
  <div ref={backgroundImageRef} className="bg-cover opacity-0 bg-no-repeat  overflow-hidden">
  <Image ref={imageRef}
    src={backgroundImage}
    alt="Background"
    className="hero-image object-cover border-2 border-[#8a9a9b] h-[32vw] portrait:h-[35vh] rounded-lg  "
  />
 
</div>
<div className="headersection absolute  portrait:space-y-[30vw]   pt-14 portrait:pt-[10vw] portrait:justify-between flex flex-col items-center   w-full">

<div className="header-div relative h-[10vw] portrait:h-[36vw] w-[90%] flex flex-col justify-between items-center"> 
<div ref={header} className="header1 bg-[#080e0f] px-3 opacity-0 text-[4.5vw]  portrait:text-[6vw] text-center leading-tight  tracking-free  text-[#FBFFFE]">{slice.primary.header2}</div>

<div ref={header2} className="header2 bg-[#080e0f] px-3 absolute opacity-0 text-[5vw]  portrait:text-[7vw] text-center leading-tight  tracking-free  text-[#FBFFFE]">{slice.primary.header1}</div>
</div>


  <button ref={button} className="button opacity-0 btn-div  h-[20vw]  w-full flex justify-center items-center"> 
 <Link href={"/products"}> <div className=" landscape:bg-[#080e0f] landscape:text-[#e8f3f0] portrait:text-[#080e0f] portrait:bg-[#e8f3f0]  cursor-pointer px-8 py-3 rounded-[0.280rem] text-[2vw] portrait:text-[8vw] hover:bg-[#d1f1f3] hover:text-[#080e0f] duration-[0.8s]  ease-in-out ">Check Our Products</div> </Link> 
  
   </button>


</div>


  </div>


  <div ref={content} className="whyus-content w-full text-[#FBFFFE] flex   portrait:pt-[30vw]   portrait:flex-col rounded-xl relative z-10">



<div className="headersection space-y-6 landscape:pt-14  portrait:pt-6 portrait:text-center  landscape:text-start h-full  flex flex-col items-center w-full">

<InView as="div" >

<div className="whyus opacity-0 text-[3vw] portrait:text-[6vw] mb-[18vw] portrait:sm:mb-8">
Why You Should Work With US
</div>
</InView>


<InView as="div" onChange={(inView, entry) => writeup1Animation()}>

<div ref={ writeup} className="whyus-writeup opacity-0 mb-[18vw] portrait:sm:mb-8 leading-[5vw] tracking-[0.3vw]  text-[3vw] portrait:text-[6vw]">At Formosa, we pride ourselves on a proven track record of excellence and reliability in delivering top-notch energy and marine services across Africa, Asia, Europe, and America. Our team is dedicated to helping clients achieve their business and financial goals through innovative petrochemical retainer services, strategic marketing, market research, industrial analysis, and commodity brokerage.
</div>
</InView>


<InView as="div" onChange={(inView, entry) => writeup2Animation()}>

<div className="whyus-writeup2 opacity-0 leading-[5vw] tracking-[0.3vw]  text-[3vw] portrait:text-[6vw]">Formosa stands out for its commitment to quality and client satisfaction. We have successfully partnered with numerous organizations worldwide, providing the expertise and strategic insights necessary for.</div>

</InView>


<div className="mb-12 opacity-0 h-[200vw] leading-[5vw] tracking-[0.3vw]  text-[3vw] portrait:text-[6vw]"></div>
<div className="mb-12 opacity-0 leading-[5vw] tracking-[0.3vw]  text-[3vw] portrait:text-[6vw]"></div>
<div className="fade-trigger  opacity-0 leading-[5vw] tracking-[0.3vw]  text-[3vw] portrait:text-[6vw]"></div>


 
</div>



  </div>
  </Bounded>
  </>
  );
};

export default Hero;