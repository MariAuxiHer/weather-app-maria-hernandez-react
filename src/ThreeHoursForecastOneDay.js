import React from "react";
import "./ThreeHoursForecastOneDay.css";

export default function ThreeHoursForecastOneDay() {
  return (
    <div className="detailed-information">
      <h2 className="weather-throughout-the-day">Temperature</h2>

      <div className="container">
        <div className="row" id="detailed-information">
          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> 22:00 </span>
            <br />
            <i className="fas fa-cloud"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 14°</span>|
              <span className="smaller-numbers minimum"> 13° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> 01:00 </span>
            <br />
            <i className="fas fa-cloud"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 14°</span>|
              <span className="smaller-numbers minimum"> 14° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> 04:00 </span>
            <br />
            <i className="fas fa-cloud-sun-rain"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 14°</span>|
              <span className="smaller-numbers minimum"> 14° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> 07:00 </span>
            <br />
            <i className="fas fa-cloud"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 14°</span>|
              <span className="smaller-numbers minimum"> 14° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> 10:00 </span>
            <br />
            <i className="fas fa-cloud-sun-rain"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 14°</span>|
              <span className="smaller-numbers minimum"> 14° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> 13:00 </span>
            <br />
            <i className="fas fa-cloud-sun-rain"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 14°</span>|
              <span className="smaller-numbers minimum"> 14° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> 16:00 </span>
            <br />
            <i className="fas fa-cloud"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 15°</span>|
              <span className="smaller-numbers minimum"> 15° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> 19:00 </span>
            <br />
            <i className="fas fa-cloud"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 14°</span>|
              <span className="smaller-numbers minimum"> 14° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
