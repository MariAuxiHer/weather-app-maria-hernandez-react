import React, { useState } from "react";
import "./SearchCity.css";

export default function SearchCity() {
let [city, setCity] = useState("");

function displayCityName(event){
  event.preventDefault();
  alert(city);
}

function updateCity(event){
  event.preventDefault();
  setCity(event.target.value);
}

//let apiKey = "ac3c02e9439b2a5f701addd7d8527168";
//let apiUrl = `api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}`


  return (
    <div className="row">
      <div className="col-1">
        <i className="fas fa-city"></i>
      </div>

      <div className="col-8">
        <form id="submit-city" onSubmit={displayCityName}>
          <input
            type="search"
            onChange={updateCity}
            placeholder="Type a City"
            id="enter-city"
            autoComplete="off"
          />

          <input type="submit" value="Search" id="search-button" />
        </form>
      </div>

      <div className="col-sm-3 col-1">
        <i className="fas fa-street-view" id="location-button">
          {" "}
        </i>
      </div>
    </div>
  );
}
