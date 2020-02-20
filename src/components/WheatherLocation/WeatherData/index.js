import React,{Component} from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import PropTypes from "prop-types";
import "./styles.css";

const WeatherData = ({
  data: { temperature, weatherState, humidity, wind }
}) => (
  <div className="weatherDataCont">
    <WeatherTemperature
      temperature={temperature}
      weatherState={weatherState}
    ></WeatherTemperature>
    <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
  </div>
);

WeatherData.protoTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
  })
};

export default WeatherData;
