import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

function WeatherForecast(props) {
  const handleResponse = (response) => {
    console.log(response.data);
  };

  let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row main">
        <div className="col sub">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col sub">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col sub">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col sub">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col sub">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col sub">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
