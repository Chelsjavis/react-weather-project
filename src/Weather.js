import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="search-input w-100"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn search-button w-100"
            ></input>
          </div>
        </div>
        <h1>Sydney</h1>
        <ul>
          <li>Tuesday 5pm</li>
          <li>Sunny</li>
        </ul>
        <div className="d-flex justify-content-between">
          <div>
            <img href="./cloudy.svg" className="img-fluid" alt="cloudy"></img>
            <span className="temperature">16</span>
            <span className="units">°C</span>
          </div>
          <div>
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 58% </li>
              <li>Wind: 16 km/h</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
