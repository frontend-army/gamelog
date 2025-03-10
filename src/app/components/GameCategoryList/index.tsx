import { GAME_STATUS, GameStatusKey } from "@/app/types";
import Game from "../Game";

import styles from "./styles.module.css";
import { Game as GameType } from "@/app/api/db/models/game";

interface Props {
  games: GameType[];
  status: GameStatusKey;
  query?: string;
}

export default function GameCategoryList({ status, query, games }: Props) {
  const filteredGames = games.filter(
        (game) => {
          if (status)
            return game?.status?.includes(status);
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
                .filter((game) => game?.status?.includes(key as GameStatusKey))
                .map((game) => (
                  <Game key={game.name} name={game.name} image={game.image || ''} />
                ))}
            </div>
          </section>
        ))}
    </>
  );
}
