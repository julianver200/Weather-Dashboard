import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import RecentSearches from './components/RecentSearches'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'

const App = () => {
  const [city, setCity] = useState(null);
  const [searchHistory, setSearchHistory] = useState(() => {
    const savedData = localStorage.getItem('searchHistory');
    return savedData ? JSON.parse(savedData) : [];

  });
  const [unit, setUnit] = useState('°C');
  
  useEffect(() => {
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  },[searchHistory]);

  const onSearchSubmit = (newCityName) => {
    if (!newCityName) return;

    // 1. Set the current city for the WeatherCard
    setCity(newCityName);

    // 2. Add to history using the updater function
    setSearchHistory((prev) => {
      // Clean up duplicates (case-insensitive)
      const filtered = prev.filter(item => 
        item.name.toLowerCase() !== newCityName.toLowerCase()
      );
      // Limit to 5 items
      return [{ id: Date.now(), name: newCityName }, ...filtered].slice(0, 5);
    });
  };
  const clearSearchHistory = () => {
    setSearchHistory([]);
  };
  const toggleUnit = () => {
  setUnit(prev => prev === '°C' ? '°F' : '°C');
};

  return (
    <div className='w-full min-h-full flex flex-col mb-8'>
        <Header onClickUnit={toggleUnit} unit={unit}/>
        <div className='flex flex-col mt-8 w-full items-center gap-6 '>
            <SearchBar onSearch = {onSearchSubmit}/>
            <RecentSearches history={searchHistory} onClear={clearSearchHistory}/>
            
            <WeatherCard city={city}  unit={unit}/>
            
        </div>
        
    </div>
  )
}

export default App
