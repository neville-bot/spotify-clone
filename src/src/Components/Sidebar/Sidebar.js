import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="root-container">
      <div className="sidebar flex column">
        <div className="sidebar-top">
          <img
            src="../../spotify-icons-logos/logos/spotifyWhite.png"
            alt="F****** Logo"
            height="20px"
            width="200px"
          />

          <div>
            <a href="Home">Home</a>
            <a href="search">Search</a>
            <a href="library">Your Library</a>
            <div className="playlist">
              <a href="create-playlist">Create Playlist</a>
              <a href="liked-songs">Liked Songs</a>
            </div>

            <div className="playlist">
              <a href="playlist-one">Beats by Nac</a>
              <a href="playlist-two">8k</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
