import React, { useState } from 'react'
import 

function ToolBarUIProvider({children: any}) {
const [selectedComponent, setSelectedComponent] = useState<string>('');

  return (
    <UIContext.Provider value={{ selectedComponent, setSelectedComponent}}>
        {children}
    </UIContext.Provider>
  )
}

export default ToolBarUIProvider