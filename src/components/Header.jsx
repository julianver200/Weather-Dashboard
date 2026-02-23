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
            <div className='flex flex-row gap-2 w-30 h-8 justify-center mr-3'>
                        {/* Dark Mode Toggle */}
                        <button 
                        className='flex-1 basis-0  flex items-center justify-center border border-transparent cursor-pointer text-sm font-semibold 
                            rounded-lg bg-white shadow-lg shadow-black/20 transition-all duration-100
                            hover:scale-105 active:scale-95'>
                            <MdNightsStay className="text-lg"/>
                        </button>
                        
                        {/* Unit Toggle */}
                        <button 
                            type="button"
                            className='flex-1 basis-0  flex items-center justify-center border border-transparent cursor-pointer text-sm font-semibold 
                            rounded-lg bg-white shadow-lg shadow-black/20 transition-all duration-100
                            hover:scale-105 active:scale-95'
                            onClick={onClickUnit}
                        >
                            {unit}
                        </button>

                        {/* Refresh Button */}
                        <button 
                            className='flex-1 basis-0  flex items-center justify-center border border-transparent cursor-pointer text-sm font-semibold 
                            rounded-lg bg-white shadow-lg shadow-black/20 transition-all duration-100
                            hover:scale-105 active:scale-95'
                            onClick={() => window.location.reload()}
                        >
                            <FiRefreshCw className="text-lg"/>
                        </button>
                    </div>
        </header>
    </>
  )
}

export default Header
