import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type OptionButtonProps = {
  icon: IconDefinition;
  optionString: string;
  isActive: boolean;
  sizeClasses: string;
  onOptionSelect: (optionName: string) => void;
};

const OptionButton = ({
  icon,
  optionString,
  isActive,
  sizeClasses,
  onOptionSelect,
}: OptionButtonProps): React.ReactElement => {
  const [isOverlayVisible, setOverlayVisibility] = useState<boolean>(false);

  return (
    <div
      className={`flex relative ${sizeClasses} justify-center items-center text-6xl border-2 border-solid ${
        isActive ? "border-cyan-500" : "border-zinc-600"
      } rounded-full cursor-pointer shadow-cyan-500`}
      onClick={() => onOptionSelect(optionString)}
      onMouseEnter={() => setOverlayVisibility(true && isActive)}
      onMouseLeave={() => setOverlayVisibility(false && isActive)}
    >
      <FontAwesomeIcon icon={icon} />
      {isOverlayVisible && (
        <div className="absolute w-full h-full rounded-full bg-cyan-900/95 flex justify-center items-center text-2xl capitalize">
          {optionString}
        </div>
      )}
    </div>
  );
};

export default OptionButton;
