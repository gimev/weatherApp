import React from 'react';
import './style.css';
import WeatherData from './components/WeatherData';
import getApiUrlByLocation from '../../services/getApiUrlByLocation';

class WeatherLocation extends React.Component {
    constructor(props) {
        super(props);




        this.state = {
            currentTemp: 25,
            maxTemp: 40,
            minTemp: 15,
            icon: "day-sunny",
            errorMessage: null
        };
    }
    //llamada a la api
    componentWillMount(){
        
        console.log("llamando a la api");
            //modificar la cadena para agregar props.city, y cambiar la ciudad desde App.js
            const url = getApiUrlByLocation(this.props.city);
            //fertch espera como parametro la url de la api, puedeo pasarle el tipo d datos q espero. No funciona en todos los navegadores
            //         
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Perico,AR&appId=bb6154c94b2283f50254afec83fe1a53&units=metric")
            .then(response => { //lamada fetch, llamada asincrona
            //the devuelve obj response, una respuesta del servidor
            //el catch se usa x ej. cuando no se puede acceder a la red, no pudo realizar la solicitud
            if(response.ok){
                return response.json();
            }else{
                throw Error("No se encontró la ciudad");
            }

        }).then(data => {
            console.log("me respondio la api");
            //objeto con clave y valor de cada propiedad q quiero modificar el estado
            this.setState({
                    currentTemp: data.main.temp,
                    maxTemp: data.main.temp_max,
                    minTemp: data.main.temp_min

            });
            
        }).catch(error => {
            console.log("Entró al catch...");
            console.log(error);
        });
        
        // Si cambio los datos siempre va a llamar a la api y va a actualizar los datos...


    }

    render() {
        return <div className="weather-location">
            <div style={{display: this.state.errorMessage !== null ? "block": "none"}}>
                {this.state.errorMessage}
            </div>
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


