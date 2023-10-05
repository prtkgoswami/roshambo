import { ReactElement } from "react";

type ActionsSectionProps = {
  isPlaying: boolean;
  onStartClick: () => void;
  onResetClick: () => void;
};

const ActionsSection = ({
  isPlaying,
  onStartClick,
  onResetClick,
}: ActionsSectionProps): ReactElement => {
  return (
    <div className="flex flex-row w-full lg:w-2/3 mt-5 lg:mt-5 self-center gap-x-2">
      <div
        className={`w-full py-2 rounded-md text-xl cursor-pointer text-center border border-solid ${
          isPlaying
            ? "text-zinc-600 border-zinc-600"
            : "text-cyan-500 border-cyan-500"
        } transition-colors duration-300 hover:bg-cyan-500 hover:text-cyan-900`}
        onClick={onStartClick}
      >
        Start Round
      </div>
      <div
        className={`w-full py-2 rounded-md text-xl cursor-pointer text-center border border-solid text-cyan-500 border-cyan-500 transition-colors duration-300 hover:bg-cyan-500 hover:text-cyan-900`}
        onClick={onResetClick}
      >
        Reset Game
      </div>
    </div>
  );
};

export default ActionsSection;
