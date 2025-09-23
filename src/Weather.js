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
              className="search-input"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
        <h1>Sydney</h1>
        <div className="d-flex justify-content-between">
          <div>
            <img
              href="https://www.gstatic.com/weather/conditions2023/2023.2/svg/sunny_light.svg"
              className="img-fluid"
              alt="sunny"
            ></img>
            16deg
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 58% </li>
              <li>Wind: 16 km/h</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Weather</li>
              <li>Tuesday 5pm</li>
              <li>Sunny</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
