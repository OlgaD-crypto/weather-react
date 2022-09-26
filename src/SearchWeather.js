import React, { useState } from "react";
import Units from "./Units";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

export default function SearchWeather(props) {
  let [city, setCity] = useState(props.defaultCity);

  function search() {
    let apiKey = "7ed20b3871d9e4f3837ef60fa128bf28";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
    axios
      .get(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`)
      .then(showTemperature);
  }
  function GetCity(event) {
    setCity(event.target.value);
  }

  function searchData(event) {
    event.preventDefault();
    search();
  }

  let [weather, setWeather] = useState({ ready: false });

  function showTemperature(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      correctcity: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      date: response.data.dt,
    });
  }

  if (weather.ready) {
    return (
      <div className="SearchWeather">
        <div className="row">
          <div className="col-6 mx-5">
            <form onSubmit={searchData}>
              <div className="input-group mb-3" id="search-city">
                <input
                  type="search"
                  id="city-to-search"
                  className="form-control p-3"
                  placeholder="Enter your city here"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  onChange={GetCity}
                />
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                />
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-binoculars-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z" />
              </svg> */}
                {/* <button
                type="button"
                class="btn btn-outline-primary"
                id="button-search"
                onClick={searchData}
              > */}

                {/* </button> */}
              </div>
            </form>
            {/* <Units unit="metric" /> */}
          </div>

          <Weather data={weather} />
        </div>
      </div>
    );
  } else {
    console.log(city);
    search();

    return "Loading...";
  }
}
