import React from "react";
import FormattedDate from "./FormattedDate";

export default function Climateinfo(props) {
  return (
    <div className="Climateinfo">
      <div className="city">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img src={props.data.iconUrl} alt={props.data.description} />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}