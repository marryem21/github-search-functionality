import React, { useState } from "react";
import Repos from "../repos";

const SearchRepo = (props) => {
  //repos passed from props
  const { repos } = props;
  //state to store changing input on repo's search
  const [repoInput, setRepoInput] = useState("");
  console.log(repoInput);
  //function to handle change on repo input
  const handleChange = (e) => {
    setRepoInput(e.target.value);
  };
  //state to store final filtering string
  const [filter, setFilter] = useState("");

  //handle click function
  const handleClick = () => {
    setFilter(repoInput);
    console.log(filter);
  };
  return (
    <div>
      <div className="search-repo">
        {/* search bar to filter repositories */}
        <input
          placeholder="Find a repository..."
          type="text"
          onChange={handleChange}
        />
        <div className="search-repo-btns">
          <div className="select-btns">
            {/* button to be clicked in order to apply filter */}
            <button onClick={handleClick}>Search</button>
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
      <Repos filter={filter} repos={repos} />
    </div>
  );
};

export default SearchRepo;
