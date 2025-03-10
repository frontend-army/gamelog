import styles from "./page.module.css";
import GameList from "./components/GameCategoryList";
import Dropdown from "./components/Dropdown";
import { GAME_STATUS, GameStatusKey } from "./types";
import SearchBar from "./components/SearchBar";
import { Game } from "./api/db/models/game";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ status: string; q: string }>;
}) {
  const query = await searchParams;

  const options: Record<GameStatusKey & "all", string> = {
    all: "All games",
    ...GAME_STATUS,
  };

  const games: { games: Game[] } = await fetch(`${process.env.API_BASE_URL}/api/library?` + new URLSearchParams(query)).then((res) => res.json());

  return (
    <>
      <div className={styles.filterContainer}>
        <Dropdown options={options} placeholder="Select your option" />
        <SearchBar />
      </div>
      <GameList status={query.status as GameStatusKey} query={query.q} games={games.games} />
    </>
  );
}
