import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUNNY } from "../../constants/weather";

const location = "Buenos Aires,ar";
const api_key = "b6907d289e10d714a6e88b30761fae22";
const url_base_weatehr = "https://samples.openweathermap.org/data/2.5/weather";
const api_weatehr = `${url_base_weatehr}?q=${location}&appid=${api_key}`;

const data = {
  temperature: 5,
  weatherState: SUNNY,
  humidity: 10,
  wind: 10
};

const data2 = {
  temperature: 24,
  weatherState: SUNNY,
  humidity: 12,
  wind: 15
};

class WheatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires",
      data: data
    };
  }

  handleUpdateClick = () => {
    fetch(api_weatehr).then( (rsp) => rsp.body).then( (responseBody) =>  console.log(responseBody));
    this.setState({ city: "Mexico", data: data2 });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WheatherLocation;
