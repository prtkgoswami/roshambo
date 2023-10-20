export type Option = {
  [key: string]: string[];
};

export const PLAY_OPTIONS_BASIC: Option = {
  scissor: ["rock"],
  rock: ["paper"],
  paper: ["scissor"],
};

export const PLAY_OPTIONS_ADVANCED: Option = {
  scissor: ["rock", "spock"],
  rock: ["paper", "spock"],
  paper: ["scissor", "lizard"],
  lizard: ["scissor", "rock"],
  spock: ["lizard", "paper"],
};

export const PLAY_INTERVAL = 5;

export const HIGHTLIGHT_MODE_GAMES_CUTOFF = 6;
export const HIGHTLIGHT_MODE_TIMEOUT = 10000;

export const RULES = {
  basic: (
    <>
      Scissors cuts Paper
      <br />
      Paper covers Rock
      <br />
      Rock crushes Lizard
    </>
  ),
  advanced: (
    <>
      Scissors cuts Paper
      <br />
      Paper covers Rock
      <br />
      Rock crushes Lizard
      <br />
      Lizard poisons Spock
      <br />
      Spock smashes Scissors
      <br />
      Scissors decapitates Lizard
      <br />
      Lizard eats Paper
      <br />
      Paper disproves Spock
      <br />
      Spock vaporizes Rock
      <br />
      (and as it always has) Rock crushes Scissors
    </>
  ),
};
