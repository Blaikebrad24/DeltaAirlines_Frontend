import React, { createContext, useContext, useState, ReactNode } from 'react'

type HeroContextType = {
    selectedTab: string;
    setSelectedTab: (value:string) => void;
};
const HeroSectionContext = createContext<HeroContextType | undefined>(undefined);
export const useHeroContext = () => {
    const context = useContext(HeroSectionContext);
    if(!context){throw new Error('useHeroContext must be within Provider')}
    return context;
}

type Props = {
    children: ReactNode;
}

export const HeroUIContext = ({children}: Props) => {
    const [selectedTab, setSelectedTab] = useState<string>('BOOK');

    return (
        <HeroSectionContext.Provider value={{selectedTab, setSelectedTab}}>
            {children}
        </HeroSectionContext.Provider>
    )
}