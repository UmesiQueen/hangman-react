import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className=" flex flex-col items-center">
      <h1 className="font-bold text-[4em] inline-flex items-center mt-3 ">
        <img src="/favicon.svg" alt="hangman" className="w-14 h-14" />
        Hangman
      </h1>
      <p className="text-xl">Guess the word correctly. Don't let me die :(</p>
    </header>
  );
};

export default Header;
