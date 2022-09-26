import React, { useState } from "react";
// import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Units(props) {
  //  let [units, setUnits] = useState(props.unit);

  // function unitsValue(event) {
  //     event.preventDefault();
  //     setUnits(event.target.value);
  // }

  return (
    <div className="col-1 mx-5">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="fahrenheit"
          name="flexRadioDefault"
          value="imperial"
          // checkßed={units === "imperial"}
          // onChange={unitsValue}
        />
        <label className="form-check-label" for="flexRadioDefault1">
          {" "}
          F°{" "}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="celsius"
          name="flexRadioDefault"
          value="metric"
          // checked={units === "metric"}
          // onChange={unitsValue}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          {" "}
          C°{" "}
        </label>
      </div>
    </div>
  );
}
