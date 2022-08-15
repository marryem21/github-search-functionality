import React from "react";
import PropTypes from "prop-types";

const ProfileSection = (props) => {
  return (
    <div id="profile-section">
      <div className="profile">
        <div className="avatar">
          {/* will add image path from API  */}
          <img src="" alt="" />
        </div>
        <div id="personal-info">
          {/* will add user's name path from API  */}
          <div className="name">user name</div>
          {/* will add user's login path from API  */}
          <div className="username">user login</div>
        </div>
      </div>
      <button>
        <span>&#9786;</span>
        <span id="set-status">Set status</span>
      </button>
      {/* will add user's bio path from API  */}
      <div className="bio">user bio</div>
    </div>
  );
};

ProfileSection.propTypes = {
  userInfo: PropTypes.object,
};

export default ProfileSection;
