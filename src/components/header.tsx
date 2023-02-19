import React from "react";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="player">
        <div className="grey_container">
          <button className="player_btn">
            <img src="icons/disk.svg" alt="disk" width="50" height="50" />
          </button>
        </div>
        <div className="black_container"></div>
        <div className="black_container">
          <button className="player_btn">
            <img src="icons/prev.svg" alt="prev" width="30" height="30" />
          </button>
        </div>
        <a className="black_container">
          <button className="player_btn">
            <img src="icons/play.svg" alt="play" width="50" height="50" />
          </button>
        </a>
        <div className="black_container">
          <button className="player_btn">
            <img src="icons/next.svg" alt="next" width="30" height="30" />
          </button>
        </div>
        <div className="black_container">
          <button className="player_btn">
            <img src="icons/heart.svg" alt="heart" width="30" height="30" />
          </button>
        </div>
      </div>
      <div className="logo_container">
        <span className="logo"> last.fm </span>
      </div>
      <div className="navigation">
        <div className="nav_item">
          <Link className="link" to="/search">
            <img src="icons/search.svg" width="20" height="20" alt="serach" />
          </Link>
        </div>
        <div className="nav_item">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="nav_item">
          <a href="/" className="link">
            Live
          </a>
        </div>
        <div className="nav_item">
          <a href="/" className="link">
            Music
          </a>
        </div>
        <div className="nav_item">
          <a href="/" className="link">
            Charts
          </a>
        </div>
        <div className="nav_item">
          <a href="/" className="link">
            Events
          </a>
        </div>
        <div className="nav_item">
          <a href="/" className="link">
            Features
          </a>
        </div>
        <div className="nav_item">
          <a href="/" className="link user_link">
            <img
              src="icons/user.svg"
              alt="user"
              width="30"
              height="30"
              className="user_img"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
