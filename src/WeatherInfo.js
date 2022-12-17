import React from "react";
import FormattedDate from "./FormattedDate";

function WeatherInfo(props) {
  const iconUrl = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`;
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city},{props.data.country}
      </h1>
      <ul>
        <FormattedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-8">
          <img className="icon" src={iconUrl} alt={props.data.description} />
          <span className="temp">{Math.round(props.data.temperature)}</span>
          <small>°C | °F </small>
        </div>
        <div className="col-3">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind:{Math.round(props.data.wind)}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
