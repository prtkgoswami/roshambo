import {
  IconDefinition,
  faHandBackFist,
  faHandLizard,
  faHandPaper,
  faHandScissors,
  faHandSpock,
} from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GameState, PlayState } from "../GameController";

type ScoreBarProps = { gameState: GameState };

type IconObject = {
  [key: string]: IconDefinition;
};
const CHOICE_MAP: IconObject = {
  rock: faHandBackFist,
  scissor: faHandScissors,
  paper: faHandPaper,
  spock: faHandSpock,
  lizard: faHandLizard,
  none: faMinus,
};

const ScoreBar = ({ gameState }: ScoreBarProps): React.ReactElement => {
  return (
    <div className="flex flex-row h-full w-full lg:w-2/3 border border-solid border-zinc-200/40 p-1 lg:p-2 self-center rounded-md">
      <div className="flex flex-col w-1/2 h-full p-2 lg:p-5 border-r border-solid border-zinc-200/40">
        <div className="flex flex-row w-full text-center p-1 gap-2 justify-between">
          <p className="text-md lg:text-xl text-zinc-200 pb-1">Player</p>
          <p className="text-4xl text-cyan-500">{gameState.playerScore}</p>
        </div>

        <div className="flex flex-row w-full text-6xl justify-center p-5 text-zinc-200">
          {gameState.playState !== PlayState.Playing ? (
            <FontAwesomeIcon
              icon={CHOICE_MAP[gameState.playerChoice]}
              className=""
            />
          ) : (
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-zinc-200/40 animate-spin"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col w-1/2 h-full p-2 lg:p-5">
        <div className="flex flex-row w-full text-center p-1 gap-2 justify-between">
          <p className="text-md lg:text-xl text-zinc-200 pb-1">Bot</p>
          <p className="text-4xl text-cyan-500">{gameState.botScore}</p>
        </div>

        <div className="flex flex-row w-full text-6xl justify-center p-5 text-zinc-200">
          {gameState.playState !== PlayState.Playing ? (
            <FontAwesomeIcon
              icon={CHOICE_MAP[gameState.botChoice]}
              className=""
            />
          ) : (
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-zinc-200/40 animate-spin"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ScoreBar;
