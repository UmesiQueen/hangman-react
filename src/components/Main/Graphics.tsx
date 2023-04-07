import React, { useContext } from "react";
import { AppContext } from "../../App";

const imageSrc = (lives: number) => {
  switch (lives) {
    case 1:
      return "./images/2.png";
    case 2:
      return "./images/3.png";
    case 3:
      return "./images/4.png";
    case 4:
      return "./images/5.png";
    case 5:
      return "./images/6.png";
    case 6:
      return "./images/7.png";
    default:
      return "./images/1.png";
  }
};

const Graphics: React.FC = () => {
  const { selected } = useContext(AppContext);
  const lives = selected.mismatch.length;

  
  return (
    <img src={imageSrc(lives)} alt="hangman" className="w-[23rem] h-[23rem] my-4" />
  );
};

export default Graphics;
