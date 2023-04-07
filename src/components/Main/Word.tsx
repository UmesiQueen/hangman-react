import React from "react";
import { useRef, useContext, useEffect } from "react";
import { AppContext } from "../../App";

const Word: React.FC = () => {
  const { word, selected } = useContext(AppContext);
  const Letters = word.map((el: any) => el.word.split(""));
  const wordRefs = useRef<any>([]);

  // reveal correct guesses
  useEffect(() => {
    wordRefs.current.map((element: any) => {
      const letter = element.textContent;

      selected.match.map((key: string) => {
        if (key === letter) element.classList.remove("invisible");
        return null;
      });

      return null;
    });    
  }, [selected]);

  return (
    <div className="my-3">
      <div className="flex text-center">
        {Letters[0].map((letter: string, i: number) => (
          <span
            key={i}
            ref={(el) => (wordRefs.current[i] = el)}
            className="w-5 mx-1 font-bold text-lg invisible"
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="flex">
        {Letters[0].map((letter: string, i: number) => (
          <span
            key={i}
            className=" w-5 px-2 mx-1 border-b border-b-black border-b-solid "
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Word;

// filter word array for duplicate
// filter right and wrong guesses, set each state accordingly
// compare when right guesses match none duplicate word array - (Game Won),
// when mismatched array crosses 6 items - (Game failed), reset level

// VALUES TO ALWAYS RESET
// 1 - level count
// 2 - word values
// 3 - return 'invisible' classList
// 4 - selected values

// onLoad, level should change to 1 (useLayout)
// useEffect hook to Fetch data should depend on level change

// Hint

// Lives depicted by stars
