'use client'

import { useState } from 'react';

interface ButtonProps {
    label: string;
    id: number;
    isActive: boolean;
    onClick: () => void;
  }
const Button = ({label, id, isActive, onClick} : ButtonProps) => {
    return (
        <button
          onClick={onClick}
          className={`mr-4 pb-2  ${isActive ? 'border-deltaRed border-b-2' : ''}`}
        >
          {label}
        </button>
      );
}
function ToolBarBtnGroup() {
    
const [activeButton, setActiveButton] = useState<number | null>(null);
let toolBarArray: string[] = ['Book','CHECK-IN', 'MY TRIPS', 
    'FLIGHT STATUS', 'Travel Info',
    'SkyMiles', 'Need Help?'];
const handleButtonClick = (id: number) => {
        setActiveButton(id === activeButton ? null : id);
      };
  return (
    <div className=' hidden xl:inline-flex ml-4 w-full items-center text-nowrap h-full bg-testPink font-bold space-x-5 '>
        {toolBarArray.map((tool, index)=>(
            <Button label={tool} id={index} isActive={activeButton === index} onClick={() => handleButtonClick(index) } />
        ))}
    </div>
  )
}

export default ToolBarBtnGroup