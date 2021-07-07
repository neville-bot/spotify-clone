import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="root-container">
      <div className="sidebar flex column">
        <div className="sidebar-top flex column">
          <img
            src="../../spotify-icons-logos/logos/spotifyWhite.png"
            alt="F****** Logo"
            height="20px"
            width="200px"
          />

          <div className="sidebar-home">
            <a href="Home">Home</a>
            <a href="search">Search</a>
            <a href="library">Your Library</a>{" "}
          </div>
          <div>
            <a href="create-playlist">Create Playlist</a>
            <a href="liked-songs">Liked Songs</a>
          </div>
        </div>
        <hr />

        <div className="playlist ">
          <a href="playlist-one">Beats by Nac</a>
          <a href="playlist-two">8k</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
          <a href="playlist">Anotha One</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
