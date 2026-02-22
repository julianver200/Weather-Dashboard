import React, {useState} from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({onSearch}) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (!inputValue.trim()) return
    onSearch(inputValue);
    setInputValue("");
  };
  const handleClick = (e) => { 
  e.preventDefault(); 
  if(!inputValue.trim()) return;
  
  onSearch(inputValue);
  setInputValue("");
}
  const isInputEmpty = inputValue.trim().length === 0 ? true: false;
  return (
  <form className="flex flex-row gap-2 justify-center mx-auto px-2 
                w-full         /* Default (Mobile/under 640px) */
                sm:w-[95%]      /* Tablet-ish */
                md:w-[50%]      /* Small Laptop */
                lg:w-[55%]      /* Desktop */
                xl:w-[55%]"
      onSubmit={(e) => handleSubmit(e)}
      required>
        <div  className='border p-1 w-[80%] flex flex-row  rounded-3xl gap-1'>
          <button onClick={(e) => handleClick(e)} className='cursor-pointer' type='submit'>
            <IoIosSearch className='text-3xl text-gray-600 ml-1 shrink-0'/>
          </button>  
            <input 
            id="search-input" 
            type="text" 
            autoComplete="off"
            placeholder='Search City...'
            className='w-full h-full pl-1 rounded-lg bg-transparent outline-none focus:bg-gray-200 focus:rounded-2xl focus:pl-3  transition-colors mr-1 '
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)
            
            }
        />
      </div>
    <button 
        type="submit"
        disabled={isInputEmpty}
        className={`py-2 px-4 rounded-3xl 
         transition-all shrink-0 
        inline-block
        max-[640px]:hidden ${
          isInputEmpty 
            ? 'bg-gray-600 text-white cursor-normal' // The "Off" look
            : 'bg-black text-white hover:bg-gray-800 cursor-pointer shadow-md  ' // The "On" look
        }`}
        
        onClick={(e) => handleClick(e)}
        
    >Search</button>
    </form>
  )
}

export default SearchBar
