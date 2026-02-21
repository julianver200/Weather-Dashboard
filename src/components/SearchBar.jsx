import React, {useState} from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({onSearch}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    const trimmedCity = inputValue.trim();
    if (trimmedCity === "") {
      alert("Please Input a City!");
      return;
    }
    onSearch(trimmedCity);
    setInputValue("");
  };
  const handleSubmit = (e) => {
    // 1. This stops the page from reloading when you press Enter!
    e.preventDefault(); 
    
    // 2. Only search if the input isn't empty
    if (inputValue.trim()) {
      onSearch(inputValue);
      setInputValue(""); // Optional: clears the input field after searching
    }
  };
  return (
<form className="flex flex-row gap-2 justify-center mx-auto px-2 
                w-[90%]          /* Default (Mobile/under 640px) */
                sm:w-[90%]      /* Tablet-ish */
                md:w-[50%]      /* Small Laptop */
                lg:w-[55%]      /* Desktop */
                xl:w-[55%]"
      onSubmit={(e) => handleSubmit(e)}>
        <div  className='border p-1 w-[80%] flex flex-row  rounded-3xl gap-1'>
            <IoIosSearch className='text-3xl text-gray-600 ml-1 shrink-0'/>
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
        className='border py-2 px-4 rounded-3xl cursor-pointer bg-black text-white 
        hover:bg-gray-900 transition-colors shrink-0'
        onClick={handleSearchClick}
    >Search</button>
    </form>
  )
}

export default SearchBar
