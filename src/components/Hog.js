import React from "react";

const generateHogImageFileName = hogName => {
  return hogName
    .split(" ")
    .map(partialName => partialName.toLowerCase())
    .join("_");
};

const Hog = ({ hogData, toggleHogDetails }) => {
  console.log("CB is :", toggleHogDetails);
  //console.log("Filename will be :", generateHogImageFileName(hogData.name));
  return (
    <div onClick={() => toggleHogDetails(hogData.id)}>
      <h1>{hogData.name}</h1>
      <div>
        <img
          src={require(`../hog-imgs/${generateHogImageFileName(
            hogData.name
          )}.jpg`)}
        />
        {hogData.showDetails && <p>{hogData.medal}</p>}
      </div>
    </div>
  );
};

export default Hog;
