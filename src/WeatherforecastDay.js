import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherforecastDay(props) {
  const { weather, temp, dt } = props.data;

  function max() {
    let temperature = Math.round(temp.max);
    return `${temperature}°`;
  }

  function min() {
    let temperature = Math.round(temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  if (!weather || weather.length === 0) {
    return null;
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{max()}</span>
        <span className="WeatherForecast-temperature-min">{min()}</span>
      </div>
    </div>
  );
}

export default WeatherforecastDay;
