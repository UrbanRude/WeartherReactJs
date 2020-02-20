import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import { FOG } from "../../../constants/weather";
import './styles.css';

const WeatherData = () => (
  <div className="weatherDataCont" >
    <WeatherTemperature
      temperature={32}
      weatherState={FOG}
    ></WeatherTemperature>
    <WeatherExtraInfo humidity={35} wind={45}></WeatherExtraInfo>
  </div>
);

export default WeatherData;
