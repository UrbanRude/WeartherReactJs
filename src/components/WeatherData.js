import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtraInfo humidity={35} wind={45} ></WeatherExtraInfo>
    </div>
);

export default WeatherData;