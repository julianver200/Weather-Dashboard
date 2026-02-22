import axios from "axios";

export const getWeatherByCity = async (city) => { 
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather`;
    console.log("Axios is trying to search for:", city);
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


   throw error;
}
}

