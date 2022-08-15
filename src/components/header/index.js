import React from "react";
import PropTypes from "prop-types";
import menuIcon from "../../assets/menu.png";
import logoIcon from "../../assets/logo.png";
import notificationIcon from "../../assets/notification.png";
import addIcon from "../../assets/plus.png";
import userIcon from "../../assets/user.png";
import Contents from "../contents";

const Header = () => {
  return (
    <div>
      <div id="header">
        <img src={menuIcon} alt="menu" id="menu-icon" />
        <div id="header-left">
          <div id="logo">
            <img src={logoIcon} alt="logo" />
          </div>
          <div id="header-search">
            <input onChange="" placeholder="Search user..." type="text" />
            <button onClick="">Search</button>
          </div>
          <div id="header-links">
            <div className="link">Pull Requests</div>
            <div className="link">Issues</div>
            <div className="link">Market Place</div>
            <div className="link">Explore</div>
          </div>
        </div>
        <div className="flex"></div>
        <div id="header-right">
          <div id="header-icons">
            <button id="notification-btn">
              <img
                className="icon"
                src={notificationIcon}
                alt="notification icon"
              />
            </button>
            <button id="plus-btn">
              <img className="icon" src={addIcon} alt="add icon" />
              <span>&#9662;</span>
            </button>
            <button id="avatar-btn">
              <img className="avatar" src={userIcon} alt="add icon" />
              <span>&#9662;</span>
            </button>
          </div>
        </div>
      </div>
      {/* passing the data to the first child will be here*/}
      {/* <Contents /> */}
    </div>
  );
};

Header.prototype = {
  avatarUrl: PropTypes.string,
};

export default Header;
