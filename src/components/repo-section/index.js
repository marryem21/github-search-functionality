import React from "react";
import SearchRepo from "../search-repo";

export const RepoSection = (props) => {
  const { repos } = props;
  return (
    //call searchRepo component and wrap it inside a div to apply css to it later on
    <div id="repo-section">
      <SearchRepo repos={repos} />
    </div>
  );
};

export default RepoSection;
