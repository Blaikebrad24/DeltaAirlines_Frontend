'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import HeaderLogoImg from '../Changers/headerLogoImg'
import ToolBarBtnGroup from '../ToolBarBtnGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';


function Header() {
  const [pageBreakIcon, setPageBreakIcon] = useState(false);
  const [isWindowLoad, setIsWindowLoad] = useState(false);
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
    <header className='fixed w-full z-20 top-0 flex   items-center justify-evenly h-20  bg-deltaBlue divide-y divide-solid'>
        <div className={` flex  border-2 border-testGreen ml-6 rounded-md `}>
             
             <div className='flex-none pt-1'><HeaderLogoImg/></div>
             <ToolBarBtnGroup/>
              

        </div>
        <div className=' border-2 border-deltaRed flex  ml-5 '>right</div>

    </header>
  )
}

export default Header