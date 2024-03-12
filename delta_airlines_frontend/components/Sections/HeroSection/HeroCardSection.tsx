'use client'

import { useHeroContext } from '@/components/Context/HeroUIContext';
import React, { useContext } from 'react'

function HeroCardSection() {
const { selectedTab } = useHeroContext();

  return (
    <div className=" bg-deltaBlue flex w-full items-center justify-center h-[270px] relative"> 

        <div className=" text-toothWhite absolute bottom-0 w-3/4 h-2/3 bg-testGreen">
                    
        {/* <BookFullPageCard/> */}
        {selectedTab === 'BOOK' && <div>Booking Form</div>}
        {selectedTab === 'CHECK-IN' && <div>Check-In Form</div>}
        {selectedTab === 'MY TRIPS' && <div>My Trips Info</div>}
        {selectedTab === 'FLIGHT STATUS' && <div>Flight Status</div>}

        
    
        </div>
    </div>
  
  )
}

export default HeroCardSection