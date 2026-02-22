export function getWeatherTheme(weatherData) {
  if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
    // Default: Slate Gray to Darker Slate
   return { 
      theme: "default", 
      image: "/images/default.jpg", 
      gradient: "from-slate-400 to-slate-600" 
    };
  }
  const weatherMain = weatherData.weather[0].main;

  switch (weatherMain) {
    case "Clear":
      // Sunny: Warm Amber to Deep Orange
      return { theme: "sunny", image: "/images/sunny.jpg", gradient: "from-amber-300 to-orange-500" };
      
    case "Clouds":
      // Cloudy: Soft Gray to Blue-Gray
      return { theme: "cloudy", image: "/images/cloudy.jpg", gradient: "from-gray-300 to-slate-500" };
      
    case "Rain":
    case "Drizzle":
      // Rainy: Light Blue to Deep Ocean Blue
      return { theme: "rainy", image: "/images/rainy.jpg", gradient: "from-blue-400 to-blue-700" };
      
    case "Snow":
      // Snowy: Icy White to Light Sky Blue
      return { theme: "snowy", image: "/images/snowy.jpg", gradient: "from-blue-50 to-blue-200" };
      
    case "Thunderstorm":
      // Storm: Dark Purple-Gray to Almost Black
      return { theme: "storm", image: "/images/storm.jpg", gradient: "from-slate-700 to-gray-900" };
      
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      // Foggy: Pale Gray to Silver
      return { theme: "foggy", image: "/images/foggy.jpg", gradient: "from-gray-200 to-gray-400" };
      
    default:
      return { theme: "default", image: "/images/default.jpg", gradient: "from-slate-400 to-slate-600" };
  }
}