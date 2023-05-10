import { createContext, useState, useEffect, useLayoutEffect } from "react";
import Axios from "axios";

import "./App.css";
import Header from "./components/Head/Header";
import SubHead from "./components/Head/SubHead";
import Graphics from "./components/Main/Graphics";
import Alphabet from "./components/Main/Alphabet";
import Word from "./components/Main/Word";
import Notifications from "./components/Aside/Notifications";

export const AppContext = createContext<any>(null);

const App = () => {
  const initialValues: initialState = {
    word: "",
    partOfSpeech: "",
    definition: "",
  };

  //interface for initialState
  interface initialState {
    word: string;
    partOfSpeech: string;
    definition: string;
  }

  const [word, setWord] = useState(initialValues);
  const [selected, setSelected] = useState({
    all: [],
    match: [],
    mismatch: [],
  });
  const [state, setState] = useState({ won: false, gameOver: false });
  const [level, setLevel] = useState(0);

  // Update level on onLoad
  useLayoutEffect(() => {
    setLevel(1);
  }, []);

  // Fetch word and definition
  useEffect(() => {
    Axios.get("https://random-word-api.vercel.app/api?words=1&type=uppercase")
      .then((data) => {
        const randomWord = data.data[0];
        Axios({
          method: "get",
          baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
          url: "/" + randomWord,
        })
          .then((data) => {
            setWord({
              word: randomWord,
              partOfSpeech: data.data[0].meanings[0].partOfSpeech,
              definition: data.data[0].meanings[0].definitions[0].definition,
            });
          })
          .catch((err) =>
            console.error(`Error retrieving definition : ${err}`)
          );
      })
      .catch((err) => console.error(`Error retrieving word : ${err}`));
  }, [level]);

  return (
    <AppContext.Provider
      value={{ word, state, setState, selected, setSelected, level, setLevel }}
    >
      <div className="App">
        <Header />
        <main className="px-5 py-4 flex flex-col items-center md:w-1/2 md:mx-auto md:px-0">
          <SubHead />
          <Graphics />
          <Word />
          <Alphabet />
          <aside>
            <Notifications />
          </aside>
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;
