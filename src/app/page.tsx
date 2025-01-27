import styles from "./page.module.css";
import GameList from "./components/GameList";
import Dropdown from "./components/Dropdown";
import { GAME_STATUS, GameStatusKey } from "./types";
import SearchBar from "./components/SearchBar";

export default async function Home({ searchParams }: { searchParams: Promise<{ status: string, q: string; }> }) {
  const query = await searchParams;

  const options: Record<GameStatusKey & "all", string> = {
    "all": "All games",
    ...GAME_STATUS
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.filterContainer}>
          <Dropdown
            options={options}
            placeholder="Select your option"
          />
          <SearchBar />
        </div>
        <GameList status={query.status} query={query.q} />
      </main>
    </div>
  );
}
