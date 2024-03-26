'use client'

import { useHeroContext } from '@/components/Context/HeroUIContext';
import BookLrgCard from '@/components/ExtendedToolBar/BookTab/LrgScreen/BookLrgCard';
import CheckInLrgScreen from '@/components/ExtendedToolBar/BookTab/LrgScreen/CheckInLrgScreen';
import FlightStatus_lrgCard from '@/components/ExtendedToolBar/BookTab/LrgScreen/FlightStatus_lrgCard';
import MyTrips_lrgCard from '@/components/ExtendedToolBar/BookTab/LrgScreen/MyTrips_lrgCard';
import React, { useContext, useEffect, useState } from 'react'



function HeroCardSection() {
const { selectedTab } = useHeroContext();
const [isWindowLoad, setIsWindowLoad] = useState(false);

useEffect(() =>{
  const handleLoad = () => {
    setIsWindowLoad(true);
  }
  window.addEventListener('load', handleLoad);
  return () => {
    window.removeEventListener('load', handleLoad);
  }
}, []);

  return (
    <div className=" bg-deltaBlue flex w-full items-center justify-center h-[270px] relative"> 

        <div className=" text-toothWhite absolute bottom-0 w-3/4 h-2/3 ">
                    
        {/* <BookFullPageCard/> */}
        {selectedTab === 'BOOK' && <BookLrgCard/>}
        {selectedTab === 'CHECK-IN' && <CheckInLrgScreen/>}
        {selectedTab === 'MY TRIPS' && <MyTrips_lrgCard/>}
        {selectedTab === 'FLIGHT STATUS' && <FlightStatus_lrgCard/>}

        
    
        </div>
    </div>
  
  )
}

export default HeroCardSection



