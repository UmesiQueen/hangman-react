import React, { useContext } from "react";
import { AppContext } from "../../App";

const Hint: React.FC = () => {
  const { word } = useContext(AppContext);

  return (
    <div className=" w-1/2 md:w-1/4 h-fit p-5 bg-white text-blackF absolute top-[18%] md:top-[24%] left-[40%] md:left-1/2 shadow-xl border">
      <p className="italic">{word[0].partOfSpeech}</p>
      <dl>
        <dt>
          <h2>Definition</h2>
        </dt>
        <dd>{word[0].definition}</dd>
      </dl>
    </div>
  );
};

export default Hint;
