import React from "react";
import "./CurrentInfo.css";
import MoreDetailedInfoButtons from "./MoreDetailedInfoButtons";

export default function CurrentInfo() {
  return (
    <div id="current-info">
      <div className="row">
        <div className="col" id="city-current-info">
          <h2 className="city">Paris</h2>

          <p className="current-time-weather">
            <span className="current-day-and-time">
              {" "}
              Last Updated: December, 21. <br /> Monday, 19:02{" "}
            </span>
            <br />
            <span id="description"> Mist </span>{" "}
            <span id="icon">
              {" "}
              <i className="fas fa-smog"></i>{" "}
            </span>
          </p>

          <div id="current-temperture">
            <span id="tempe"> 13</span>{" "}
            <span id="celsius-farenheit-smaller-size">
              <a href="#" id="celsius" className="active">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheit">
                ℉
              </a>
            </span>
          </div>
        </div>

        <div className="col" id="more-detailed-info">
          <div className="container">
            <div className="row" id="more-detailed-info-center">
              <div className="col-12">
                <span id="humidity"> Humidity: 93% </span>
              </div>

              <div className="col-12">
                <span id="wind"> Wind: 5km/hr </span>
              </div>

              <div className="col-12">
                <span id="sunrise"> Sunrise: 08:41 </span>
              </div>

              <div className="col-12">
                <span id="sunset"> Sunset: 16:56 </span>
              </div>
              <MoreDetailedInfoButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}