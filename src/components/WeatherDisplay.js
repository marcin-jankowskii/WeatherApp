import React from "react";
import "./assets/WeatherDisplay.css";

function WeatherDisplay( {data}) {
    return (
        <div className="weather-display">
        <h2>Weather in {data.name}</h2>
        <p>Temperature: {(data.main.temp - 273).toFixed(2)}°C</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
        <p>Humidity: {data.main.humidity}%</p>
        </div>
    );
}

export default WeatherDisplay;