'use client'

import BorderBottomRed from "@/components/Buttons/borderBottomRed";
import UserToolBarGroup from "@/components/Header/UserToolBarGroup";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons/faArrowsLeftRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useEffect, useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import HeroCardSection from "@/components/Sections/HeroSection/HeroCardSection";
import Header from "@/components/Header/Header";
import { HeroUIContext } from "@/components/Context/HeroUIContext";




export default function Home() {



  return (
    <main className=" flex flex-col h-screen min-w-full bg-toothWhite overflow-y-auto">

      {/* EXTENDED TOOL BAR SECTION */}
      <HeroUIContext>
        <Header/>
        <HeroCardSection/>
      </HeroUIContext>

      {/* CUSTOMER EXPERIENCE  */}
      <div className=" bg-testPink w-full "> CUSTOMER EXPERIENCE</div>
      {/* SEARCH SECTION */}
      <div className=" bg-tealBlue w-full"> HERO SECTION</div>
    </main>
  );
}
 