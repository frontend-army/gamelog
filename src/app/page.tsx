import styles from "./page.module.css";
import Link from "next/link";
import GameList from "./components/GameList";
import Dropdown from "./components/Dropdown";

const GAME_STATUS = {
  backlog: "Backlog",
  playing: "Playing",
  completed: "Completed",
  started: "Started",
} as const;

type GAME_STATUS_KEYS = keyof typeof GAME_STATUS;

export default async function Home({ searchParams }: { searchParams: Promise<{ status: string }> }) {
  const query = await searchParams;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Dropdown
          options={Object.keys(GAME_STATUS)}
          placeholder="Select your option"
        />
        
        {/* <ul className={styles.statusSelect}>
          {Object.entries(GAME_STATUS).map(([key, value]) => (
            <li key={key}>
              <Link href={`?status=${key}`}>{value}</Link>
            </li> 
          ))}
        </ul> */}
        <GameList status={query.status} />
      </main>
    </div>
  );
}
