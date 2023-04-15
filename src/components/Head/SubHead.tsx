import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";
import Hint from "../Aside/Hint";

const SubHead: React.FC = () => {
  const { level, selected, setSelected } = useContext(AppContext);
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    if (!selected.mismatch.includes("hint") && clicked)
      setSelected((prev: any) => {
        return { ...prev, mismatch: [...prev.mismatch, "hint"] };
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  return (
    <div className=" w-full flex justify-between px-1">
      <p className=" tracking-wider font-semibold ">
        {" X ".repeat(6 - Number(selected.mismatch.length))}
      </p>
      <h2>Level {level}</h2>
      <button
        className="hint px-2 bg-black text-white relative inline-block border border-solid border-black hover:scale-105"
        onClick={() => setClicked(true)}
        onBlur={() => setClicked(false)}
      >
        Hint
        <span
          className="tooltip w-40 p-1 mt-1 bg-[#686868] text-white text-left rounded-md
        absolute z-1 top-full right-1/2 invisible"
        >
          Reveal Hint. <br /> PS, you will loose a life
        </span>
      </button>
      {clicked && <Hint />}
    </div>
  );
};

export default SubHead;
