import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('search');
	
	const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${query}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	
	const data = await(res.json());

	return Response.json(data);
}
