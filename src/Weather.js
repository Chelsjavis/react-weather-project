import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [displayWeather, setDisplayWeather] = useState({});

  function handleResponse(response) {
    setDisplayWeather({
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });

    console.log(response);
    setReady(true);
  }

  if (ready) {
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
          <h1>{displayWeather.city}</h1>
          <ul>
            <li>Tuesday 5pm</li>
            <li>Sunny</li>
          </ul>
          <div className="d-flex justify-content-between">
            <div>
              <img href="./cloudy.svg" className="img-fluid" alt="cloudy"></img>
              <span className="temperature">
                {Math.round(displayWeather.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
            <div>
              <ul>
                <li>Humidity: {displayWeather.humidity}% </li>
                <li>Wind: {displayWeather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    let apiKey = "1894f4b60349tcab94fb26933d94a5o1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.currentCity}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
