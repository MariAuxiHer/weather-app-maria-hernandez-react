import React from "react";
import "./SpecificCities.css";

export default function SpecificCities() {
  return (
    <div className="container">
      <div className="row extra-space">
        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button
            type="button"
            className="city-per-continent-buttons"
            id="Caracas"
            value="Caracas"
          >
            {" "}
            Caracas{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button
            type="button"
            className="city-per-continent-buttons"
            id="Nashville"
            value="Nashville"
          >
            {" "}
            Nashville{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button className="city-per-continent-buttons" id="Nairobi">
            {" "}
            Nairobi{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button className="city-per-continent-buttons" id="Tokyo">
            {" "}
            Tokyo{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button className="city-per-continent-buttons" id="Madrid">
            {" "}
            Madrid{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 col-4">
          <button className="city-per-continent-buttons" id="Fiji">
            {" "}
            Fiji{" "}
          </button>
        </div>
      </div>
    </div>
  );
}