import React, { useState } from "react";
import "./WeatherTemperature.css";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  const showFahrenheit = (e) => {
    e.preventDefault();
    setUnit("fahrenheit");
  };
  const showCelcius = (e) => {
    e.preventDefault();
    setUnit("celcius");
  };

  const setFahrenheit = () => {
    return (props.celcius * 9) / 5 + 32;
  };

  if (unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span className="temp">{Math.round(props.celcius)}</span>
        <small>
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
        </small>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temp">{Math.round(setFahrenheit())}</span>
        <small>
          <a href="/" onClick={showCelcius}>
            °C{" "}
          </a>
          | °F{" "}
        </small>
      </span>
    );
  }
}

export default WeatherTemperature;
