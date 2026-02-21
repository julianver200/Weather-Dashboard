import React, {useEffect, useState}from 'react'
import { GiBackwardTime } from "react-icons/gi";

const RecentSearches = ({history, onClear, onClickRecent}) => {
  
  return (
    !history || history.length === 0 ? null :
    <div className='flex flex-col w-[90%] md:w-[50%] border rounded-lg'>
        <div className='flex flex-row justify-between py-1 px-3 mt-1'>
          <div className='flex flex-row items-center gap-1'>
            <GiBackwardTime className='shrink-0 text-xs sm:text-xl -mb-0.5 '/>
            <span className='text-xs sm:text-sm'>Recent Searches</span>
          </div>
          <button 
            className='text-xs px-3 transition-all duration-200 ease-in-out
            hover:cursor-pointer hover:rounded-lg hover:bg-gray-400 '
            onClick={(e) => onClear(e.target.value)}
          >X <span className='ml-1'>Clear</span></button>
        </div>
        <div className='flex flex-row gap-2 py-4 px-4 text-xs font-medium'>

          {history.map((item) => (
            <button 
              key={item.id} 
              className='bg-gray-300 rounded-lg py-1 px-2 cursor-pointer'
              onClick={(e) => onClickRecent(item.name, e)}>
              {item.name}
            </button>
          ))}
        </div>
    </div>
  )
}

export default RecentSearches
