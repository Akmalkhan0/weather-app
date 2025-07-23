import React from 'react';
import './WeatherDisplay.css';
import {
  FaThermometerHalf,
  FaTint,
  FaWind,
  FaCloud,
  FaSun,
  FaMoon,
  FaEye,
  FaTachometerAlt,
  FaArrowUp,
  FaArrowDown,
  FaCloudRain,
  FaSnowflake,
  FaBolt,
  FaSmog,
} from 'react-icons/fa';

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return <div className="weather-display">Enter a city to get weather information.</div>;
  }

  // Convert temperature from Kelvin to Celsius
  const tempCelsius = (weatherData.main.temp - 273.15).toFixed(1);
  const feelsLikeCelsius = (weatherData.main.feels_like - 273.15).toFixed(1);
  const tempMinCelsius = (weatherData.main.temp_min - 273.15).toFixed(1);
  const tempMaxCelsius = (weatherData.main.temp_max - 273.15).toFixed(1);

  const getWeatherIcon = (iconCode) => {
    switch (iconCode.slice(0, 2)) {
      case '01': return <FaSun className="weather-icon" style={{ color: 'gold' }} />;
      case '02': return <FaCloud className="weather-icon" style={{ color: 'lightgray' }} />;
      case '03': return <FaCloud className="weather-icon" style={{ color: 'gray' }} />;
      case '04': return <FaCloud className="weather-icon" style={{ color: 'darkgray' }} />;
      case '09': return <FaCloudRain className="weather-icon" style={{ color: 'blue' }} />;
      case '10': return <FaCloudRain className="weather-icon" style={{ color: 'darkblue' }} />;
      case '11': return <FaBolt className="weather-icon" style={{ color: 'yellow' }} />;
      case '13': return <FaSnowflake className="weather-icon" style={{ color: 'lightblue' }} />;
      case '50': return <FaSmog className="weather-icon" style={{ color: 'lightslategray' }} />;
      default: return <FaSun className="weather-icon" />;
    }
  };

  const getWindDirection = (deg) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  };

  const sunriseTime = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="weather-display">
      <h2><span className="city-name">{weatherData.name}, {weatherData.sys.country}</span> {getWeatherIcon(weatherData.weather[0].icon)}</h2>
      <p className="description">{weatherData.weather[0].description}</p>
      <div className="weather-grid">
        <div className="weather-card-item">
          <h3><FaThermometerHalf /> Temperature</h3>
          <p>{tempCelsius}°C</p>
          <p className="sub-info">Feels like: {feelsLikeCelsius}°C</p>
          <p className="sub-info">Humidity: {weatherData.main.humidity}%</p>
          <p className="sub-info">Pressure: {weatherData.main.pressure} hPa</p>
        </div>
        <div className="weather-card-item">
          <h3><FaArrowDown /> Min Temp</h3>
          <p>{tempMinCelsius}°C</p>
        </div>
        <div className="weather-card-item">
          <h3><FaArrowUp /> Max Temp</h3>
          <p>{tempMaxCelsius}°C</p>
        </div>
        <div className="weather-card-item">
          <h3><FaEye /> Visibility</h3>
          <p>{weatherData.visibility / 1000} km</p>
        </div>
        <div className="weather-card-item">
          <h3><FaWind /> Wind</h3>
          <p>{weatherData.wind.speed} m/s</p>
          <p className="sub-info">{getWindDirection(weatherData.wind.deg)} {weatherData.wind.gust ? `(Gust: ${weatherData.wind.gust} m/s)` : ''}</p>
        </div>
        <div className="weather-card-item">
          <h3><FaCloud /> Clouds</h3>
          <p>{weatherData.clouds.all}%</p>
          {weatherData.weather[0].description.includes('cloud') || weatherData.weather[0].description.includes('overcast') ? (
            <p className="sub-info">{weatherData.weather[0].description}</p>
          ) : null}
        </div>
        <div className="weather-card-item">
          <h3><FaSun /> Sunrise</h3>
          <p>{sunriseTime}</p>
        </div>
        <div className="weather-card-item">
          <h3><FaMoon /> Sunset</h3>
          <p>{sunsetTime}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;