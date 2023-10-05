import { useEffect, useState } from "react";
import { GameState, PlayState } from "../GameController";
import { PLAY_INTERVAL } from "../utils/const";

type TimeBarProps = {
  gameState: GameState;
  handleTimeUp: () => void;
};

const TimeBar = ({
  gameState,
  handleTimeUp,
}: TimeBarProps): React.ReactElement => {
  const [count, setCount] = useState(0);
  const isPlaying = gameState.playState === PlayState.Playing;

  useEffect(() => {
    if (gameState.playState === PlayState.ToStart) {
      setCount(0);
    }
  }, [gameState.playState]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count > 0 && isPlaying) {
        setCount(count - 0.01);
      }
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  useEffect(() => {
    if (isPlaying && count <= 0) {
      handleTimeUp();
    }
  }, [count]);

  useEffect(() => {
    if (isPlaying) {
      setCount(PLAY_INTERVAL);
    }
  }, [isPlaying]);

  return (
    <div className="flex w-full lg:w-2/3 h-1 self-center">
      <div
        className={`bg-cyan-500 h-full`}
        style={{ width: `${(count / PLAY_INTERVAL) * 100}%` }}
      ></div>
    </div>
  );
};

export default TimeBar;
