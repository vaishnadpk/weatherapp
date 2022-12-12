import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
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

      <h1>Helsingborg</h1>
      <ul>
        <li>Sunday 22:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="weather description"
          />
          <span className="temp">-7°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 96%</li>
            <li>Wind:2m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
