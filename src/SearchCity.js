import React from "react";
import "./SearchCity.css";

export default function SearchCity() {
  return (
    <div className="row">
      <div className="col-1">
        <i className="fas fa-city"></i>
      </div>

      <div className="col-8">
        <form id="submit-city">
          <input
            type="search"
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
