import { IGame } from "@/app/types";
import { NextRequest } from "next/server";

const games: IGame[] = [];

export async function GET() {
	return Response.json({ games })
}

export async function POST(req: NextRequest) {
	
	// obtener los juegos del req
	// storear en la db
	// redirect a la pagina inicial con los juegos ya cargados
	const gamesData = await(req.json())

	games.push(...gamesData);

	return Response.json({ data: games });
}
