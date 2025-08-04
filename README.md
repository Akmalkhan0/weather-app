# 🌦️ Weather App (React + Vite)

Weather App is a responsive and modern React application that allows users to search any city and instantly get real-time weather data along with the city’s location displayed on Google Maps. Built using **React + Vite**, it integrates the **OpenWeatherMap** and **Google Maps API**, and features **dark/light mode**, detailed weather information, and clean UI design — ideal for daily weather checks across the globe.

## 🔗 Live Demo

👉 [akmweather.vercel.app](https://akmweather.vercel.app)

## 📸 Screenshot & GIF Video
<p>
<img width="500" alt="image" src="https://i.ibb.co/B2XHdztR/Screenshot-2025-08-05-032904.png" />
<img alt="weather App Exploring Gif" src="https://github.com/user-attachments/assets/d42793c6-25ca-42ee-a785-c924b685c241">
</p>

## 🚀 Features

- 🌍 Search any city to get current weather
- 📡 Real-time weather data from **OpenWeatherMap API**
- 🗺️ Displays exact city location on an embedded **Google Map**
- 🌡️ Shows detailed weather info: temperature, feels-like temp, humidity, pressure, wind speed, etc.
- 🌗 Toggle between **Dark and Light Mode**
- ❌ Graceful handling for invalid city names and API errors
- 📱 Responsive design across devices

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, JavaScript, HTML, CSS
- **APIs:**
  - [OpenWeatherMap API](https://openweathermap.org/api)
  - [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- **Deployment:** Vercel

## 📦 Getting Started

Follow the steps below to set up and run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/akmalkhan0/weather-app.git
cd weather-app
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up API Keys

Create a `.env` file in the root directory and add the following:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

> 🔒 Make sure to add `.env` to your `.gitignore` file to keep your API keys private.

### 4️⃣ Run the App Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to view the app.

---

## 🗂️ Folder Structure


```text
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── components/
│   │   ├── About.jsx
│   │   ├── CityMap.jsx
│   │   ├── CommonCitiesWeather.css
│   │   ├── CommonCitiesWeather.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherDisplay.css
│   │   └── WeatherDisplay.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

---

## ✨ Future Improvements

* 🔁 5-day or hourly weather forecast
* 📍 Auto-detect user location via geolocation
* 🌡️ °C / °F unit toggle
* 🎨 Weather-based background animation or images

---

## 🙋‍♂️ Author

**Akmal Khan**
📧 [akmalkhann0@gmail.com](mailto:akmalkhann0@gmail.com)
🔗 [LinkedIn](https://linkedin.com/in/akmalkhan0)
