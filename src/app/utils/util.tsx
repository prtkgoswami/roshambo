import { Option } from "./const";

export const capitalize = (originalStr?: string) => {
  if (!originalStr) return "";
  const capitalizedString =
    originalStr.charAt(0).toUpperCase() + originalStr.slice(1);
  return capitalizedString;
};

export const PlayBot = (options: Option) => {
  const choiceList = Object.keys(options);
  const botOption = Math.floor(Math.random() * choiceList.length);
  const botSelect = choiceList[botOption];
  return botSelect;
};
