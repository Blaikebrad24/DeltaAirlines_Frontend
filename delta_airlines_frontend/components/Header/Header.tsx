'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import HeaderLogoImg from '../Changers/headerLogoImg'
import ToolBarBtnGroup from '../ToolBarBtnGroup';

function Header() {
  const [toolBarBtnClicked, setToolBarClick] = useState(false);
  
  let toolBarArray: string[] = ['Book','CHECK-IN', 'MY TRIPS', 
                                'FLIGHT STATUS', 'Travel Info',
                                'SkyMiles', 'Need Help?'];

  const handleClick = () => {
    setToolBarClick(!toolBarBtnClicked);
  };


  const toolBarHelper = (toolBarArray : string[]) =>{
    console.log(toolBarArray.toString);


  }

  return (
    <header className='fixed w-full z-20 top-0 flex items-center h-30 justify-between p-2 bg-deltaBlue '>
        <div className='ml-10 top-0   w-1/4 flex-shrink-0'>
          <HeaderLogoImg/>
        </div>

        <div className=' hidden xl:inline-flex ml-4 w-full items-center text-nowrap h-full bg-testPink font-bold space-x-5 '>
            <ToolBarBtnGroup/>
        </div>

        <div className='flex  items-center justify-between w-1/4 p-1 px-1 ml-12 bg-testPink'>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
            <div className=' '>Login | Sign Up</div>
        </div>
        <div className='flex  items-center justify-evenly w-1/7 p-1'>
            <div></div>
            <div></div>
            <div className=' '>Notifications</div>
            
        </div>
        
    </header>
  )
}

export default Header