import React, { useContext } from "react";
import { AppContext } from "../../App";

const SubHead: React.FC = () => {
  const { level } = useContext(AppContext);

  return (
    <div className=" w-full flex justify-between px-1">
      <div>X X X X X X </div>
      <h2>Level {level}</h2>
      <button>Hint</button>
    </div>
  );
};

export default SubHead;
