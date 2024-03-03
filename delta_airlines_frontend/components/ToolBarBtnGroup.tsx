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
          className={`mr-4 pb-2 h-20  ${isActive ? 'border-deltaRed border-b-2' : ''}`}
        >
         <div className={` p-1 border-borderGray text-toothWhite  ${isActive ? 'rounded-md border-2 opacity-35': ''}`}>{label}</div> 
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
    <div className=' hidden xl:inline-flex ml-4 w-full items-center text-nowrap h-full  font-bold space-x-4 '>
        {toolBarArray.map((tool, index)=>(
            <Button label={tool} id={index} isActive={activeButton === index} onClick={() => handleButtonClick(index) } />
        ))}
    </div>
  )
}

export default ToolBarBtnGroup