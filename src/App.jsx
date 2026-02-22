import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import RecentSearches from './components/RecentSearches'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import { getWeatherTheme } from './utils/weatherTheme'

const App = () => {
  const [city, setCity] = useState(null);
  const [searchHistory, setSearchHistory] = useState(() => {
    const savedData = localStorage.getItem('searchHistory');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [unit, setUnit] = useState('°C');
  
  const [appWeather, setAppWeather] = useState(null);
  const currentWeather = getWeatherTheme(appWeather);
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
    <div className={`w-full min-h-screen flex flex-col bg-linear-to-br ${currentWeather.gradient} `}>
        <Header onClickUnit={toggleUnit} unit={unit}/>
        <div className='flex flex-col pb-4 w-full items-center gap-4 '>
            <SearchBar onSearch = {onSearchSubmit}/>
            <RecentSearches history={searchHistory} onClear={clearSearchHistory} onClickRecent={onSearchSubmit}/>
            
            <WeatherCard 
            city={city}  
            unit={unit}
            onWeatherData={setAppWeather}
            />
            
        </div>
        
    </div>
  )
}

export default App
