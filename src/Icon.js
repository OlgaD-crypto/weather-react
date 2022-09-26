import React from "react";
import { MDBIcon } from "mdbreact";

export default function Icon(props) {
  const codeMapping = {
    "01d": "sun",
    "01n": "moon",
    "02d": "cloud-sun",
    "02n": "cloud-moon",
    "03d": "cloud-sun-rain",
    "03n": "cloud-moon-rain",
    "04d": "cloud",
    "04n": "cloud",
    "09d": "cloud-rain",
    "09n": "cloud-rain",
    "10d": "cloud-showers-heavy",
    "10n": "cloud-showers-heavy",
    "11d": "unbrella",
    "11n": "umbrella",
    "13d": "snowflake",
    "13n": "snowflake",
    "50d": "smog",
    "50n": "smog",
  };

  return (
    <MDBIcon
      className="ms-1 text-primary"
      icon={codeMapping[props.code]}
      size="3x"
      color="red"
    />
  );
}
