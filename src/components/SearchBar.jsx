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
        <div  className=' p-1 w-[80%] flex flex-row  rounded-3xl gap-1 bg-white shadow-2xl '>
          <button onClick={(e) => handleClick(e)} className='cursor-pointer' type='submit' >
            <IoIosSearch className='text-3xl text-gray-600 ml-1 shrink-0 transition-all duration-100 hover:text-black hover:text-2xl active:text-3xl'/>
          </button>  
            <input 
            id="search-input" 
            type="text" 
            autoComplete="off"
            placeholder='Search City...'
            className='w-full h-full pl-1 rounded-lg bg-transparent outline-none  focus:bg-gray-200 focus:rounded-2xl focus:pl-3  transition-all duration-100 mr-1 '
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)
            
            }
        />
      </div>
    <button 
        type="submit"
        disabled={isInputEmpty}
        className={`py-2 px-4 rounded-3xl 
        shrink-0 
        inline-block
        max-[640px]:hidden 
        transition-all duration-100 
        ${
          isInputEmpty 
            ? 'bg-gray-600 text-white cursor-normal'
            : 'bg-black text-white hover:bg-gray-800 cursor-pointer shadow-md hover:scale-105 active:scale-95 ' 
        }`}
        
        onClick={(e) => handleClick(e)}
        
    >Search</button>
    </form>
  )
}

export default SearchBar
