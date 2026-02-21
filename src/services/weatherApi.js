import axios from "axios";

export const getWeatherByCity = async (city) => { 
    const API_KEY = "c8bcc2ef4c7c82055862f2eb9d5cff1f";
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
        console.error("API Error:", error.response?.status); // Check if this logs 404
        throw error; // Return null so the component can trigger the Error state
    }
}

