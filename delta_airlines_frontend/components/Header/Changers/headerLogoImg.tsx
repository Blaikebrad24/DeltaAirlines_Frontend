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
    if(screenWidth < 990){setSmallScreen(true)}
    else{setSmallScreen(false)} 
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

    },
    []);

  return (
    <div className='  '>
        <Image className=' pt-2' src="/images/delaLogo.png" alt="Delta Clone" width={150} height={150} priority={true} />

      {/* {isSmallScreen ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <Image className=' flex-shrink-0' src="/images/delaLogo.png" alt="Delta Clone" width={200} height={200} priority={true} />
      )} */}
    </div>
  );
};

export default HeaderLogoImg;