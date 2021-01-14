import React from "react";
import SearchCity from "./SearchCity";
import SpecificCities from "./SpecificCities";
import CurrentInfo from "./CurrentInfo";
import ThreeHoursForecastOneDay from "./ThreeHoursForecastOneDay.js";
import FiveDaysForecast from "./FiveDaysForecast.js";
import GitHubLink from "./GitHubLink.js";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="WeatherApp">
        <h1 className="HeaderMainTitle">Real Time - Weather Report</h1>

        <SearchCity />
        <br />
        <SpecificCities />
        <CurrentInfo />
        <ThreeHoursForecastOneDay />
        <FiveDaysForecast />
        <span id="Weather-app">Weather-App</span>
      </div>
      <GitHubLink />
    </div>
  );
}

//function App() {
  //return (
    //<div className="App">
      //<h1>Hola Soy Maria</h1>
     
      //<Weather city="Atlanta"/>
  
 //   </div>
  //);
//}

//export default App;
