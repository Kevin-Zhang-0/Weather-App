import React from 'react';
import './styles.css';
import moment from 'moment';

const WeatherCard = ({weatherData}) => (
  <div className="main">
      <p className="header">{weatherData.name}</p>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperature: {tempConvert(weatherData.main.temp)}&deg;F </p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
        
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Hi:{tempConvert(weatherData.main.temp_max)}&deg;F Low:{tempConvert(weatherData.main.temp_min)}&deg;F</p>
        <p className="sunrise-sunset">Wind Speed: {weatherData.wind.speed} MPH</p>
      </div>



      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
)
function tempConvert(kelvin){
  return (((kelvin -273.15)*1.8)+32).toFixed(0);
}

export default WeatherCard;