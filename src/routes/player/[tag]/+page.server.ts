import { json, error } from '@sveltejs/kit';
import { BRAWL_API_KEY } from '$env/static/private';
import BrawlStars from 'brawlstars-api-nodejs';

interface Params {
	tag: string;
}

const client = new BrawlStars.client(BRAWL_API_KEY);

export const load = async ({ params }: { params: Params }) => {
	const tag = '#' + params.tag.toUpperCase().replace(/#/g, '');
	try {
		
		return JSON.parse(
			JSON.stringify({
				// profile: await client.player(tag),
				// battleLog: await client.battleLog(tag)
				events: await (await fetch("https://api.brawlapi.com/v1/events", {
					method: "GET",
					headers: {
						Accept: "application/json"
					}
				})).json()
			})
		);
	} catch (err) {
		throw error(500, new Error('' + Object.keys(err)));
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
