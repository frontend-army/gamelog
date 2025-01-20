import styles from "./page.module.css";
import GameList from "./components/GameList";
import Dropdown from "./components/Dropdown";
import { GAME_STATUS } from "./types";
import SearchBar from "./components/SearchBar";

export default async function Home({ searchParams }: { searchParams: Promise<{ status: string, q: string; }> }) {
  const query = await searchParams;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.filterContainer}>
          <Dropdown
            options={GAME_STATUS}
            placeholder="Select your option"
          />
          <SearchBar />
        </div>

        
        <GameList status={query.status} query={query.q} />
      </main>
    </div>
  );
}
