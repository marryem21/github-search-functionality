import React, { useState } from "react";
import logoIcon from "../../assets/logo.png";
import notificationIcon from "../../assets/notification.png";
import addIcon from "../../assets/plus.png";
import userIcon from "../../assets/user.png";
import Contents from "../contents";
import axios from "axios";

const Header = () => {
  // state to store chnaging data in the search bar
  const [searchInput, setSearchInput] = useState("");
  //state to store data coming from the repositories' API
  const [repos, setRepos] = useState([]);
  //state to store the User's data coming from the user infor's API
  const [userInfo, setUserInfo] = useState([]);
  //handling changes on the inputted data in the top search bar
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    // console.log(searchInput);
  };
  //handling the click on the search button of the top search bar (API calls here)
  const handleClick = async () => {
    // console.log(searchInput);
    try {
      //repositories fetching
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      );
      //User info's fetching
      const userData = await axios(
        `https://api.github.com/users/${searchInput}`
      );
      //storing the user's info in the state userInfo
      setUserInfo(userData);
      // console.log("got to the header", userInfo);
      //storing the repositories data fetched in the state repos
      setRepos(result);
    } catch (err) {
      console.log(err);
    }
    console.log("length is", repos.data.length);
  };
  return (
    <div>
      <div id="header">
        <div id="header-left">
          <div id="logo">
            <img src={logoIcon} alt="logo" />
          </div>
          <div id="header-search">
            <input
              // function to handle changes on the input area
              onChange={handleChange}
              placeholder="Search user..."
              type="text"
            />
            {/* button to start API calls  */}
            <button onClick={handleClick}>Search</button>
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
      {/* passing the data to the first child */}
      <Contents userInfo={userInfo} repos={repos} />
    </div>
  );
};

export default Header;
