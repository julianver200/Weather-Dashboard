import React, { useState, useEffect } from 'react'
import { getWeatherByCity } from '/Users/quina/OneDrive/Desktop/React+Php/weather-app/src/services/weatherApi/';
import WeatherDetails from './WeatherDetails'
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";


const WeatherCard = ({city, unit}) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  
const getDisplayTemperature = () => {
  // Assuming your API already gives you Celsius (metric)
  if (unit === '°C') {
    // Just round the default Celsius temperature
    return Math.round(weather.main.temp); 
  } else if (unit === '°F') {
    // Convert the Celsius temperature to Fahrenheit
    return Math.round((weather.main.temp * 9/5) + 32);
  }
};
  useEffect(() => {
    if (!city) return;
    setError(null); 
      setWeather(null);
      setLoading(true);
    const getWeather = async () => {
      try{
        const data = await getWeatherByCity(city);
        if(!data){
          throw new Error("City not found");
        }
        setWeather(data)
        console.log(data);
      }catch(error){
        setError(error.message);
      }finally{
        setLoading(false);
      }
    };
     getWeather();
  setCurrentTime(new Date().toLocaleTimeString('en-US', {
  hour: 'numeric',   // Shows '1' instead of '01'
  minute: '2-digit', // Shows '05' instead of '5'
  hour12: true       // Forces the 12-hour AM/PM format
}))

  }, [city]);
  

 return (
  <>
    <div className='flex flex-col w-[90%] md:w-[50%] border rounded-lg text-lg mx-auto'>
      <div className='flex flex-col w-full items-center justify-center py-6 gap-2'>
        {loading ? (
          <div className="text-center p-10">Loading weather for {city}...</div>
        )
         :
        error ? (
          <div className="text-red-500 text-center p-10">Oops! City does not Exist</div>
        ):
        !weather ? (<div className="text-black-400 p-10">Search for a city to see the weather.</div>
        ): 
         (
          <> 
            <div className="font-bold flex items-center gap-1">
              <MdOutlineLocationOn/> {weather.name}, {weather.sys.country}
            </div>
            <div className='text-gray-500 text-xs flex flex-col items-center gap-2'>
              <span className='flex items-center gap-1'> <FaRegCalendar/>  { new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
              <span className='flex items-center gap-1'><CiClock2/> {currentTime}</span>
            </div>
            <div className='flex flex-col items-center gap-2 mt-2'>
              <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt="weather icon" 
              />
              <span className='text-4xl font-bold'>
                {getDisplayTemperature()}{unit}
              </span>
              <span className='font-semibold capitalize'>{weather.weather[0].description}</span>
            </div>
          </>
        )}
      </div>
    </div>
    {weather && <WeatherDetails weather={weather} unit={unit} />}
     </>
  );
 
};

export default WeatherCard
