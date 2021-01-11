import React, {useState} from "react";
import axios from "axios";

export default function Weather(props){
    let [temperature, setTemperature] = useState(null);

  function displayTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  let apiKey = "ac3c02e9439b2a5f701addd7d8527168";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayTemperature);

  if (temperature !== null) {
    return (
      <h1>
        {" "}
        The temperature in {props.city} is {temperature}°C{" "}
      </h1>
    );
  } else {
    return <h1> The temperature in {props.city} is loading °C </h1>;
  }
}