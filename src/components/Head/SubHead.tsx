import React, { useContext } from "react";
import { AppContext } from "../../App";

const SubHead: React.FC = () => {
  const { level, selected } = useContext(AppContext);

  return (
    <div className=" w-full flex justify-between px-1">
      <p className=" tracking-wider font-semibold ">
        {" X ".repeat(6 - Number(selected.mismatch.length))}
      </p>
      <h2>Level {level}</h2>
      <button>Hint</button>
    </div>
  );
};

export default SubHead;
