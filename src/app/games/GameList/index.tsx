'use client'
import { useState } from "react";
import Game from "../Game";
import { RawgGame } from "../types";
import styles from './styles.module.css';

interface Props {
  games: RawgGame[];
}

export default function GameList({ games }: Props) {
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

  const handleAddItems = () => {
    // TODO: Add to user's library
  }

  return (
    <div className={styles.gameList}>
      {games.map((game) => (
        <Game 
          key={game.name}
          game={{ image: game.background_image, name: game.name, id: game.id }}
          onSelect={handleSelectGame}
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