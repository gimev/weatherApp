import React from 'react';
import './style.css';
import WeatherData from './components/WeatherData';

class WeatherLocation extends React.Component {
    constructor(props) {
        super(props);




        this.state = {
            currentTemp: 25,
            maxTemp: 40,
            minTemp: 15,
            icon: "day-sunny"
        };
    }
    //llamada a la api
    componentWillMount(){
        console.log("llamando a la api");
            //modificar la cadena para agregar props.city, y cambiar la ciudad desde App.js
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Perico,AR&appId=bb6154c94b2283f50254afec83fe1a53&units=metric")
        .then(response => {
            return response.json();

        }).then(data => {
            console.log("me respondio la api");
            //objeto con clave y valor de cada propiedad q quiero modificar el estado
            this.setState({
                    currentTemp: data.main.temp,
                    maxTemp: data.main.temp_max,
                    minTemp: data.main.temp_min
            });
        });
    }

    render() {
        return <div className="weather-location">
            <h2>{this.props.city}</h2>
            <WeatherData
                icon={this.state.icon}
                currentTemp={this.state.currentTemp}
                maxTemp={this.state.maxTemp}
                minTemp={this.state.minTemp}
            />
        </div>
    }
}

export default WeatherLocation;


