import React, { useRef, useContext} from "react";
import { AppContext } from "../../App";

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

const Alphabet: React.FC = () => {
  const letterRefs = useRef<any>([]);
  const { word, setSelected } = useContext(AppContext);
  const Letters = word.map((el: any) => el.word.split(""));

  const handleClick = (index: number) => {
    const selected = letterRefs.current[index].textContent.toUpperCase();

    setSelected((prev: any) => {
      return {
        all: [...prev.all, selected],
        mismatch: !Letters[0].includes(selected)
          ? [...prev.mismatch, selected]
          : [...prev.mismatch],
        match: Letters[0].includes(selected)
          ? [...prev.match, selected]
          : [...prev.match],
      };
    });

    // disable clicked button
    letterRefs.current[index].classList.add("selected");
  };

  return (
    <div className="letters flex justify-center gap-2 flex-wrap my-5">
      {alphabet.map((letter: string, index: number) => (
        <button
          className="text-center w-8 p-1 border-2 border-solid border-black uppercase"
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
