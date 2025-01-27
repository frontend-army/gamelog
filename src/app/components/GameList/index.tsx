import { GAME_STATUS, GameStatusKey } from "@/app/types";
import Game from "../Game"
import { GAMES } from "./constants"

import styles from "./styles.module.css"

interface Props {
	status: string;
	query?: string;
}

export default function GameList({ status, query }: Props) {
	const filteredGames = status ? GAMES.filter((game => 
		game.status.includes(status) &&
		game.name.toLowerCase().includes(query?.toLowerCase() ?? '')
	)) : GAMES;

	return (
		<div className={styles.gameList}>
			<div>
				{
					Object.keys(GAME_STATUS).filter((key) => status ? key === status : key).map((key) =>
						<div key={key}>
							<h4>
								{GAME_STATUS[key as GameStatusKey]}
							</h4>
							{filteredGames.filter((game) => game.status.includes(key)).map((game) =>
								<Game key={game.name} game={game} />
							)}
						</div>
				)}
			</div>
		</div>
	)
}
