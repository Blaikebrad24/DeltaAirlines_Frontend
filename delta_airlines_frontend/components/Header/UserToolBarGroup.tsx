'use client'

import {  Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { useHeroContext } from '../Context/HeroUIContext';

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
          className={`p-1   ${isActive ? 'border-deltaRed border-b-2' : 'border-0'}`}
        >
          
         <div className={`  p-1 border-borderGray text-toothWhite  ${text_size}`}>{label}</div> 
        </button>
      );
}

interface BtnGroupLabels {
  strings: string[];
  textSize: string;
}



function UserToolBarGroup( { strings, textSize } : BtnGroupLabels) {
const [activeButton, setActiveButton] = useState<number | null>(0);
const { setSelectedTab } = useHeroContext();

const handleButtonClick = (id: number, componentState:string) => {
        setSelectedTab(componentState);
        setActiveButton( id === activeButton ? null : id)
        console.log(componentState);
       
      };
  return (
    
      <div className='  text-nowrap   pt-1 flex justify-center space-x-2 '>
          {strings.map((tool, index)=>(
            
                <Button label={tool} id={index}
            onClick={() => handleButtonClick(index,tool)} key={index} text_size={textSize} isActive={activeButton === index}/>
          
          ))}
      </div>
    
  )
}

export default UserToolBarGroup;

