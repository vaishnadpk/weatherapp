import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

function WeatherInfo(props) {
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
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={50} />
          </div>
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="col-3">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind:{Math.round(props.data.wind)}m/s</li>
          </ul>
        </div>
      </div>
      <WeatherForecast />
    </div>
  );
}

export default WeatherInfo;
