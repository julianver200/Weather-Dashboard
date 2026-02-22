import React from 'react'
import { MdNightsStay } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";

const Header = ({onClickUnit, unit}) => {

  return (
    <>
        <header className='flex flex-row justify-between  py-6   
                w-full
                sm: px-4    /* Tablet */
               md:px-6       /* Small Laptop */
               lg:px-8        /* Desktop */
               xl:px-12'>
            <div className='flex items-center'>
               <h1 className='font-bold 
               text-16px          /* Default: Smallest (Mobile) */
               sm:text-lg        /* Tablet */
               md:text-xl        /* Small Laptop */
               lg:text-2xl        /* Desktop */
               xl:text-3xl /* Large Screen */' >      
                    Weather Dashboard
                </h1>
            </div>
            <div className='flex flex-row gap-1.5 h-7.5 w-20 justify-center mr-3'>
                <button className='border-2 cursor-pointer text-sm font-semibold rounded-lg px-2 bg-white'>
                    <MdNightsStay/>
                </button>
                
                <button 
                    type="button"
                    className='border-2 cursor-pointer text-sm font-semibold rounded-lg px-2 bg-white'
                    value={unit}
                    onClick={onClickUnit}
                >{unit}</button>
                <button className='border-2 cursor-pointer text-sm font-semibold rounded-lg px-2 bg-white'
                    onClick={() => window.location.reload()}
                >
                    <FiRefreshCw/>
                </button>
                
            </div>
        </header>
    </>
  )
}

export default Header
