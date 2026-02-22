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
    // Optional: Keep this for your own debugging
    console.log("OpenWeather says:", error.response?.data?.message);

    // 1. Did the API respond with an error?
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error("City not found. Please check your spelling!");
      }
      if (error.response.status === 400) {
        throw new Error("Please enter a valid city name.");
      }
      // Any other API error (like an invalid API key)
      throw new Error(error.response.data.message || "Failed to fetch weather data.");
    } 
    
    // 2. Did the request fail to even reach the API? (Like offline/no Wi-Fi)
    if (error.request) {
      throw new Error("Network error. Please check your internet connection.");
    }

    // 3. Absolute fallback for anything else
    throw new Error("Something went wrong. Please try again.");
  }
  
}

