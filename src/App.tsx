import React, { FC } from "react";
import { createContext, useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

import Header from "./components/Header";
import Graphics from "./components/Graphics";
import Alphabet from "./components/Alphabet";
import Word from "./components/Word";

export const AppContext = createContext<any>(null);

const App: FC = () => {
  const initialValues: generateState[] = [
    { word: "", partOfSpeech: "", definition: "" },
  ];
  //interface for state
  interface generateState {
    word: string;
    partOfSpeech: string;
    definition: string;
  }

  const [word, setWord] = useState(initialValues);

  useEffect(() => {
    Axios.get("https://random-word-api.vercel.app/api?words=1&type=uppercase")
      .then((data: any) => {
        const randomWord = data.data[0];
        Axios({
          method: "get",
          baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
          url: "/" + randomWord,
        })
          .then((data) => {
            setWord([
              {
                word: randomWord,
                partOfSpeech: data.data[0].meanings[0].partOfSpeech,
                definition: data.data[0].meanings[0].definitions[0].definition,
              },
            ]);
          })
          .catch((err) =>
            console.error(`Error retrieving definition : ${err}`)
          );
      })
      .catch((err: any) => console.error(`Error retrieving word : ${err}`));
  }, []);

  return (
    <AppContext.Provider value={{ word }}>
      <div className="App">
        <Header />
        <main className=" flex flex-col items-center">
          <Graphics />
          <Word />
          <Alphabet />
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;
