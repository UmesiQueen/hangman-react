import React, { FC } from "react";
import "./App.css";

import Header from "./components/Header";
import Graphics from "./components/Graphics";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <main className=" flex flex-col items-center">
        <Graphics />
      </main>
    </div>
  );
};

export default App;
