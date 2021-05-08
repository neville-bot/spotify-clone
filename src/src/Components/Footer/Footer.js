import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="container flex">
        <a href="current-song">String Quartet</a>
        <img src="" alt="Heart" />
        <div className="song-control">
          <button>Shuffle</button>
          <button>Back</button>
          <button>Play/Pause</button>
          <button>Forward</button>
          <button>Shuffle</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
