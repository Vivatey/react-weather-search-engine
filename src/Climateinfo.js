import React from "react";
import FormattedDate from "./FormattedDate";
import ClimateIcon from "./ClimateIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <ClimateIcon code={props.data.icon} />
            {/* <img src={props.data.iconUrl} alt={props.data.description} /> */}
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
