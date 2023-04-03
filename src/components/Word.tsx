import React, { FC } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Word: FC = () => {
  const { word } = useContext(AppContext);

  return (
    <>
      {word.map((item: any, i: number) => {
        const Letters = item.word.split("");

        return (
          <div key={i} className="my-3 ">
            <div className="flex text-center">
              {Letters.map((letter: string, i: number) => (
                <span key={i} className="w-5 mx-1 font-bold text-lg invisible">
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
