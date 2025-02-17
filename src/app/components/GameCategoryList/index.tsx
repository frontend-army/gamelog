import { GAME_STATUS, GameStatusKey } from "@/app/types";
import Game from "../Game";
import { GAMES } from "./constants";

import styles from "./styles.module.css";

interface Props {
  status: string;
  query?: string;
}

export default function GameCategoryList({ status, query }: Props) {
  const filteredGames = GAMES.filter(
        (game) => {
          if (status)
            return game.status.includes(status);
          return true;
        }
      ).filter((game) => {
        if (query !== '')
          return game.name.toLowerCase().includes(query?.toLowerCase() ?? '');
        return true;
      });

  return (
    <>
      {Object.keys(GAME_STATUS)
        .filter((key) => (status ? key === status : key))
        .map((key) => (
          <section className={styles.gameStatusGroup} key={key}>
            <h4 className={styles.gameStatusTitle}>
              {GAME_STATUS[key as GameStatusKey]}
            </h4>
            <div className={styles.gameList}>
              {filteredGames
                .filter((game) => game.status.includes(key))
                .map((game) => (
                  <Game key={game.name} game={game} />
                ))}
            </div>
          </section>
        ))}
    </>
  );
}
