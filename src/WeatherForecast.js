import React, { useState, useEffect } from "react";
import WeatherforecastDay from "./WeatherforecastDay";
import "./WeatherForecast.css";
import axios from "axios";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  const handleResponse = (response) => {
    setForecast(response.data.daily);
    setLoaded(true);
  };

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row main">
          {forecast.map((dailyForecast, index) => {
            if (index < 6) {
              return (
                <div className="col sub" key={index}>
                  <WeatherforecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="loader">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <h3>Loading...</h3>
      </div>
    );
  }
}

export default WeatherForecast;
