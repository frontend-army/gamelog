export const GAME_STATUS = {
  backlog: "Backlog",
  playing: "Playing",
  completed: "Completed",
  started: "Started",
} as const;

export type GameStatusKey = keyof typeof GAME_STATUS;
