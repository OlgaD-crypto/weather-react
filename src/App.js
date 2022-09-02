import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div class="border m-5 p-5 rounded shadow p-3 mb-5 bg-body rounded">
        <div class="row">
          <div class="col-6 mx-5">
            <div class="input-group mb-3" id="search-city">
              <input
                type="search"
                id="city-to-search"
                class="form-control p-3"
                placeholder="Enter your city here"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <button
                type="button"
                class="btn btn-outline-primary"
                id="button-search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-binoculars-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z" />
                </svg>
              </button>

              {/* <!-- <button type="button" id="location">Get current location</button> --> */}
            </div>
          </div>
          <div class="col-1 mx-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="fahrenheit"
                name="flexRadioDefault"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                F°{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="celsius"
                name="flexRadioDefault"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                {" "}
                C°{" "}
              </label>
            </div>
          </div>
        </div>
        <h3>
          <div class="container">
            <div class="row">
              <div class="col-5" name="temp-today">
                <div id="temper">25°C</div>
                <div id="wind">Wind: 20 m/s</div>
                <div id="humidity">Humidity: 80%</div>
                <div id="description">Feeling: cloudy</div>
              </div>
              <div class="col-1">
                <div>🌞</div>
                {/* <img id="icon" src="" /> */}
              </div>
              <div class="col-2">
                <div id="city">Odessa</div>
                <div id="country">UA</div>
                <div id="date">21.08.2022</div>
                <div id="today">Sunday</div>
              </div>
            </div>
          </div>
          <div class="container">
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
      <span>
        <a href="https://github.com/OlgaD-crypto/my_projects">Open code by</a>
        Olga Diubchenko
      </span>
    </div>
  );
}

export default App;
