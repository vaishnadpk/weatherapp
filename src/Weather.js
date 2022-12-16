import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  if (weatherData.ready) {
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
    return (
      <div className="Weather">
        <form className="formStyle">
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <h1>
          {weatherData.city},{weatherData.country}
        </h1>
        <ul>
          <FormattedDate date={weatherData.date} />
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-8">
            <img src={iconUrl} alt={weatherData.description} />
            <span className="temp">
              {Math.round(weatherData.temperature)}°C
            </span>
          </div>
          <div className="col-3">
            <ul>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind:{Math.round(weatherData.wind)}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2f554689e2d5b3aa846a49469f08491e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only"></span>
      </div>
    );
  }
}
