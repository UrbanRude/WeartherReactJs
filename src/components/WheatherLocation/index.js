import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WheatherLocation = () => (
    <div>
        <Location city={"Estado de Mexico"}></Location>
        <WeatherData></WeatherData>
    </div>
)

export default WheatherLocation;