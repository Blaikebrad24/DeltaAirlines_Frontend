'use client'

import {  useState } from 'react';

interface ButtonProps {
    label: string;
    id: number;
    isActive: boolean;
    onClick: () => void;
    text_size: string;
    
  }
const BorderButton = ({label, id, isActive, onClick , text_size } : ButtonProps) => {

    
    return (
        <button
          onClick={onClick}
          className={`p-4   ${isActive ? 'border-deltaRed border-b-2' : 'border-0'}`}
        >
          
         <div className={`  p-1 border-borderGray text-toothWhite  ${text_size}`}>{label}</div> 
        </button>
      );
}

interface BtnGroupLabels {
  strings: string;
  textSize: string;
}

function BorderBottomRed({ strings, textSize } : BtnGroupLabels) {
    const [activeButton, setActiveButton] = useState(false);

    const handleButtonClick = (active : boolean) => {
        setActiveButton(!active);
      };
  return (
    <div className='  text-nowrap   pt-1 flex justify-between '>
    {/* <BorderButton label={strings} text_size={textSize} id={0} isActive={act} onClick={() =>handleButtonClick(1)} /> */}
    
</div>
  )
}

export default BorderBottomRed;