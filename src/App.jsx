import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import CityMap from './components/CityMap';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import CommonCitiesWeather from './components/CommonCitiesWeather';
import './App.css';

function App() {
  const [city, setCity] = useState('');

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [mapCoords, setMapCoords] = useState(null);
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'
  const openWeatherMapApiKey = "4de5be02c2439750e1d74f052a120068";
  const googleMapsApiKey = process.env.VITE_OPEN_MAP;

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const fetchWeather = async (inputCity = city) => {
    if (!inputCity) {
      setError('Please enter a city.');
      setWeatherData(null);
      setMapCoords(null);
      return;
    }
    if (!openWeatherMapApiKey) {
      setError('OpenWeatherMap API key is not set.');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${openWeatherMapApiKey}&units=metric`
      );
      setWeatherData(response.data);
      setMapCoords({
        lat: response.data.coord.lat,
        lng: response.data.coord.lon,
      });
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
      setMapCoords(null);
    }
  };

  return (
    <Router >
      <div className={`App ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <>
              <h1>Weather App</h1>
              <SearchBar onSearch={fetchWeather} city={city} setCity={setCity} />
              {error && <p className="error-message">{error}</p>}
              {weatherData && <WeatherDisplay weatherData={weatherData} />}
              {mapCoords && googleMapsApiKey && (
                <CityMap lat={mapCoords.lat} lng={mapCoords.lng} apiKey={googleMapsApiKey} />
              )}
              <CommonCitiesWeather apiKey={openWeatherMapApiKey} theme={theme} onCardClick={(cityName) => { setCity(cityName); fetchWeather(cityName); }} />
            </>
          } />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
