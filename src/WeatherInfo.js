import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <FormattedDate date={props.data.date} />

        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="d-flex justify-content-between">
        <div>
          <img
            href={props.data.iconUrl}
            className="img-fluid"
            alt={props.data.description}
          ></img>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C</span>
        </div>
        <div>
          <ul>
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
