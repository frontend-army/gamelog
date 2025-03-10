'use client'
import Image from 'next/image';
import cn from 'classnames';

import styles from './style.module.css';
import type { Game } from '@/app/api/db/models/game';
import { RawgGame } from '@/app/types';

interface Props {
	game: RawgGame;
	onSelect: (gameId: number) => void;
	isSelected: boolean;
};

export default function Game({ game, onSelect, isSelected }: Props) {
	return (
		<div className={styles.gameContainer}>
			<h2 className={cn('title-3', styles.gameTitle)} title={game.name}>{game.name}</h2>
			<button onClick={() => onSelect(game.id)}>
				<Image
					// TODO: Add default image
					src={game.background_image || ''}
					alt={game.name}
					width={150}
					height={200}
					className={cn(styles.image, isSelected && styles.selected)}
					draggable={false}
				/>
			</button>
		</div>
	);
}
