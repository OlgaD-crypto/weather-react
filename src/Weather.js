import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "./Icon";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h3>
        <div className="container">
          <div className="row">
            <div className="col-5" name="temp-today">
              <div id="temper">{Math.round(props.data.temperature)}°C</div>
              <div id="wind">Wind: {Math.round(props.data.wind)} m/s</div>
              <div id="humidity">Humidity: {props.data.humidity} %</div>
              <div id="description">Feeling: {props.data.description}</div>
            </div>
            <div className="col-1">
              <Icon code={props.data.icon} />
              {/* <img
                id="icon"
                src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
                alt=""
              />
              <i class="wi wi-night-sleet"></i> */}
            </div>
            <div className="col-2">
              <div id="city">{props.data.correctcity}</div>
              <div id="country">{props.data.country}</div>
              <div id="date">
                {new Date(props.data.date * 1000).toLocaleDateString("en-UK")}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="row" id="forecast">
            <div class="col">
              <div id="day">Monday</div>
              <div>🌤 </div>
              {/* <img id="icon-f" src="" /> */}
              <div id="temp-f">23°C/25°C</div>
              <div id="wind-f">Wind: 15 km/h </div>
            </div>
            <div class="col">
              <div id="day">Monday</div>
              <div>🌤 </div>
              {/* <img id="icon-f" src="" /> */}
              <div id="temp-f">23°C/25°C</div>
              <div id="wind-f">Wind: 15 km/h </div>
            </div>
            <div class="col">
              <div id="day">Monday</div>
              <div>🌤 </div>
              {/* <img id="icon-f" src="" /> */}
              <div id="temp-f">23°C/25°C</div>
              <div id="wind-f">Wind: 15 km/h </div>
            </div>
            <div class="col">
              <div id="day">Monday</div>
              <div>🌤 </div>
              {/* <img id="icon-f" src="" /> */}
              <div id="temp-f">23°C/25°C</div>
              <div id="wind-f">Wind: 15 km/h </div>
            </div>
            <div class="col">
              <div id="day">Monday</div>
              <div>🌤 </div>
              {/* <img id="icon-f" src="" /> */}
              <div id="temp-f">23°C/25°C</div>
              <div id="wind-f">Wind: 15 km/h </div>
            </div>
          </div>
        </div>
      </h3>
    </div>
  );
}
