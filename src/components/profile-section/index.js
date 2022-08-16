import React from "react";
//in this component we get the user's infos (from the API call) passed as a prop and display them in the profile section
const ProfileSection = (props) => {
  const { userInfo } = props;

  // console.log("got to profile section", userInfo);
  //if there is valid user data returned we display it
  if (userInfo.length !== 0)
    return (
      <div id="profile-section">
        <div className="profile">
          <div className="avatar">
            {/* the user's image as an avatar */}
            <img src={userInfo.data.avatar_url} alt="" />
          </div>
          <div id="personal-info">
            {/* the user's name  */}
            <div className="name">{userInfo.data.name}</div>
            {/* the user's login */}
            <div className="username">{userInfo.data.login}</div>
          </div>
        </div>
        <button>
          <span>&#9786;</span>
          <span id="set-status">Set status</span>
        </button>
        {/* the user's bio */}
        <div className="bio">{userInfo.data.bio}</div>
      </div>
    );
  //if no data is back we displayed nohing
  return <div id="profile-section"></div>;
};

export default ProfileSection;
