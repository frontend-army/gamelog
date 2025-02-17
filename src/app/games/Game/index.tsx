import Image from 'next/image';
import cn from 'classnames';

import styles from './style.module.css';
import { type Game } from '@/app/types';

interface Props {
	game: Game;
	onSelect: (gameId: number) => void;
};

export default function Game({ game, onSelect }: Props) {
	return (
		<div className={styles.gameContainer}>
			<h2 className={cn('title-3', styles.gameTitle)} title={game.name}>{game.name}</h2>
			<button onClick={() => onSelect(game.id)}>
				<Image
					src={game.image}
					alt={game.name}
					width={150}
					height={200}
					className={styles.image}
					draggable={false}
				/>
			</button>
		</div>
	);
}
