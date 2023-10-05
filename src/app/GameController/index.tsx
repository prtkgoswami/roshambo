import { faInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import GameAdvanced from "../GameAdvanced";
import GameBasic from "../GameBasic";
import ActionsSection from "../components/ActionsSection";
import ScoreBar from "../components/ScoreBar";
import TimeBar from "../components/TimeBar";
import {
  PLAY_OPTIONS_ADVANCED,
  PLAY_OPTIONS_BASIC,
  RULES,
} from "../utils/const";
import { PlayBot } from "../utils/util";

type GameControllerProps = {};

export type Score = {
  playerScore: number;
  botScore: number;
};

export enum PlayState {
  ToStart = 0,
  Playing,
  RoundComplete,
  Ended,
}

export type GameState = {
  playerChoice: string;
  botChoice: string;
  playState: PlayState;
} & Score;

const initialState: GameState = {
  playerScore: 0,
  botScore: 0,
  playerChoice: "none",
  botChoice: "none",
  playState: PlayState.ToStart,
};

const GameController = ({}: GameControllerProps): ReactElement => {
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [isBasicGameplay, setBasicGameplay] = useState<boolean>(true);
  const [shouldShowRules, setShowRules] = useState<boolean>(false);

  const onRoundComplete = (
    roundScore: Score,
    playerChoice: string,
    botChoice: string
  ) => {
    setGameState({
      playerScore: gameState.playerScore + roundScore.playerScore,
      botScore: gameState.botScore + roundScore.botScore,
      playerChoice: playerChoice,
      botChoice: botChoice,
      playState: PlayState.RoundComplete,
    });
  };

  const onRoundTimeUp = () => {
    const botSelect = PlayBot(
      isBasicGameplay ? PLAY_OPTIONS_BASIC : PLAY_OPTIONS_ADVANCED
    );
    setGameState({
      playerScore: gameState.playerScore,
      botScore: gameState.botScore + 1,
      playerChoice: "none",
      botChoice: botSelect,
      playState: PlayState.RoundComplete,
    });
  };

  const startRound = () => {
    setGameState({
      ...gameState,
      playState: PlayState.Playing,
    });
  };

  const resetGame = () => {
    setGameState(initialState);
  };

  useEffect(() => {
    resetGame();
  }, [isBasicGameplay]);

  return (
    <>
      <div className="flex flex-col">
        <TimeBar gameState={gameState} handleTimeUp={onRoundTimeUp} />
        <ScoreBar gameState={gameState} />
      </div>

      <ActionsSection
        isPlaying={gameState.playState === PlayState.Playing}
        onStartClick={startRound}
        onResetClick={resetGame}
      />
      {isBasicGameplay ? (
        <GameBasic
          updateRoundScore={onRoundComplete}
          isPlaying={gameState.playState === PlayState.Playing}
        />
      ) : (
        <GameAdvanced
          updateRoundScore={onRoundComplete}
          isPlaying={gameState.playState === PlayState.Playing}
        />
      )}

      <footer className="w-full flex flex-col gap-y-5">
        <div className="flex flex-row gap-5 items-center w-full justify-center">
          <div
            className={`w-14 h-14 relative cursor-pointer rounded-full ${
              !isBasicGameplay && "bg-gradient-radial"
            } from-amber-400 from-10% to-red-600`}
            onClick={() => setBasicGameplay(!isBasicGameplay)}
          >
            <Image
              src="/TBBT_Logo.png"
              alt="TBBT Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div
            className="w-10 h-10 bg-cyan-500 text-cyan-900 rounded-full flex justify-center items-center text-2xl cursor-pointer"
            onClick={() => setShowRules(true)}
          >
            <FontAwesomeIcon icon={faInfo} />
          </div>
        </div>
        <div className="text-center text-cyan-500">
          Developed by{" "}
          <a href="https://www.linkedin.com/in/prtkgoswami/" target="_blank">
            Pratik Goswami
          </a>
        </div>
      </footer>

      {shouldShowRules && (
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          <div className="w-3/4 lg:w-1/2 h-fit bg-cyan-100 text-zinc-800 p-10 relative">
            <div
              className="w-10 h-10 bg-cyan-500 text-cyan-900 absolute -top-4 -right-4 text-xl flex justify-center items-center rounded-full cursor-pointer"
              onClick={() => setShowRules(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="w-full text-center font-mono uppercase text-4xl p-2 border-b border-solid border-zinc-800/40">
              rules
            </div>
            <div className="w-full text-md font-mono mt-5 text-center">
              {RULES[isBasicGameplay ? "basic" : "advanced"]}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameController;
