'use client'

import { useState } from 'react';

interface ButtonProps {
    label: string;
    id: number;
    isActive: boolean;
    onClick: () => void;
  }
const Button = ({label, id, isActive, onClick } : ButtonProps) => {
    let largeText = true;
    if(label === 'Travel Info' || 'SkyMiles' || 'Need Help?'){largeText = false;}
    
    return (
        <button
          onClick={onClick}
          className={` ${isActive ? 'border-deltaRed border-b-2' : ''}`}
        >
          
         <div className={` p-1 border-borderGray  ${largeText ? ' ':' text-sm p-2'}  ${isActive ? 'rounded-md border-2 opacity-35': ''}`}>{label}</div> 
        </button>
      );
}
function ToolBarBtnGroup() {
const [activeButton, setActiveButton] = useState<number | null>(null);
let toolBarArray: string[] = ['BOOK','CHECK-IN', 'MY TRIPS', 
    'FLIGHT STATUS', 'Travel Info',
    'SkyMiles', 'Need Help?'];
const handleButtonClick = (id: number) => {
        setActiveButton(id === activeButton ? null : id);
      };
  return (
    <div className=' text-nowrap font-bold w-full pt-1 flex shrink'>
        {toolBarArray.map((tool, index)=>(
            
            <Button label={tool} id={index} isActive={activeButton === index} 
                    onClick={() => handleButtonClick(index)} key={index}/>
        ))}
    </div>
  )
}

export default ToolBarBtnGroup