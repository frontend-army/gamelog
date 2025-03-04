import styles from "./page.module.css";
import GameList from "./components/GameCategoryList";
import Dropdown from "./components/Dropdown";
import { GAME_STATUS, GameStatusKey, IGame } from "./types";
import SearchBar from "./components/SearchBar";

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

  const games: { games: IGame[] } = await fetch(`${process.env.API_BASE_URL}/api/library`).then((res) => res.json());

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
