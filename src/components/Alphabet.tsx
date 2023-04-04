import React, { FC } from "react";
import { useRef, useContext } from "react";
import { AppContext } from "../App";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Alphabet: FC = () => {
  const letterRefs = useRef<any>([]);
  const { selected, setSelect } = useContext(AppContext);

  const handleClick = (index: number) => {
    const option = letterRefs.current[index].textContent.toUpperCase();
    setSelect([...selected, option]);

    // disable clicked button
    letterRefs.current[index].classList.add("selected");
  };

  return (
    <div className="letters flex justify-center gap-2 flex-wrap my-5">
      {alphabet.map((letter, index) => (
        <button
          className="text-center w-8 p-1 border border-solid border-black uppercase"
          key={letter}
          ref={(el) => (letterRefs.current[index] = el)}
          onClick={() => {
            handleClick(index);
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Alphabet;
