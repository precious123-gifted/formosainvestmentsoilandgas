"use client"

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import React, { MouseEvent, MutableRefObject, TouchEvent, useEffect } from 'react';
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
import DropDownStyle from "./dropdpwnmenu.module.css"


export default function HeaderContent({settings}: any) {

  interface forString{

    label: any,
    link: any
    key:any
  }

  const {cartLength,setCartLength} = useStateContext() 



  const menudiv = useRef(null)

  const desktoplinks = useRef(null)
  const exiticon = useRef(null)
  const menuicon = useRef(null)
  const logo = useRef(null)
  const carticon = useRef(null)
  const desktopcarticon = useRef(null)
  const itemquantitydiv = useRef(null)
  type ProductRef = MutableRefObject<HTMLDivElement | null>;

  const productrefs = useRef<ProductRef[]>([]);

  const pathname = usePathname();

const loadingAnimation = useEffect(()=>{

  displayElementWhenPageLoads(logo,0.5,150)
  displayElementWhenPageLoads(desktoplinks,0.5,300)
  displayElementWhenPageLoads(carticon,0.5,500)
  displayElementWhenPageLoads(desktopcarticon,0.5,400)
  displayElementWhenPageLoads(itemquantitydiv,0.5,420)
  displayElementWhenPageLoads(menuicon,0.5,650)
})













  const{menu,setMenu} = useStateContext()


const menuAnimation = () =>{
  

gsap.to(menudiv.current,{top:menu?"-30vw":"13vw",opacity:menu?0:1})


}

const menuBackAnimation = () =>{
  
 if(menu == false) setMenu(!menu)
  
  }


useEffect(()=>{
  menuAnimation()
  console.log(pathname)
  
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




  return (
    <div className="w-[98%] portrait:w-[96%] portrait:flex-col portrait:flex">
       <div className="content w-full  flex flex-row justify-between items-center   pt-2">
<div ref={logo} className="logo opacity-0 cursor-pointer object-contain  w-[15vw] portrait:w-[32vw]  pb-1  ">
  <Link
  onClick={menuBackAnimation}
  href={"/"}> <PrismicNextImage  field={settings.data.logo} className="rounded-md" /></Link>
      </div>


<div className="cartNmenuDiv landscape:hidden flex items-center  relative space-x-8 portrait:sm:space-x-14">


<div  className="icon ">

<div ref={menuicon} className=" menuicon opacity-0  landscape:hidden cursor-pointer object-contain  ">
<MenuSvg className=""/>

</div>

</div> 

</div>







<div ref={desktoplinks} className="links opacity-0 px-1 portrait:hidden w-auto space-x-[4vw] flex items-center  bg-[#FBFFFE] rounded-3xl ">
<ul  className=" flex justify-between items-center w-[80%] text-[1.5vw] space-x-[6vw]">

<div  className={DropDownStyle.hoverstate}>
<div ref={serviceTXT} className="services-text  px-3 py-2 rounded hover:bg-[#e0f3e6] cursor-pointer transition duration-300 ease-in-out text-[#0D2323] rounded-l-3xl shadow-lg">
    Services
  </div>
  <div className={DropDownStyle.dropdown}></div>
  <div className={cn("services_dropdown  bg-[#FBFFFE] absolute z-50 mt-10 py-4 px-4 space-y-2 flex flex-col rounded-md  shadow-lg"
  )} >
   <Link href={"/#services"}> <div className="service hover:bg-[#e0f3e6] p-2 rounded-md">Offshore Intake-Offtake Facilities</div></Link>
   <Link href={"/#services"}> <div className="service hover:bg-[#e0f3e6] p-2 rounded-md">Petroleum and Gas Marketing</div></Link>
   <Link href={"/#services"}>  <div className="service hover:bg-[#e0f3e6] p-2 rounded-md">Petroleum and Gas Storage</div></Link>
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
<Link href={link}

 className={cn(
  'px-3 py-2 h-full rounded hover:bg-[#e0f3e6] transition duration-300 ease-in-out text-[#0D2323] ',
   logic && 'bg-[#162226] text-[#e8f7ed] hover:text-[#e0f3e6]  shadow-lg ' ,link === lastLink && 'rounded-r-3xl'
)}
 >{label}</Link>

</div>

)})}

</ul>


</div>



  </div>



<div ref={menudiv} className="menu opacity-0 landscape:hidden portrait:space-x-6 w-full left-0 h-[24vw] bg-[#162226] text-[#e9e2e0]   absolute z-50 top-[-30vw] flex justify-center items-center ">


<Link href={"/#services"}>
<div
onClick={menuBackAnimation}

ref={serviceTXT} className="services-text px-3 py-2  rounded bg-[#FBFFFE] hover:bg-[#e0f3e6] cursor-pointer transition duration-300 ease-in-out text-[#0D2323]  shadow-lg">
    Services
  </div>
  </Link>
 

{Object.values(navigation).map(({link,label,key}:forString)=>
{
  const isActive = pathname  === key 
  const isActiveChild = key !== '/' && pathname.includes(`${key}`)
const logic = !isActiveChild? isActive : isActiveChild
const lastLink = '/about'
  return(
      
<div  key={key}
 >
<Link href={link}
onClick={menuBackAnimation}

 className={cn(
  'px-3 py-2 h-full rounded hover:bg-[#e0f3e6] bg-[#FBFFFE] transition duration-300 ease-in-out text-[#0D2323] ',
   logic && 'bg-[#162226] text-[#e8f7ed] hover:text-[#e0f3e6]  shadow-lg ' 
)}
 >{label}</Link>

</div>

)})}

</div>


    </div>
  )
}
