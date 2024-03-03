import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icon you want to use

interface Props {
  width: number;
  height: number;
}

const MyComponent: React.FC<Props> = ({ width, height }) => {
  const isSmallScreen = width < 768;

  return (
    <div>
      {isSmallScreen ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <Image src="//images/delaLogo.png" alt="Large Image" width={500} height={300} />
      )}
    </div>
  );
};

export default MyComponent;