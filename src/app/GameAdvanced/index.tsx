import {
  faHandBackFist,
  faHandLizard,
  faHandPaper,
  faHandScissors,
  faHandSpock,
} from "@fortawesome/free-regular-svg-icons";
import { Score } from "../GameController";
import OptionButton from "../components/OptionButton";
import { PLAY_OPTIONS_ADVANCED } from "../utils/const";
import { PlayBot } from "../utils/util";

type GameAdvancedProps = {
  isPlaying: boolean;
  updateRoundScore: (
    score: Score,
    playerChoice: string,
    botChoice: string
  ) => void;
};

const GameAdvanced = ({
  isPlaying,
  updateRoundScore,
}: GameAdvancedProps): React.ReactElement => {
  const choiceList = Object.keys(PLAY_OPTIONS_ADVANCED);

  const judgeRound = (playerSelect: string) => {
    const score: Score = {
      playerScore: 0,
      botScore: 0,
    };
    let winOption = "";
    let lossOption = "";
    const botSelect = PlayBot(PLAY_OPTIONS_ADVANCED);

    if (PLAY_OPTIONS_ADVANCED[playerSelect].includes(botSelect)) {
      winOption = botSelect;
      lossOption = playerSelect;
      score.botScore = 1;
    } else if (PLAY_OPTIONS_ADVANCED[botSelect].includes(playerSelect)) {
      winOption = playerSelect;
      lossOption = botSelect;
      score.playerScore = 1;
    } else {
    }

    updateRoundScore(score, playerSelect, botSelect);
  };

  const onOptionSelect = (selectedOption: string) => {
    if (!isPlaying) return;

    judgeRound(selectedOption);
  };

  return (
    <div className="flex flex-col gap-5 xl:gap-16 lg:gap-14 w-full lg:w-3/4 xl:w-1/2 self-center mt-4 lg:mt-20">
      <div className="flex flex-row justify-around">
        <OptionButton
          icon={faHandScissors}
          optionString={choiceList[0]}
          onOptionSelect={onOptionSelect}
          isActive={isPlaying}
          sizeClasses="w-28 h-28 lg:w-48 lg:h-48"
        />
        <OptionButton
          icon={faHandBackFist}
          optionString={choiceList[1]}
          onOptionSelect={onOptionSelect}
          isActive={isPlaying}
          sizeClasses="w-28 h-28 lg:w-48 lg:h-48"
        />
        <OptionButton
          icon={faHandPaper}
          optionString={choiceList[2]}
          onOptionSelect={onOptionSelect}
          isActive={isPlaying}
          sizeClasses="w-28 h-28 lg:w-48 lg:h-48"
        />
      </div>
      <div className="flex flex-row justify-evenly">
        <OptionButton
          icon={faHandLizard}
          optionString={choiceList[3]}
          onOptionSelect={onOptionSelect}
          isActive={isPlaying}
          sizeClasses="w-28 h-28 lg:w-48 lg:h-48"
        />
        <OptionButton
          icon={faHandSpock}
          optionString={choiceList[4]}
          onOptionSelect={onOptionSelect}
          isActive={isPlaying}
          sizeClasses="w-28 h-28 lg:w-48 lg:h-48"
        />
      </div>
    </div>
  );
};

export default GameAdvanced;
