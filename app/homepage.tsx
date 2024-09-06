"use client"

import React, { useEffect, useState } from 'react'
import SmoothScroller from '../smoothscroll'


export default function Homepage({Children}:any) {

  useEffect(() => {
    const handleRefresh = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('load', handleRefresh);

    return () => {
      window.removeEventListener('load', handleRefresh);
    };
  }, []);

 


  return (

    <>
   
       <SmoothScroller> 
        
    {Children}
       
    </SmoothScroller>
     
           

    
    </>
    
  )
}
