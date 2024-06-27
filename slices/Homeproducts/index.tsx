"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from '../../app/components/Bounded';
import React, { MutableRefObject, useRef } from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Homeproducts`.
 */
export type HomeproductsProps = SliceComponentProps<Content.HomeproductsSlice>;

/**
 * Component for "Homeproducts" Slices.
 */
const Homeproducts = ({ slice }: HomeproductsProps): JSX.Element => {

  type ProductRef = MutableRefObject<HTMLDivElement | null>;

  const productrefs = useRef<ProductRef[]>([]);
  const headerref = useRef(null)
  const button = useRef(null)



  
  return (
    <Bounded
    // data-slice-type={slice.slice_type}
    // data-slice-variation={slice.variation}
   className="  text-[#333D3E] bg-[#EDF4F6]" 
    >
<div className="content w-full flex flex-col items-center pt-[10vw]  pb-[6vw] space-y-[8vw] portrait:space-y-[12vw]"> 

        <div ref={headerref} className="heading  text-[3vw] portrait:sm:text-[7vw] portrait:text-[10vw]  portrait:mb-10">{slice.primary.header}</div>


<div className="hairsection w-full ">


  
          
         

      

      <div className="space-y-16 flex flex-col items-center  ">
        <div   className="hairProductsContainer w-full grid  portrait:grid-cols-1 landscape:grid-cols-3  gap-5 portrait:gap-[23vw] portrait:sm:gap-[20vw]   gap-y-20"> 
        {slice.primary.product_container.map((product:any,index:number) => (
          <div
            key={product._id}
            id={product._id}
            ref={productrefs.current[index] = React.createRef<HTMLDivElement>()}
            // onClick={()=>{microActionOnProductClick(productrefs.current[index])}}
            className="hairProduct   transition duration-200 ease-in
              w-auto flex flex-col items-center text-start  space-y-1"
          >
            <div className="flex flex-col items-start">
              <div className="productImage cursor-pointer w-[18vw] mb-3 portrait:w-full object-contain">
                <PrismicNextImage  field={product.product_image} className="rounded-md"/>
              </div>

              <div className="productTitle w-[12vw] portrait:w-full  cursor-pointer text-[1.6vw] portrait:text-[6vw] text-nowrap portrait:text-wrap mb-1 portrait:mb-3"><div >{product.title}</div></div>
            <div className="productDescription w-[20vw] portrait:w-full  cursor-pointer text-[1.19vw]  portrait:text-[4vw] portrait:sm:text-[3vw]">{product.description}</div>
            </div>
          </div>
        ))}


      </div>

      <div className="btn-div   w-full flex flex-col  items-center"> 
        <div className="btn_writeup_lead text-center mb-8 portrait:mb-14 mt-4 text-[2vw]  portrait:text-[6vw] portrait:sm:text-[3vw]">{slice.primary.button_intro_text}</div>
 <PrismicNextLink  field={slice.primary.all_products_button}> <div ref={button} className="button  bg-[#423B17] text-[#EDF4F6] cursor-pointer portrait:px-[22vw] px-[8vw] py-3 rounded-[0.280rem] text-[2vw] portrait:text-[8vw] hover:bg-[#252d2e] duration-[0.2s]  ease-in-out "> All Products</div> </PrismicNextLink> 
  
   </div>
      </div>
      </div>
      </div>
      </Bounded>
  );
};

export default Homeproducts;
