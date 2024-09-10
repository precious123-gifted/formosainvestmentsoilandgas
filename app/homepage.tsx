"use client"

import React, { useEffect, useState } from 'react'
import SmoothScroller from '../smoothscroll'
import { useStateContext } from './StateManager';


export default function Homepage({Children}:any) {


  const { oilDataState } = useStateContext();
 


  return (

    <>
   
{   oilDataState === 201 &&     <SmoothScroller> 
        
    {Children}
       
    </SmoothScroller>
     
           
}
    
    </>
    
  )
}
