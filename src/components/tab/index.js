import React from "react";

const Tab = () => {
  return (
    <div id="tab">
      <button>
        <span>Overview</span>
      </button>
      <button className="active">
        <span className="description">Repositories</span>
      </button>
      <button>
        <span>Projects</span>
      </button>
      <button>
        <span>Packages</span>
      </button>
    </div>
  );
};

export default Tab;
