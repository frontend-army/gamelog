import Image from 'next/image';
import cn from 'classnames';

import styles from './style.module.css';

interface Props {
	name: string;
	image: string;
};

export default function Game({ name, image }: Props) {
	return (
		<div className={styles.gameContainer}>
			<h2 className={cn('title-3', styles.gameTitle)} title={name}>{name}</h2>
			<Image
				src={image}
				alt={name}
				width={150}
				height={200}
				className={styles.image}
			/>
		</div>
	);
}
