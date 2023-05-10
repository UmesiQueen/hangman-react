import { useContext, useEffect, useMemo } from "react";
import { AppContext } from "../../App";

interface props {
  img: JSX.Element;
  word?: JSX.Element;
  text: string;
  subtext: string;
  element: JSX.Element;
}

const NotificationContainer = ({
  img,
  word,
  text,
  subtext,
  element,
}: props): JSX.Element => {
  return (
    <div
      className="w-full md:w-3/4 xl:w-1/2 h-3/4 px-5 bg-white text-center flex flex-col justify-around items-center
                 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl border"
    >
      {img}
      {word}
      <h2 className="text-black text-[2em]">
        {text}
        <span className=" text-red-700 pl-1 ">{subtext}</span>
      </h2>
      {element}
    </div>
  );
};

const Notifications = () => {
  const { word, state, setState, setLevel, selected, setSelected } =
    useContext(AppContext);

  // remove duplicates from word array
  const uniqueWordArray = useMemo(() => {
    return word.word
      .split("")
      .filter(
        (value: string, index: number, arr: string[]) =>
          arr.indexOf(value) === index
      );
  }, [word]);

  useEffect(() => {
    if (
      selected.match.length === uniqueWordArray.length &&
      selected.match.length > 0
    ) {
      resetValues();
      setState({ won: true });

      setTimeout(() => {
        setState({ won: false });
        setLevel((lvl: number) => lvl + 1);
      }, 4000);
    }

    if (selected.mismatch.length >= 6) setState({ gameOver: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, uniqueWordArray]);

  // reset selected values
  const resetValues = () => {
    setSelected({
      all: [],
      match: [],
      mismatch: [],
    });
  };

  const handleGameOver = () => {
    setState({ gameOver: false });
    setLevel((lvl: number) => (lvl = 1)); // reset level to 1
    resetValues();
  };

  return (
    <>
      {state.gameOver && (
        <NotificationContainer
          img={
            <img
              src="./images/7.png"
              alt="game over"
              className="h-1/2 w-full md:w-1/2"
            />
          }
          text="Now watch out, I'm coming for you !"
          subtext="xoxo :)"
          element={
            <button
              className=" restartBtn text-white bg-black text-lg tracking-wider w-22 py-2 px-3 my-5 hover:scale-105"
              onClick={handleGameOver}
            >
              Try Again
            </button>
          }
        />
      )}

      {state.won && (
        <NotificationContainer
          img={
            <img
              src="./images/win.png"
              alt="won"
              className="h-1/2 w-1/2 md:w-1/4"
            />
          }
          word={
            <div className="inline-flex md-mb-10 text-xl">
              Word is : <h2 className="ml-1">{word.word}</h2>
            </div>
          }
          text="I desire medium danger, Let's go again ! "
          subtext=" :)"
          element={<p className="loading text-[3em]"></p>}
        />
      )}
    </>
  );
};

export default Notifications;
