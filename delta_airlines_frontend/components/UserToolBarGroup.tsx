'use client'

import {  useState } from 'react';

interface ButtonProps {
    label: string;
    id: number;
    isActive: boolean;
    onClick: () => void;
    text_size: string;
    
  }
const Button = ({label, id, isActive, onClick, text_size } : ButtonProps) => {

    
    return (
        <button
          onClick={onClick}
          className={` ${isActive ? 'border-deltaRed border-b-2' : 'border-0'}`}
        >
          
         <div className={` p-1 border-borderGray text-toothWhite  ${text_size}`}>{label}</div> 
        </button>
      );
}

interface BtnGroupLabels {
  strings: string[];
  textSize: string;
}

function UserToolBarGroup( { strings, textSize } : BtnGroupLabels) {
const [activeButton, setActiveButton] = useState<number | null>(null);


const handleButtonClick = (id: number) => {
        setActiveButton(id === activeButton ? null : id);
      };
  return (
    <div className=' mr-2 text-nowrap  w-full pt-1 flex space-x-2'>
        {strings.map((tool, index)=>(
             
            <Button label={tool} id={index} isActive={activeButton === index}
          onClick={() => handleButtonClick(index)}  key={index} text_size={textSize}/>
        ))}
    </div>
  )
}

export default UserToolBarGroup;