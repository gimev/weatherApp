import React from 'react';
import './style.css';
import WeatherData from './components/WeatherData';

const WeatherLocation = ({city}) =>(
    <div className="weather-location">
    <h2>{city}</h2>
        <WeatherData
            icon="day-sunny"
            currentTemp={20}
            maxTemp={25}
            minTemp={11}
        />
    </div>

);

export default WeatherLocation;


