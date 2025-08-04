import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import './CommonCitiesWeather.css';

const CommonCitiesWeather = ({ apiKey, theme, onCardClick }) => {
  const [commonWeatherData, setCommonWeatherData] = useState([]);
  const commonCities = ['London', 'New York', 'Tokyo', 'Paris', 'Dubai', 'Sydney'];

  useEffect(() => {
    const fetchCommonWeatherData = async () => {
      const data = [];
      for (const city of commonCities) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );
          data.push(response.data);
        } catch (error) {
          console.error(`Error fetching weather for ${city}:`, error);
        }
      }
      setCommonWeatherData(data);
    };

    if (apiKey) {
      fetchCommonWeatherData();
    }
  }, [apiKey]);

  return (
    <div className={`common-cities-weather ${theme}`}>
      <h2>Common Cities Weather</h2>
      <div className="weather-cards-container">
        {commonWeatherData.map((data) => (
          <div key={data.id} className="weather-card" onClick={() => onCardClick(data.name)}>
            <h3>{data.name}</h3>
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
            <p className="description">{data.weather[0].description}</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind: {data.wind.speed} m/s</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonCitiesWeather;
