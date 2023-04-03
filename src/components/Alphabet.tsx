import React, { FC } from "react";

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
  return (
    <ul className="letters flex justify-center gap-2 flex-wrap uppercase my-5">
      {alphabet.map((letter) => (
        <li
          className="text-center w-8 p-1 border border-solid border-black"
          key={letter}
        >
          {letter}
        </li>
      ))}
    </ul>
  );
};

export default Alphabet;
