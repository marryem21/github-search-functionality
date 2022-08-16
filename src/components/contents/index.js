import React from "react";
import RepoSection from "../repo-section";
import ProfileSection from "../profile-section";
import Tab from "../tab";
// in this section we devide the content area to 3 coponents
const Contents = ({ userInfo, repos }) => {
  // console.log("got to contents", userInfo);
  return (
    <div id="contents">
      {<ProfileSection userInfo={userInfo} />}

      {<Tab repos={repos} />}

      {<RepoSection repos={repos} />}
    </div>
  );
};

export default Contents;
