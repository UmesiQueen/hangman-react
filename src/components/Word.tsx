import React, { FC } from "react";
import { useRef, useContext, useEffect } from "react";
import { AppContext } from "../App";

const Word: FC = () => {
  const { word, selected } = useContext(AppContext);
  const wordRefs = useRef<any>([]);

  useEffect(() => {
    wordRefs.current.map((element: any) => {
      const letter = element.textContent;

      selected.map((key: string) => {
        if (key === letter) element.classList.remove("invisible");
        return null;
      });

      return null;
    });
  }, [selected]);

  return (
    <>
      {word.map((item: any, i: number) => {
        const Letters = item.word.split("");

        return (
          <div key={i} className="my-3 ">
            <div className="flex text-center">
              {Letters.map((letter: string, i: number) => (
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
              {Letters.map((letter: string, i: number) => (
                <span
                  key={i}
                  className=" w-5 px-2 mx-1 border-b border-b-black border-b-solid "
                ></span>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Word;
