import styles from "./page.module.css";
import GameList from "./components/GameList";
import Dropdown from "./components/Dropdown";
import { GAME_STATUS } from "./types";

export default async function Home({ searchParams }: { searchParams: Promise<{ status: string }> }) {
  const query = await searchParams;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Dropdown
          options={GAME_STATUS}
          placeholder="Select your option"
        />
        
        <GameList status={query.status} />
      </main>
    </div>
  );
}
