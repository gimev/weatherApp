import React, { Component } from 'react';
import './App.css';

import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
        <nav className="navbar-top">
          The Weather App
        </nav>
        <div className="container">
         <WeatherLocation
         city="Salta"
         currentTemp={30}
         maxTemp={20}
         minTemp={15}
         />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
