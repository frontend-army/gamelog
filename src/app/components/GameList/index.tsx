import Game from "../Game"
import { GAMES } from "./constants"

import styles from "./styles.module.css"

interface Props {
	status: string;
	query: string;
}

export default function GameList({ status, query }: Props) {
	const filteredGames = GAMES.filter((game => 
		game.status.includes(status) &&
		game.name.toLowerCase().includes(query.toLowerCase() ?? '')
	));

	return (
		<div className={styles.gameList}>
			{filteredGames.map((game) => (
				<Game key={game.name} game={game} />
			))}
		</div>
	)
}
