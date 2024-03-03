import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-deltaBlue min-w-[570px]'>
        <div className='ml-5 h-auto  w-1/5 resize-none'>
            <Image
             className=' flex  '
             src="/images/delaLogo.png"
             height={50}
             width={150}
             alt='Delta Clone'
             />
        </div>

        <div className=' hidden md:inline-block w-1/2 items-center'>Delta Toolbar Options</div>

        <div className='flex  items-center justify-between w-1/4 p-1 px-1 ml-12'>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
            <div className=' '>Login | Sign Up</div>
        </div>
        <div className='flex  items-center justify-evenly w-1/7 p-1'>
            <div></div>
            <div></div>
            <div className=' '>Notifications</div>
            
        </div>
        
    </header>
  )
}

export default Header