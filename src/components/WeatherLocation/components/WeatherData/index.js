import React from 'react';
import Weathericons from 'react-weathericons';
import PropTypes from 'prop-types';

const WeatherData = (props) => { 
  const {currentTemp, maxTemp, minTemp, icon} = props;

  return <div className="weather-data">
      <div className="weather-data-icon">
      <Weathericons name={icon} size="3x" />
      </div>
        <h2 className="weather-data-temp">{currentTemp}°C</h2>
        <h4 className="weather-data-max-temp">{maxTemp}°C</h4>
        <h4 className="weather-data-min-temp">{minTemp}°C</h4>
    </div>

};

WeatherData.propTypes = {
  icon : PropTypes.string.isRequired,
  currentTemp : PropTypes.number.isRequired,
  maxTemp : PropTypes.number.isRequired,
  minTemp : PropTypes.number.isRequired

};

export default WeatherData;