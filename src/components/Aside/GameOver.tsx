import React, { useContext } from "react";
import { AppContext } from "../../App";

const GameOver: React.FC = () => {
  const { state, setState, setLevel } = useContext(AppContext);

  return (
    <>
      {state.gameOver && (
        <div className="w-full h-3/4 px-5  bg-white text-center flex flex-col justify-around items-center absolute bottom-[5%] left-0">
          <img
            src="./images/7.png"
            alt="game over"
            className="h-1/2 w-full bg-white md:w-1/2 xl:w-1/4"
          />
          <h2 className="text-black text-[2em] mt-5">
            Now watch out, I'm coming for you !
            <span className=" text-red-700 "> xoxo :)</span>
          </h2>
          <button
            className=" restartBtn text-white bg-black text-lg tracking-wider w-22 py-2 px-3 my-5"
            onClick={() => {
              setState({ gameOver: false });
              setLevel(1); // reset level to 1
            }}
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default GameOver;
