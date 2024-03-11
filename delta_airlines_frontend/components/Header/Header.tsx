'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import HeaderLogoImg from './Changers/headerLogoImg'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import UserToolBarGroup from './UserToolBarGroup';
import SkyMilesToolBarGrp from './SkyMilesToolBarGrp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


function Header() {
  const [pageBreakIcon, setPageBreakIcon] = useState(false);
  const [isWindowLoad, setIsWindowLoad] = useState(false);
  const toolBarFirstFour: string[] = ['BOOK','CHECK-IN', 'MY TRIPS', 'FLIGHT STATUS'];
  const toolBarSecondGroup: string[] = ['Travel Info', 'SkyMiles', 'Need Help?'];

  
  useEffect(() => {

    const handleResize = () =>{
      
      const screenWidth = window.innerWidth;
      // console.log(screenWidth);
      if(screenWidth < 1077){setPageBreakIcon(true)}
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
    <header className={`fixed w-full z-20 top-0 flex p-2  items-center border-b-[1px] border-slate700    bg-deltaBlue ${pageBreakIcon ? ' justify-between h-15':' justify-around h-20'}`}>
        <div className={` px-4 ${pageBreakIcon ? 'flex': 'hidden'}`}>
          <button onClick={()=>console.log(' Menu Btn Pressed')}>
            <FontAwesomeIcon icon={faBars} size={'1x'}/>
          </button>
          
        </div>
        <div></div>
        <div className='  '>
          <div className={`   items-center justify-between   ${pageBreakIcon ? 'hidden' : 'flex  rounded-md pb-2'} `}>
             <div className='flex-none '><HeaderLogoImg/></div>    
             <UserToolBarGroup strings={toolBarFirstFour} textSize={'font-bold text-sm text-nowrap'}/>
             
             <SkyMilesToolBarGrp strings={toolBarSecondGroup} textSize={' text-xs flex-shrink text-nowrap' }/>
          </div>
        </div>
        <div className={`flex space-x-5 text-xs font-bold text-nowrap ${pageBreakIcon ? 'justify-around': ''}`}>
                <button className=' ' onClick={()=>console.log('SIGN UP BTN PRESSED')}>
                  SIGN UP
                </button>
            
                <button className=' items-center font-bold bg-deltaRed px-3 pt-1 pb-1' onClick={()=>console.log('SIGN UP BTN PRESSED')}>
                  LOG IN
                </button>
                <button className={`${pageBreakIcon ? 'hidden' : ' '}`} onClick={() =>console.log('Notifications Btn Pressed')}>
                  <div className=' relative'>
                    <div className=' p-1 absolute left-3  text-toothWhite rounded-full bg-deltaRed flex items-center justify-center font-mono h-[15px] w-[15px] text-xs'>1</div>
                    <FontAwesomeIcon icon={faBell} size={'2x'}/>
                  </div>
                  
                </button>
                <div className={`inline-block pt-1 h-[30px] min-h-[1em] w-0.5 self-stretch bg-borderGray ${pageBreakIcon ? 'hidden' : ' '}`}></div>
                <div className={`${pageBreakIcon ? '' : 'hidden '}`}></div>
                
            <div className={` px-2 pt-1 ${pageBreakIcon ? 'hidden' : ' '}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={'2x'} />
            </div>
        </div>
        <div className={`  p-1 flex space-x-5 justify-between   ${pageBreakIcon ? '' : 'hidden '}`}>
            <div className=' relative'>
                  <div className=' p-1 absolute left-3  text-toothWhite rounded-full bg-deltaRed flex items-center justify-center font-mono h-[15px] w-[15px] text-xs'>1</div>
                  <FontAwesomeIcon className=' ' icon={faBell} size={'xl'} />
            </div>
          <div></div>
        </div>
        

    </header>
  )
}

export default Header