import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";

const Word: React.FC = () => {
  const { word, selected } = useContext(AppContext);
  const Letters = word.map((el: any) => el.word.split(""));

  return (
    <div className="flex text-center my-3">
      {Letters[0].map((letter: string, i: number) => (
        <span
          key={i}
          className="w-5 h-7 mx-1 font-bold text-lg border-b border-b-black border-b-solid"
        >
          {selected.match.includes(letter) ? letter : " "}
        </span>
      ))}
    </div>
  );
};

export default Word;
