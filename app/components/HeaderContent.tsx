"use client"

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import React, { MouseEvent, MutableRefObject, TouchEvent, useEffect, useLayoutEffect } from 'react';
import Image from "next/image"
import Link from "next/link"
import cartIcon from "../../public/carticon.png";
import menuIcon from "../../../public/menuicon.png";
import exitIcon from "../../../public/exiticon.png"
import { useRef, useState } from "react";
import gsap from "gsap";
import { useStateContext } from "../StateManager";
import MenuSvg from "@/app/components/menuSvg"
import displayElementWhenPageLoads from "../animation-provider/animation";
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import TransitionLink from "./TransitionLink";




export default function HeaderContent({settings}: any) {
  interface forString{
    label: any,
    link: any
    key:any
  }


  const menudiv = useRef(null)
  const desktoplinks = useRef(null)
  const exiticon = useRef(null)
  const menuicon = useRef(null)
  const logo = useRef(null)
  const carticon = useRef(null)
  const desktopcarticon = useRef(null)
  const itemquantitydiv = useRef(null)
  const oilPriceContainer = useRef(null)
  const oilPriceContainerPortrait = useRef(null)


  const pathname = usePathname();


  const [oilData, setOilData] = useState<OilProduct[]>([]);
  const {oilDataState, setOilDataState} = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/oilprice", { cache: 'no-store' });
      const data: OilProduct[] = await response.json();
      setOilData(data);
  
      // Set oilDataState and store it in localStorage
      setOilDataState(data ? 201 : 500);
      localStorage.setItem('oilDataState', JSON.stringify(data ? 201 : 500));

    };
  
    fetchData();
  
    const intervalId = setInterval(fetchData, 20 * 60 * 1000);
      
      // return () => localStorage.removeItem('oilDataState'); ;
  }, []);
  
 


  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const serviceDropdownItems = [
    { label: "Sales", link: "/sales" },
    { label: "Supply", link: "/supply" },
    { label: "Marketing", link: "/marketing" },
    { label: "Bunkering", link: "/bunkering" },
    { label: "Offshore Intake-Offtake Facilities", link: "/offshore" },
    { label: "Petroleum & Gas Storage", link: "/storage" },
  ];




  function matchMediaOrientation(orientation:string) {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(orientation);
      return mediaQuery.matches;
    }
  }

  const isPortrait = matchMediaOrientation('(orientation: portrait)');
  const isLandscape = matchMediaOrientation('(orientation: landscape)');


  const loadingAnimation = useEffect(()=>{

    
    
    if(oilDataState === 201){
       setTimeout(() => {
  displayElementWhenPageLoads(logo,0.5,110) 
displayElementWhenPageLoads(oilPriceContainer,0.5,130)
        displayElementWhenPageLoads(desktoplinks,0.5,150)
   displayElementWhenPageLoads(menuicon,0.5,650)  
    
    if(isPortrait){
  displayElementWhenPageLoads(oilPriceContainerPortrait,0.5,150)
 
}
},5100);
 }


 
  
  })

  const{menu,setMenu} = useStateContext()

  const menuAnimation = () =>{
    gsap.to(menudiv.current,{top:menu?"-30vw":"13vw",opacity:menu?0:1})
  }

  const menuBackAnimation = () =>{
    if(menu == false) setMenu(!menu)
    if(showServicesDropdown)setShowServicesDropdown(false)
      

  }

  useEffect(()=>{
    menuAnimation()
    console.log(pathname)
  })


const serviceList = useRef(null)
const serviceDropDown = useRef<HTMLDivElement | null>(null)
const serviceListAnimation = () =>{
  gsap.to(serviceList.current,{left:showServicesDropdown && !menu?"0vw":"-150vw",pointerEvents:showServicesDropdown && !menu?"auto":"none"})
  gsap.to(serviceDropDown.current,{left:showServicesDropdown?"0vw":"-100vw",pointerEvents:showServicesDropdown?"auto":"none"})
}

useEffect(()=>{
serviceListAnimation()
})

  const navigation = {
    "products": {
      label: "Products",
      key: "product",
      link: "/products" 
    },
    "about": {
      label: "About",
      key: "about",
      link: "/about" 
    },
  };
  const serviceTXT = useRef<HTMLDivElement>(null);

  interface OilProduct {
    title: string;
    price: string;
    percentage: string;
    unit: string;
    date: string;
  }


 

  const filteredProducts = oilData.filter(
    (product: OilProduct) =>
      product.title === "Oil (Brent)" ||
      product.title === "Oil (WTI)" ||
      product.title === "Coal" ||
      product.title === "Natural Gas (Henry Hub)"
  );






  const [loaded,setLoaded] = useState(false)

  useEffect(()=>{
  
  setLoaded(true)
    
  },[])
  
 




  return (
    <div  className="parent z-50  w-[98%] portrait:w-[96%]  portrait:flex-col portrait:flex mb-4 pt-2">
      <div className="content w-full flex flex-row justify-between items-center pt-2">
        <div ref={logo}  onClick={menuBackAnimation} className="logo opacity-0 cursor-pointer object-contain w-[15vw] portrait:w-[32vw] pb-1">
          <TransitionLink href={"/"}>
            <PrismicNextImage field={settings.data.logo} className="rounded-md" />
          </TransitionLink>
        </div>

        <div ref={oilPriceContainer} className="oilprice_container portrait:hidden  mt-[-20vw] text-[#dfece3] flex text-[1vw] portrait:text-[1.2vw] space-x-10 portrait:space-x-4">
          {filteredProducts.slice(0, 4).map((product, index) => (
            <div key={index} className="product flex flex-col">
              <div className="title text-[#d4bf55]">{product.title}</div>
              <div className="price">{product.price}</div>
              <div className={cn(
                "percentage",
                product.percentage.includes("-") ? "text-[#d36956]" : "text-[#38c058]",
              )}>
                {product.percentage}
                <>%</>
              </div>
              <div className="unit text-[#bec7c1]">{product.unit}</div>
              <div className="date text-[#bec7c1]">{product.date}</div>
            </div>
          ))}
        </div>

        <div className="cartNmenuDiv landscape:hidden flex items-center relative space-x-8 portrait:sm:space-x-14">
          <div className="icon">
            <div
            
            ref={menuicon} className="menuicon opacity-0 landscape:hidden cursor-pointer object-contain">
              <MenuSvg className="" />
            </div>
          </div> 
        </div>

        <div ref={desktoplinks} className="links opacity-0 mt-[-20vw] px-1 portrait:hidden w-auto space-x-[4vw] flex items-center bg-[#FBFFFE] rounded">
          <ul className="flex justify-between items-center w-[80%] text-[1.5vw] space-x-[6vw]">
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
                <div ref={serviceTXT} className="services-text px-3 py-2 rounded hover:bg-[#e0f3e6] cursor-pointer transition duration-300 ease-in-out text-[#0D2323]  shadow-lg">
                  Services
                </div>
               <div ref={serviceDropDown} className="pt-2 absolute  left-[-100vw]  w-48">
 <div className=" rounded-md shadow-lg hover:bg-[#e0f3e6] bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {serviceDropdownItems.map((item, index) => (

                      <div key={index} 
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#fcffff] hover:text-gray-900" 
                       role="menuitem"
                      >
<TransitionLink href={item.link}>
                        {item.label}
</TransitionLink>
                      </div>
                    ))}
                  </div>
                </div>

               </div>
            </div>

            {Object.values(navigation).map(({link,label,key}:forString) => {
              const isActive = pathname === key 
              const isActiveChild = key !== '/' && pathname.includes(`${key}`)
              const logic = !isActiveChild ? isActive : isActiveChild
              return(
                <div key={key}   className={cn(
                      'px-3 py-2 h-full rounded hover:bg-[#e0f3e6] transition duration-300 ease-in-out text-[#0D2323] ',
                      logic && 'bg-[#080e0f] text-[#c3cfc7] hover:text-[#e0f3e6] shadow-lg',
                      
                    )}> <TransitionLink href={link}
                    
                  >
                    {label}
                  </TransitionLink></div>
              )
            })}
          </ul>
        </div>
      </div>

      <div ref={oilPriceContainerPortrait} className="oilprice_container opacity-0 landscape:hidden ml-[-100vw] text-[#dfece3] py-2 flex text-[2.8vw] justify-between">
        {filteredProducts.slice(0, 4).map((product, index) => (
          <div key={index} className="product flex flex-col">
            <div className="title text-[#d4bf55]">{product.title}</div>
            <div className="price">{product.price}</div>
            <div className={cn(
              "percentage",
              product.percentage.includes("-") ? "text-[#d36956]" : "text-[#38c058]",
            )}>
              {product.percentage}
              <>%</>
            </div>
            <div className="unit text-[2.2vw] text-[#bec7c1]">{product.unit}</div>
            <div className="date text-[2.2vw] text-[#bec7c1]">{product.date}</div>
          </div>
        ))}
      </div>

   

      


<div ref={menudiv} className="menu opacity-0 landscape:hidden portrait:space-x-6 w-full left-0 h-[24vw] bg-[#080e0f] text-[#e9e2e0]  absolute z-50 top-[-0vw] flex justify-center items-center ">


<div
onClick={() => setShowServicesDropdown(!showServicesDropdown)}
ref={serviceTXT} className="services-text px-3 py-2   rounded bg-[#FBFFFE] hover:bg-[#e0f3e6] cursor-pointer transition duration-300 ease-in-out text-[#0D2323]  shadow-lg">
    Services
  </div>
  
              <div ref={serviceList} className="mt-[90vw]  ml-[-100vw]  absolute z-50 left-[100vw]  w-full">
              <div className=" rounded-md shadow-lg hover:bg-[#e0f3e6]  bg-[#FBFFFE] ring-1 ring-black ring-opacity-5">
                               <div className="py-1 space-y-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                 {serviceDropdownItems.map((item, index) => (
                                  <div  key={index}  onClick={menuBackAnimation}  className="block px-4 py-2  text-gray-700 hover:bg-[#fcffff] hover:text-gray-900" 
                                     role="menuitem" >
                                   <TransitionLink
                                   
                                     href={item.link}
                                    
                                   >
                                     {item.label}
                                   </TransitionLink>
                                   </div>
                                 ))}
                               </div>
                             </div>
             
                            </div>
          

{Object.values(navigation).map(({link,label,key}:forString)=>
{
  const isActive = pathname  === key 
  const isActiveChild = key !== '/' && pathname.includes(`${key}`)
const logic = !isActiveChild? isActive : isActiveChild
const lastLink = '/about'
  return(
      
<div  key={key} 

 >
  <div onClick={menuBackAnimation}
 className={cn(
  'px-3 py-2 h-full rounded hover:bg-[#e0f3e6] bg-[#FBFFFE] transition duration-300 ease-in-out text-[#0D2323] ',
   logic && 'bg-[#162226] text-[#e8f7ed] hover:text-[#e0f3e6]  shadow-lg ' 
)}>
<TransitionLink href={link}


 >{label}</TransitionLink>
</div>
</div>

)})}

</div>

    </div>
  )
}


