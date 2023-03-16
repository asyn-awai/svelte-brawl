import { json, error } from '@sveltejs/kit';
//@ts-ignore
import { BRAWL_API_KEY } from '$env/static/private';
import BrawlAPI from '$lib/utils/BrawlAPI';
import { APIError } from '$lib/utils/Errors';

interface Params {
	tag: string;
}

const client = new BrawlAPI(BRAWL_API_KEY);

export const load = async ({ params }: { params: Params }) => {
	return {
		trophies: 30000
	}
	// try {
	// 	const playerData = client.getPlayer(params.tag);
	// 	return playerData;
	// } catch (err) {
	// 	if (!(err instanceof APIError)) throw error(500, JSON.stringify(err));
	// 	console.log(err.reason);
	// 	throw error(err.code, err.reason);
	// }
};
