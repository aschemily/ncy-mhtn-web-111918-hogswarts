import React from "react";
import Hog from "./Hog";
const uuidv4 = require("uuid/v4");
// console.log("UUID fn :", uuidv4);
// console.log("In a random mood :", uuidv4());

const HogsContainer = props => {
  console.log("In HogsContainer. Props are :", props);
  return (
    <div>
      {props.hogs.map(h => {
        return (
          <Hog
            key={h.id}
            hogData={h}
            toggleHogDetails={props.toggleHogDetails}
          />
        );
      })}
    </div>
  );
};

export default HogsContainer;
