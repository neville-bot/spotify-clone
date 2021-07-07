import React from "react";
import "./Albums.css";
function Albums() {
  return (
    <div className="container">
      <header>
        <h2>Good Afternoon</h2>
      </header>

      <div className="grid playlist">
        <div className="album-container">
          {" "}
          <a href="playlist-one">Super What?</a>
        </div>
        <div className="album-container">
          {" "}
          <a href="playlist-two">Last Podcast On the Left</a>
        </div>
        <a href="playlist-three">Dark Academia Classical</a>
        <a href="playlist-four">Joe Rogan Experience</a>
      </div>
      <div className="grid album bg">
        <a href="playlist-three">Dark academia Classical</a>
        <a href="playlist-one">Super What?</a>
      </div>
    </div>
  );
}

export default Albums;
