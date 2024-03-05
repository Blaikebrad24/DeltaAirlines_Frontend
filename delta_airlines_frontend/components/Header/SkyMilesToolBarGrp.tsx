'use client'

import {  useState } from 'react';

interface ButtonProps {
    label: string;
    id: number;
    text_size: string;
    
  }
const Button = ({label, id,  text_size } : ButtonProps) => {

    
    return (
        <button className={` `} >
         <div className={` p-1 border-borderGray text-toothWhite  ${text_size}`}>{label}</div> 
        </button>
      );
}

interface BtnGroupLabels {
  strings: string[];
  textSize: string;
}

function SkyMilesToolBarGrp( { strings, textSize } : BtnGroupLabels) {


// let toolBarArray: string[] = ['BOOK','CHECK-IN', 'MY TRIPS', 
//     'FLIGHT STATUS'];


  return (
    <div className='  text-nowrap pt-1 space-x-2'>
        {strings.map((tool, index)=>(
             
            <Button label={tool} id={index} key={index} text_size={textSize} />
        ))}
    </div>
  )
}

export default SkyMilesToolBarGrp;