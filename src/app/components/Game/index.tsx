import Image from 'next/image';
import cn from 'classnames';

import styles from './style.module.css';

interface Game {
	name: string;
	image: string;
};

interface Props {
	game: Game;
};

export default function Game({ game }: Props) {
	return (
		<div className={styles.gameContainer}>
			<h2 className={cn('title-3', styles.gameTitle)} title={game.name}>{game.name}</h2>
			<Image
				src={game.image}
				alt={game.name}
				width={150}
				height={200}
				className={styles.image}
			/>
		</div>
	);
}
