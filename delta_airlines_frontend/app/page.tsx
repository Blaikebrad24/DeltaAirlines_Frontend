import BorderBottomRed from "@/components/Buttons/borderBottomRed";
import UserToolBarGroup from "@/components/Header/UserToolBarGroup";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons/faArrowsLeftRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import HeroCardSection from "@/components/Sections/HeroSection/HeroCardSection";



config.autoAddCss = false; /* eslint-disable import/first */
export default function Home() {



  return (
    <main className=" flex flex-col h-screen min-w-full bg-toothWhite overflow-y-auto">

      {/* EXTENDED TOOL BAR SECTION */}
    
      <div className=" bg-deltaBlue flex w-full items-center justify-center h-[270px] relative"> 
       
          <HeroCardSection/>

          
      </div>


      {/* CUSTOMER EXPERIENCE  */}
      <div className=" bg-testPink w-full "> CUSTOMER EXPERIENCE</div>
      {/* SEARCH SECTION */}
      <div className=" bg-tealBlue w-full"> HERO SECTION</div>
    </main>
  );
}
 