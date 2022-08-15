import React from "react";
import Repos from "../repos";

const SearchRepo = (props) => {
  //the repo search input and the filter logic will be hee
  return (
    <div>
      <div className="search-repo">
        <input placeholder="Find a repository..." type="text" onChange="" />
        <div className="search-repo-btns">
          <div className="select-btns">
            <button onClick="">Search</button>
            <button>
              <span>Type: All</span>
              <span>&#9662;</span>
            </button>
            <button>
              <span>Language: All</span>
              <span>&#9662;</span>
            </button>
          </div>
          <button id="new-repo-btn">
            <span>New</span>
          </button>
        </div>
      </div>
      <Repos />
    </div>
  );
};

export default SearchRepo;
