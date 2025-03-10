import { RawgGame } from "../types";

export interface RawgResponse {
  count: number;
  next: string;
  previous: string;
  results: RawgGame[];
}
