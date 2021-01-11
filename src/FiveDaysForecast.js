import React from "react";
import "./FiveDaysForecast.css";

export default function FiveDaysForecast() {
  return (
    <div className="five-days-forecast">
      <h2 className="forecast-title">Five Days Forecast</h2>
      <div className="container">
        <div className="row" id="forecast">
          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> MON </span>
            <br />
            <i className="fas fa-cloud-sun-rain"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 14°</span>|
              <span className="smaller-numbers minimum"> 8° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> TUE </span>
            <br />
            <i className="fas fa-cloud-sun-rain"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 15°</span>|
              <span className="smaller-numbers minimum"> 13° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> WED </span>
            <br />
            <i className="fas fa-cloud-sun-rain"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 14°</span>|
              <span className="smaller-numbers minimum"> 10° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> THU </span>
            <br />
            <i className="fas fa-cloud-sun-rain"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 10°</span>|
              <span className="smaller-numbers minimum"> 4° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> FRI </span>
            <br />
            <i className="fas fa-cloud-sun-rain"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 5°</span>|
              <span className="smaller-numbers minimum"> 3° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> SAT </span>
            <br />
            <i className="fas fa-cloud"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 5°</span>|
              <span className="smaller-numbers minimum"> 2° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> SUN </span>
            <br />
            <i className="far fa-snowflake"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 4°</span>|
              <span className="smaller-numbers minimum"> 2° </span>
            </div>
          </div>

          <div className="col-xl-2 col-2" id="col-temp">
            <br />
            <span> MON </span>
            <br />
            <i className="far fa-snowflake"></i>
            <br />
            <div className="degree">
              <span className="smaller-numbers maximum"> 4°</span>|
              <span className="smaller-numbers minimum"> 2° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
