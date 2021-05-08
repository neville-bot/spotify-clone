import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="container">
      <header>
        <h2>Good Afternoon</h2>
      </header>

      <div className="grid playlist">
        <a href="playlist-one">Super What?</a>
        <a href="playlist-two">Last Podcast On the Left</a>
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

export default Home;
