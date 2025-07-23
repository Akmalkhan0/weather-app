import React from 'react';
import { FaThermometerHalf, FaCloudShowersHeavy, FaSun, FaMapMarkedAlt, FaAdjust } from 'react-icons/fa';

function About() {
  return (
    <div className="about-page">
      <h2>About Our Weather App</h2>
      <p>This is a simple weather application built with React and Vite.</p>
      <p>It fetches weather data from the OpenWeatherMap API and displays it in a user-friendly format.</p>
      <h3>Key Features:</h3>
      <ul>
        <li><FaThermometerHalf /> Current temperature and "feels like" temperature</li>
        <li><FaCloudShowersHeavy /> Humidity, pressure, visibility, and wind details</li>
        <li><FaSun /> Sunrise and sunset times</li>
        <li><FaMapMarkedAlt /> Interactive map showing the searched city's location</li>
        <li><FaAdjust /> Dark and Light theme switching</li>
      </ul>
      <p>Our goal is to provide accurate and easily accessible weather information for any city worldwide.</p>
    </div>
  );
}

export default About;