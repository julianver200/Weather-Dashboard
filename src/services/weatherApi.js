import axios from "axios";

export const getWeatherByCity = async (city) => { 
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather`;
    
    try {
        const response = await axios.get(url, {
            params: {
                q: city,
                units: "metric", 
                appid: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
        throw new Error(`We couldn't find "${searchCity}". Check your spelling!`);
        } 
        else if (!response.ok) {
            throw new Error("Something went wrong fetching the weather.");
        } 
    }
}

