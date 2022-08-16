import React from "react";
import Repo from "../repo";

const Repos = ({ filter, repos }) => {
  // if the API returned data about a user then the repo has a length superieur than 0
  if (repos.length !== 0)
    if (filter === "")
      //if no filter applied map all the data and display all repositories
      return (
        <div id="repos">
          {repos.data.map((repo) => {
            return <Repo name={repo.name} html_url={repo.html_url} />;
          })}
        </div>
      );
    //if there is a  filter applied map all the repositories that their name include the filter
    else
      return (
        <div id="repos">
          {repos.data
            .filter((item) => {
              return item.name.includes(filter);
            })
            .map((repo) => {
              return <Repo name={repo.name} html_url={repo.html_url} />;
            })}
        </div>
      );
  return (
    // text to be displayed when you load the page or when no user found
    <p>
      1) Insert a valid github user name in the header's search bar, example:
      Marryem21 <br></br> 2) Hold on for a 1 second to get the list of their
      repositories<br></br> 3) Type a repository name(i.e AyClass) and click
      search
    </p>
  );
};

export default Repos;
