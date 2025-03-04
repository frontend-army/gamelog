import SearchBar from "../components/SearchBar";
import GameList from "./GameList";
import styles from './styles.module.css';
import { RawgResponse } from "./types";

export default async function Games({ searchParams }: { searchParams: Promise<{ status: string; q: string }>; }) {
  const query = (await searchParams).q ?? '';
  const gamesQuery = await fetch(`${process.env.API_BASE_URL}/api/games?search=${query}`);
  const gamesResponse: RawgResponse = await gamesQuery.json();

  return (
    <div className={styles.container}>
      <SearchBar />
      <GameList games={gamesResponse.results} />
    </div>
  )
}
