export function getWeatherTheme(weatherData) {
  // 1. Safely check if the data exists
  if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
    return { theme: "default", image: "/images/default.jpg" };
  }

  // 2. Extract the exact OpenWeather string
  const weatherMain = weatherData.weather[0].main;

  // 3. Return the exact file path to your downloaded photos
  switch (weatherMain) {
    case "Clear":
      return { theme: "sunny", image: "/images/sunny.jpg" };
    case "Clouds":
      return { theme: "cloudy", image: "/images/cloudy.jpg" };
    case "Rain":
    case "Drizzle":
      return { theme: "rainy", image: "/images/rainy.jpg" };
    case "Snow":
      return { theme: "snowy", image: "/images/snowy.jpg" };
    case "Thunderstorm":
      return { theme: "storm", image: "/images/storm.jpg" };
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return { theme: "foggy", image: "/images/foggy.jpg" };
    default:
      return { theme: "default", image: "/images/default.jpg" };
  }
}