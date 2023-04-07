import React, { useContext } from "react";
import { AppContext } from "../../App";

const Won: React.FC = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      {state.won && (
        <div className="w-full h-3/4 px-5 bg-white text-center flex flex-col justify-around items-center absolute bottom-[5%] left-0">
          <img
            src="./images/win.png"
            alt="won"
            className="h-1/2 w-1/2 md:w-1/4 xl:w-[15%]"
          />
          <h2 className="text-black text-[2em] mt-5">
            I desire medium danger, Let's go again !
            <span className=" text-red-700 "> :)</span>
          </h2>
          <p className="loading text-[3em]"></p>
        </div>
      )}
    </>
  );
};

export default Won;
