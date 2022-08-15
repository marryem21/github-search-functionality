import React from "react";
import PropTypes from "prop-types";

import RepoSection from "../repo-section";
import ProfileSection from "../profile-section";
import Tab from "../tab";

const Contents = () => {
  return (
    <div id="contents">
      {/* section where we find the user's info on the right */}
      {<ProfileSection />}
      {/* section where we have overview repositories projects and packages buttons */}
      {<Tab />}
      {/* section where we display repos dynamically */}
      {<RepoSection />}
    </div>
  );
};

Contents.propTypes = {
  data: PropTypes.object,
};

export default Contents;
