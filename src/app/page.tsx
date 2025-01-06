import Image from "next/image";
import styles from "./page.module.css";
import cn from 'classnames';
import Link from "next/link";

const GAME_STATUS = {
  backlog: "Backlog",
  playing: "Playing",
  completed: "Completed",
  started: "Started",
} as const;

type GAME_STATUS_KEYS = keyof typeof GAME_STATUS;

const GAMES = [
  {
    name: "Valorant",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/valorant.jpg",
    status: ['backlog']
  },
  {
    name: "Leage of Legends",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/league-of-legends.jpg",
    status: ['playing']
  },
  {
    name: "Fortnite",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/fortnite-2024.png",
    status: ['completed']
  },
  {
    name: "Rocket League",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/rocket-league.jpg",
    status: ['started', 'backlog']
  },
];

export default async function Home({ searchParams }: { searchParams: Promise<{ status: string }> }) {
  const query = await searchParams;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul className={styles.statusSelect}>
          {Object.entries(GAME_STATUS).map(([key, value]) => (
            <li key={key}>
              <Link href={`?status=${key}`}>{value}</Link>
            </li> 
          ))}
        </ul>

        <div className={styles.gameList}>
          {GAMES.filter((game => game.status.includes(query.status))).map((game) => (
            <div key={game.name} className={styles.gameContainer}>
              <h2 className={cn('title-3', styles.gameTitle)} title={game.name}>{game.name}</h2>
              <Image
                src={game.image}
                alt={game.name}
                width={150}
                height={200}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
