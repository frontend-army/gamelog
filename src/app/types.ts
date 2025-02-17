export const GAME_STATUS = {
  playing: "Playing",
  backlog: "Backlog",
  started: "Started",
  completed: "Completed",
} as const;

export type GameStatusKey = keyof typeof GAME_STATUS;
