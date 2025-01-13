import Game from "../Game"
import { GAMES } from "./constants"

import styles from "./styles.module.css"

type Props = {
	status: string
}

export default function GameList({ status }: Props) {
	return (
		<div className={styles.gameList}>
			{GAMES.filter((game => game.status.includes(status))).map((game) => (
				<Game key={game.name} game={game} />
			))}
		</div>
	)
}