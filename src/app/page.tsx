"use client";
import GameController from "./GameController";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col px-5 py-5 lg:px-5 lg:py-5 gap-3 lg:gap-10 relative">
      <header className="flex flex-row w-full justify-center lg:justify-start">
        <div className="flex flex-col p-2 lg:p-4 border-0 border-solid border-zinc-200/40">
          <div className="text-4xl lg:text-6xl uppercase py-2 border-b border-solid border-zinc-200/70 text-center lg:text-left">
            Roshambo
          </div>
          <div className="text-sm lg:text-lg py-2 uppercase text-cyan-500 font-mono">
            Where quick decisions meet endless fun
          </div>
        </div>
      </header>

      <GameController></GameController>
    </main>
  );
}
