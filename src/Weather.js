import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});

  function handleResponse(response) {
    setweatherData({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl:
        "https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg",
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
          <h1>{weatherData.city}</h1>
          <ul>
            <FormattedDate date={weatherData.date} />
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="d-flex justify-content-between">
            <div>
              <img
                href={weatherData.iconUrl}
                className="img-fluid"
                alt={weatherData.description}
              ></img>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
            <div>
              <ul>
                <li>Humidity: {weatherData.humidity}% </li>
                <li>Wind: {weatherData.wind} km/h</li>
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
