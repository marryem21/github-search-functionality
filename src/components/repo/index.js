import React from "react";
import PropTypes from "prop-types";

const Repo = () => {
  return (
    <div className="repo">
      <div className="repo-left">
        <div className="repo-name">
          <span>
            {/* will add repos's path from API  */}
            <a href="" target="_blank" rel="noopener noreferrer">
              {/* will add repos's name  from API  */}
              repo name
            </a>
          </span>
        </div>
      </div>

      <div className="flex"></div>

      <div className="star-btn">
        <button>
          <span>&#x2606;</span>
          <span>Star</span>
        </button>
      </div>
    </div>
  );
};

Repo.propTypes = {
  repo: PropTypes.object,
};

export default Repo;
