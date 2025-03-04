'use client'
import { useState } from "react";
import Game from "../Game";
import { RawgGame } from "../types";
import styles from './styles.module.css';
import { GAME_STATUS } from "@/app/types";
import { useRouter } from "next/navigation";

interface Props {
  games: RawgGame[];
}

export default function GameList({ games }: Props) {
  const router = useRouter();
  const [selectedGameIds, setSelectedGameIds] = useState<Set<number>>(new Set());

  const handleSelectGame = (gameId: number) => {
    const newSelectedGames = new Set(selectedGameIds);
    if (selectedGameIds.has(gameId)) {
      newSelectedGames.delete(gameId);
    } else {
      newSelectedGames.add(gameId)
    }

    setSelectedGameIds(newSelectedGames);
  }

  const handleAddItems = async () => {
    const body = games.filter((game) => selectedGameIds.has(game.id)).map((game) => ({ ...game, status: GAME_STATUS.backlog.toLowerCase() }));
    try {
      const newItems = await fetch('api/library', { method: 'POST', body: JSON.stringify(body) });
      if (newItems.ok) {
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.gameList}>
      {games?.map((game) => (
        <Game 
          key={game.name}
          game={{ image: game.background_image, name: game.name, id: game.id }}
          onSelect={handleSelectGame}
          isSelected={selectedGameIds.has(game.id)}
        />
      ))}
      <button 
        className={styles.addToLibrary}
        onClick={handleAddItems}
      >
        Add {selectedGameIds.size} to library
      </button>
    </div>
  )
}