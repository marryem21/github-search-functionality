import React from "react";
import PropTypes from "prop-types";
import SearchRepo from "../search-repo";

// we need this just to wrap the serch repo part with a div
export const RepoSection = () => {
  return (
    <div id="repo-section">
      <SearchRepo />
    </div>
  );
};
RepoSection.propTypes = {
  repos: PropTypes.array,
};

export default RepoSection;
