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
      console.log(screenWidth);
      if(screenWidth < 817){setPageBreakIcon(true)}
      else{setPageBreakIcon(false)}
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
        <div className={`flex flex-col items-center justify-between w-full`}>
              <div className={` text-xs  grid ${pageBreakIcon ? 'grid-cols-3' : 'grid-cols-4'}  h-1/2 w-3/4 bg-testOrange text-nowrap `}>
                {/* GRID OF BOOK CHECKIN MY TRIPS FLIGHT_STATUS */}
                  <div className="">BOOK</div>
                  <div className="">CHECK-IN</div>
                  <div>MY TRIPS</div>
                  <div className={` ${pageBreakIcon ? 'hidden': 'inline-block'}`}>FLIGHT STATUS</div>

              </div>
              <div className=" h-1/2 w-full bg-tealBlue">Travel Card Here</div>
        </div>
  )
}

export default BookFullPageCard