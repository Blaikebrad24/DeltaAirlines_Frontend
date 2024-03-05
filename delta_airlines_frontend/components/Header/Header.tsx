'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import HeaderLogoImg from './Changers/headerLogoImg'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import UserToolBarGroup from './UserToolBarGroup';
import SkyMilesToolBarGrp from './SkyMilesToolBarGrp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const [pageBreakIcon, setPageBreakIcon] = useState(false);
  const [isWindowLoad, setIsWindowLoad] = useState(false);
  const toolBarFirstFour: string[] = ['BOOK','CHECK-IN', 'MY TRIPS', 'FLIGHT STATUS'];
  const toolBarSecondGroup: string[] = ['Travel Info', 'SkyMiles', 'Need Help?'];
  useEffect(() => {
    const handleResize = () =>{
      const screenWidth = window.innerWidth;
      console.log(screenWidth);
      if(screenWidth < 1023){setPageBreakIcon(true)}
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
    <header className={`fixed w-full z-20 top-0 flex p-1  items-center    bg-deltaBlue ${pageBreakIcon ? ' justify-between h-10':' justify-around h-20'}`}>
        <div className={`  ${pageBreakIcon ? 'flex': 'hidden'}`}>
          <button onClick={()=>console.log(' Menu Btn Pressed')}>
            <FontAwesomeIcon icon={faBars}/>
          </button>
          
        </div>
        <div></div>
        <div className='  '>
          <div className={`flex  items-center justify-evenly    ${pageBreakIcon ? 'hidden' : '  rounded-md pb-2'} `}>
             <div className='flex-none '><HeaderLogoImg/></div>    
             <UserToolBarGroup strings={toolBarFirstFour} textSize={'font-bold text-sm'}/>
             
             <SkyMilesToolBarGrp strings={toolBarSecondGroup} textSize={' text-xs '}/>
          </div>
        </div>
        <div className={`flex space-x-5 text-xs font-bold text-nowrap ${pageBreakIcon ? 'justify-around': ''}`}>
                <button className=' ' onClick={()=>console.log('SIGN UP BTN PRESSED')}>
                  SIGN UP
                </button>
            
                <button className=' font-semibold bg-deltaRed p-1' onClick={()=>console.log('SIGN UP BTN PRESSED')}>
                  LOG IN
                </button>
                <button className={`${pageBreakIcon ? 'hidden' : ' '}`} onClick={() =>console.log('Notifications Btn Pressed')}>
                  <FontAwesomeIcon icon={faBell} size={'2x'}/>
                </button>
                <div className={`inline-block pt-1 h-[30px] min-h-[1em] w-0.5 self-stretch bg-borderGray ${pageBreakIcon ? 'hidden' : ' '}`}></div>
                <div className={`${pageBreakIcon ? '' : 'hidden '}`}></div>
                
            <div className={`${pageBreakIcon ? 'hidden' : ' '}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={'2x'} />
            </div>
        </div>
        <div className={`flex space-x-5 justify-between p-2 ${pageBreakIcon ? '' : 'hidden '}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={'1x'} />
          <div></div>
        </div>
        

    </header>
  )
}

export default Header