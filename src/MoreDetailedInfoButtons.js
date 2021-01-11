import React from "react";
import "./MoreDetailedInfoButtons.css";

export default function MoreDetailedInfoButtons() {
  return (
    <div>
      <div className="col-12">
        <button className="more-detailed-info-buttons" id="temperature-button">
          {" "}
          Temperature{" "}
        </button>
      </div>

      <div className="col-12">
        <button className="more-detailed-info-buttons" id="wind-button">
          {" "}
          Wind{" "}
        </button>
      </div>

      <div className="col-12">
        <button className="more-detailed-info-buttons" id="humidity-button">
          {" "}
          Humidity{" "}
        </button>
      </div>
    </div>
  );
}