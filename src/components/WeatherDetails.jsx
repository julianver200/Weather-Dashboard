import React, { useState } from 'react'
import { TbTemperature } from "react-icons/tb";
import { GiHeavyRain } from "react-icons/gi";
import { LuWind } from "react-icons/lu";

const WeatherDetails = ({weather, unit}) => {
    
    const getFeelsLike = () => {
 
    if (unit === '°C') {
    return Math.round(weather.main.feels_like); 
    } else if (unit === '°F') {
    return Math.round((weather.main.feels_like * 9/5) + 32);
    }
};
const getSpeed =() => {
     if(unit === '°C') {
        return weather.wind.speed
    } else if (unit === '°F') {
        return (weather.wind.speed * 2.23694).toFixed(2);
    }
}
const getSpeedUnit = () =>{
    if(unit === '°C') {
        return 'm/s'
    } else if (unit === '°F') {
        return 'mph';
    }
}
return (
    <div className='flex flex-row justify-around w-[90%] md:w-[50%] border rounded-lg py-6 px-2'>
        <div className='flex flex-col items-center text-sm gap-2'>
            <span><TbTemperature  className='text-4xl text-gray-700'/></span>
            <span className='mt-2'>Feels Like</span>
            <span>{getFeelsLike()} {unit}</span>
        </div>
        <div className='flex flex-col items-center text-sm gap-2'>
            <span><GiHeavyRain className='text-4xl text-gray-700'/></span>
            <span className='mt-2'>Humidity</span>
            <span>{weather.main.humidity}%</span>
        </div>
        <div className='flex flex-col items-center text-sm gap-2'>
            <span><LuWind  className='text-4xl text-gray-700'/></span>
            <span className='mt-2'>Wind Speed</span>
            <span>{getSpeed()} {getSpeedUnit()}</span>
        </div>
    </div>
);
}

export default WeatherDetails
