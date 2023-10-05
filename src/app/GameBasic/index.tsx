import {
  faHandBackFist,
  faHandPaper,
  faHandScissors,
} from "@fortawesome/free-regular-svg-icons";
import { Score } from "../GameController";
import OptionButton from "../components/OptionButton";
import { PLAY_OPTIONS_BASIC } from "../utils/const";
import { PlayBot } from "../utils/util";

type GameBasicProps = {
  isPlaying: boolean;
  updateRoundScore: (
    roundScore: Score,
    playerChoice: string,
    botChoice: string
  ) => void;
};

const GameBasic = ({
  isPlaying,
  updateRoundScore,
}: GameBasicProps): React.ReactElement => {
  const choiceList = Object.keys(PLAY_OPTIONS_BASIC);

  const judgeRound = (playerSelect: string) => {
    const score: Score = {
      playerScore: 0,
      botScore: 0,
    };
    let winOption = "";
    let lossOption = "";
    const botSelect = PlayBot(PLAY_OPTIONS_BASIC);

    if (PLAY_OPTIONS_BASIC[playerSelect].includes(botSelect)) {
      winOption = botSelect;
      lossOption = playerSelect;
      score.botScore = 1;
    } else if (PLAY_OPTIONS_BASIC[botSelect].includes(playerSelect)) {
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
    <div className="flex flex-col gap-4 xl:gap-16 lg:gap-14 w-full lg:w-2/3 xl:w-1/3 self-center mt-4 lg:mt-20 mb-5 lg:mb-0">
      <div className="flex flex-row justify-evenly">
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
      </div>
      <div className="flex flex-row justify-center">
        <OptionButton
          icon={faHandPaper}
          optionString={choiceList[2]}
          onOptionSelect={onOptionSelect}
          isActive={isPlaying}
          sizeClasses="w-28 h-28 lg:w-48 lg:h-48"
        />
      </div>
    </div>
  );
};

export default GameBasic;
