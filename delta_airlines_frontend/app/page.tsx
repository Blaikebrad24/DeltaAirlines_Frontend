import BorderBottomRed from "@/components/Buttons/borderBottomRed";
import UserToolBarGroup from "@/components/Header/UserToolBarGroup";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons/faArrowsLeftRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import red from "@mui/material/colors/red";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


config.autoAddCss = false; /* eslint-disable import/first */
export default function Home() {

const toolBarFirstFour: string[] = ['BOOK','CHECK-IN', 'MY TRIPS', 'FLIGHT STATUS'];


  return (
    <main className=" flex flex-col h-screen min-w-full bg-toothWhite overflow-y-auto">

      {/* EXTENDED TOOL BAR SECTION */}
    
      <div className=" bg-deltaBlue flex w-full items-center justify-center h-[270px]"> 
          
          <div className="flex flex-col items-center justify-center w-2/3 h-full text-toothWhite ">
                <div className=" h-1/3 w-full "></div>
                <div className=" w-2/3 h-2/3 flex flex-col  pt-5 relative">
                  
                    <UserToolBarGroup strings={toolBarFirstFour} textSize={'font-bold text-xs '}/>
                    {/* Destination Short Card */}
                    <div className=" flex w-full items-center justify-evenly mt-3 ">
                      {/* Departure City */}
                      <div className=" flex flex-col items-center justify-center mt-3">
                            <p className="text-4xl md:text-6xl font-extralight ml-2">DFW</p>
                            <p className=" text-xs mt-2 text-nowrap">Dallas-Fort Worth, TX</p>
                      </div>
                      {/* Double-Side Arrow ICON */}
                      <CompareArrowsIcon sx={{color: red[500], fontSize: 40}}/>

                      {/* Destination City */}
                      <div className=" flex flex-col items-center justify-center mt-3">
                            <p className="text-4xl md:text-6xl font-extralight ml-2">To</p>
                            <p className=" text-xs mt-2 text-nowrap">Your Destination</p>
                      </div>
                      {/* Half Circle Page down button */}
                      <div className="absolute bottom-0 ">
                            
                            
                      </div>
                    </div>
                </div>
          </div>
          
      </div>


      {/* CUSTOMER EXPERIENCE  */}
      <div className=" bg-testPink w-full "> CUSTOMER EXPERIENCE</div>
      {/* SEARCH SECTION */}
      <div className=" bg-tealBlue w-full "> HERO SECTION</div>
    </main>
  );
}
 