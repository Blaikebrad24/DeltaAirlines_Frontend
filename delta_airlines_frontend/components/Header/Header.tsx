'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import HeaderLogoImg from '../Changers/headerLogoImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import UserToolBarGroup from '../UserToolBarGroup';
import SkyMilesToolBarGrp from '../SkyMilesToolBarGrp';


function Header() {
  const [pageBreakIcon, setPageBreakIcon] = useState(false);
  const [isWindowLoad, setIsWindowLoad] = useState(false);
  const toolBarFirstFour: string[] = ['BOOK','CHECK-IN', 'MY TRIPS', 'FLIGHT STATUS'];
  const toolBarSecondGroup: string[] = ['Travel Info', 'SkyMiles', 'Need Help?'];
  useEffect(() => {
    const handleResize = () =>{
      const screenWidth = window.innerWidth;
      if(screenWidth < 991){setPageBreakIcon(true)}
      else{setPageBreakIcon(false)}
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

  }, []);

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
    <header className='fixed w-full z-20 top-0 flex p-1  items-center justify-between h-20  bg-deltaBlue '>
        <div className={`  ${pageBreakIcon ? 'flex': ''}`}>left</div>
        <div className=''>
          <div className={`flex ${pageBreakIcon ? 'hidden' : '  rounded-md pb-2'} `}>
             <div className='flex-none '><HeaderLogoImg/></div>
             <UserToolBarGroup strings={toolBarFirstFour} textSize={'font-semibold text-sm'}/>
             <SkyMilesToolBarGrp strings={toolBarSecondGroup} textSize={' text-xs '}/>
          </div>
        </div>
        <div className={`border-2 border-deltaRed flex justify-evenly`}>
            <div className=''>SIGN UP | LOGIN </div>
            <div>Notification</div>
        </div>

    </header>
  )
}

export default Header