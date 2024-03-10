'use client'

import BorderBottomRed from "@/components/Buttons/borderBottomRed";
import UserToolBarGroup from "@/components/Header/UserToolBarGroup";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons/faArrowsLeftRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import red from "@mui/material/colors/red";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function BookFullPageCard() {

const [pageBreakIcon, setPageBreakIcon] = useState(false);

const toolBarFirstFour: string[] = ['BOOK','CHECK-IN', 'MY TRIPS', 'FLIGHT STATUS'];

useEffect(() => {

    const handleResize = () =>{
      
      const screenWidth = window.innerWidth;
      // console.log(screenWidth);
      if(screenWidth < 986){setPageBreakIcon(true)}
      else{setPageBreakIcon(false)}
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
        <div className={` ${pageBreakIcon ? 'w-full h-2/3 flex flex-col  pt-5 relative flex-shrink-0' : 'hidden'}`}>
        
        <UserToolBarGroup strings={toolBarFirstFour} textSize={'font-bold text-xs '}/>
        {/* Destination Short Card */}

        <div className=" relative flex w-full items-center justify-center  mt-3  h-full">

            
            {/* Departure City */}
            <div className=" flex flex-col mt-3">
                <p className="text-6xl font-extralight mr-10">DFW</p>
                <p className=" text-xs mt-2 text-nowrap">Dallas-Fort Worth, TX</p>
            </div>
            {/* Double-Side Arrow ICON */}

            <CompareArrowsIcon sx={{color: red[500], fontSize: 50}}/>
            

            
            



            {/* Destination City */}
            <div className=" flex flex-col  mt-3">
                <p className="text-6xl font-extralight ml-10">To</p>
                <p className=" text-xs mt-2 text-nowrap ml-5">Your Destination</p>
            </div>
            {/* Half Circle Page down button */}
            <div className="absolute bottom-0 ">
                
                
            </div>
        </div>
    </div>
  )
}

export default BookFullPageCard