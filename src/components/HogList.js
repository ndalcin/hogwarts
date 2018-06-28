import React from "react";
import HogTile from "./HogTile";
import hogs from "../porkers_data";

const HogList = () => {
  return (
    <div className="ui grid container">
      {hogs.map(hog => <HogTile key={hog.name} hog={hog} />)}
    </div>
  );
};

export default HogList;
