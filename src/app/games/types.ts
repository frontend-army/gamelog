export interface RawgResponse {
  count: number;
  next: string;
  previous: string;
  results: RawgGame[];
}

export interface RawgGame {
  id: number;
  background_image: string;
  name: string;
}
