import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SearchWeather from "./SearchWeather";

function App() {
  // let apiKey = "7ed20b3871d9e4f3837ef60fa128bf28";
  // let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

  // let [currentCity, setCurrentCity] = useState(null);

  // navigator.geolocation.getCurrentPosition(currentPosition);

  // function currentPosition(position) {
  //   let lat = position.coords.latitude;
  //   let lon = position.coords.longitude;
  //   axios
  //     .get(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  //     .then(currentLocation);

  //   function currentLocation(response) {
  //     setCurrentCity(response.data.name);
  //   }
  // }

  // function searchDay() {
  //   let newdate = date * 1000;
  //   let day = newdate.getDay();
  //   console.log(day);
  //   let forecastDates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   return forecastDates[day];
  // }

  // let apiUrlForecast = "https://api.openweathermap.org/data/2.5/onecall?";

  return (
    <div className="App">
      <div class="border m-5 p-5 rounded shadow p-3 mb-5 bg-body rounded">
        <SearchWeather defaultCity="Paris" units="metric" />
      </div>
      <span>
        <a href="https://github.com/OlgaD-crypto/my_projects">Open code by</a>
        Olga Diubchenko
      </span>
    </div>
  );
}

export default App;
