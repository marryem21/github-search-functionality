import React from "react";

type RepoProps = {
  name: string 
  html_url: string
}

const Repo=(props: RepoProps)=>{
  console.log("i got",props)
  
  return (
    <div className="repo">
      <div className="repo-left">
        <div className="repo-name">
          <span>
            {/* display each repository with its name that it is clickable an leads to the real repo on Github */}
            <a href={props.html_url} target="_blank" rel="noopener noreferrer">
              {props.name}
            </a>
          </span>
        </div>
      </div>

      <div className="flex"></div>

      <div className="star-btn">
        <button>
          <span>&#x2606;</span>
          <span> Star</span>
        </button>
      </div>
    </div>
  );
};

export default Repo;
