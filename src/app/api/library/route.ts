import { GAME_STATUS, RawgGame } from "@/app/types";
import GameDB from "../db/models/game";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const filters = req.nextUrl.searchParams;
	const status = new RegExp(filters.get('status') ?? '', 'i');
	const q = new RegExp(filters.get('q') ?? '', 'i');
	const games = await GameDB.find({ status, name: q });

	return Response.json({ games })
}

export async function POST(req: NextRequest) {
	const games: RawgGame[] = await req.json();
	const createdGames = await GameDB.insertMany(games.map((game) => ({
		externalId: game.id,
		name: game.name,
		status: GAME_STATUS.backlog.toLowerCase() as string,
		image: game.background_image
	})));

	return Response.json({ data: createdGames });
}
