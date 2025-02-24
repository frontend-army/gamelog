import SearchBar from "../components/SearchBar";
import GameList from "./GameList";
import styles from './styles.module.css';
import { RawgResponse } from "./types";

export default async function Games({ searchParams }: { searchParams: Promise<{ status: string; q: string }>; }) {
  const query = (await searchParams).q ?? '';
  const gamesQuery = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${query}`)
  const gamesResponse: RawgResponse = await gamesQuery.json()

  return (
    <div className={styles.container}>
      <SearchBar />
      <GameList games={gamesResponse.results} />
    </div>
  )
}