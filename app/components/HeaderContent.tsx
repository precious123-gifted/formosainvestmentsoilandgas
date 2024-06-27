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








  useEffect(() => {
    const existingCartedProductsData = localStorage.getItem("cartedProducts");

    if (!existingCartedProductsData) {
      localStorage.setItem("cartedProducts", JSON.stringify([]));

    } else {
      setCartLength(JSON.parse(existingCartedProductsData).length);
    }
  }, []);




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




  return (
    <div className="w-[98%] portrait:flex-col portrait:flex">
       <div className="content w-full  flex flex-row justify-between items-center relative  pt-2">
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







<div ref={desktoplinks} className="links opacity-0  portrait:hidden w-auto space-x-[4vw] flex items-center  bg-[#FBFFFE] rounded-3xl ">
<ul  className=" flex justify-between items-center w-[80%] text-[1.5vw] space-x-[6vw]">
<div  className={cn(
  'px-3 py-2 rounded hover:bg-[#e0f3e6] cursor-pointer transition duration-300 ease-in-out text-[#0D2323] rounded-l-3xl',
   ' shadow-lg '
)}>
Services

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
   logic && 'bg-[#7fac8c] text-[#e8f7ed] hover:text-[#e0f3e6]  shadow-lg ' ,link === lastLink && 'rounded-r-3xl'
)}
 >{label}</Link>

</div>

)})}

</ul>


</div>



  </div>



<div ref={menudiv} className="menu opacity-0 landscape:hidden w-full left-0 h-[24vw] bg-[#162226] text-[#e9e2e0]   absolute z-50 top-[-30vw] flex justify-center items-center ">

<ul  className=" flex justify-between w-[80%] text-[6vw] space-x-[6vw]">

{settings.data.navigation.map(({link,label,key}:forString)=>
  
{
  const isActive = pathname  === key 
  const isActiveChild = key !== '/' && pathname.includes(key)
const logic = !isActiveChild? isActive : isActiveChild

  return(
<li
 
onClick={menuBackAnimation}
  key={key}>
<PrismicNextLink 
 className={cn(
  'px-3 py-2 rounded  transition duration-300 ease-in-out text-[#d4e4d9] ',
   logic && 'bg-[#7fac8c] text-[#d8e7dd] '
)}

 field={link}>{label}</PrismicNextLink>

</li>

)})}

</ul>

</div>


    </div>
  )
}
