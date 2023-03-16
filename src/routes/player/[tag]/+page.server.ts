import { json, error } from '@sveltejs/kit';
//@ts-ignore
import { BRAWL_API_KEY } from '$env/static/private';
// import BrawlStars from 'brawlstars-api-nodejs';
import BrawlAPI from '$lib/utils/BrawlAPI';

interface Params {
	tag: string;
}

const client = new BrawlAPI(BRAWL_API_KEY);

export const load = async ({ params }: { params: Params }) => {
	try {
		const playerData = client.getPlayer(params.tag);
		return playerData;
	} catch (err) {
		console.log(err.reason);
		throw error(500, err.reason);
	}
};

// let profile: any, battleLog: any
// 	try {
// 		[profile, battleLog] = await Promise.all([
// 			(await fetch(`https://api.brawlstars.com/v1/players/${tag}`, {
// 				method: 'GET',
// 				headers: {
// 					Authorization: `Bearer ${BRAWL_API_KEY}`
// 				}
// 			})).json(),
// 			(await fetch(`https://api.brawlstars.com/v1/players/${tag}/battlelog`, {
// 				method: 'GET',
// 				headers: {
// 					Authorization: `Bearer ${BRAWL_API_KEY}`
// 				}
// 			})).json()
// 		]);
// 	} catch (err) {
//         throw error(404, new Error(err))
//     }

// 	return json({
// 		profile: profile,
//         battleLog: battleLog
// 	});
