'use client'

import {  createContext, useContext, useState } from 'react';

interface ButtonProps {
    label: string;
    id: number;
    isActive: boolean;
    onClick: () => void;
    text_size: string;
    
  }
  interface UIContextType {
    selectedComponent: string;
    setSelectedComponent: (component : string) => void;
  }
const UIContext = createContext<UIContextType>({selectedComponent: '', setSelectedComponent: () => {}});

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
const [activeButton, setActiveButton] = useState<number | null>(null);
const { setSelectedComponent } = useContext(UIContext);

const handleButtonClick = (id: number, component: string) => {
        setActiveButton(id === activeButton ? null : id);
        console.log(component);
        setSelectedComponent(component);
      };
  return (
    <div className='  text-nowrap   pt-1 flex justify-center space-x-2 '>
        {strings.map((tool, index)=>(
             
            <Button label={tool} id={index} isActive={activeButton === index}
          onClick={() => handleButtonClick(index,tool)}  key={index} text_size={textSize}/>
        ))}
    </div>
  )
}

export default UserToolBarGroup;