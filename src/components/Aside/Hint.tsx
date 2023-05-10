import React, { useContext } from "react";
import { AppContext } from "../../App";

const Hint: React.FC = () => {
  const { word } = useContext(AppContext);

  return (
    <div className=" w-64 lg:w-80 h-fit p-5 bg-white text-black absolute top-7 right-4 shadow-xl border">
      <p className="italic">{word.partOfSpeech}</p>
      <dl>
        <dt>
          <h2>Definition</h2>
        </dt>
        <dd>{word.definition}</dd>
      </dl>
    </div>
  );
};

export default Hint;
