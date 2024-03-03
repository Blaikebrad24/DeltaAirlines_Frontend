'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icon you want to use



const HeaderLogoImg: React.FC = () => {
  const [isSmallScreen, setSmallScreen] = useState(false);

  //useEffect Hook

  useEffect(() =>{

    const handleResize = () =>{
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    
    if(screenWidth < 768){setSmallScreen(true)}
    else{setSmallScreen(false)} 
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

    },
    []);
  return (
    <div>
      {isSmallScreen ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <Image src="/images/delaLogo.png" alt="Large Image" width={500} height={300} />
      )}
    </div>
  );
};

export default HeaderLogoImg;