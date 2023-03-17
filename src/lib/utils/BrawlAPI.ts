import type { Player } from '$lib/types';
import { APIError } from './Errors';

export default class BrawlAPI {
	private proxyURL = 'https://bsproxy.royaleapi.dev/'; // 45.79.218.79
	private baseURL = 'https://api.brawlstars.com/v1';
	private headers = {
		Authorization: `Bearer ${this.apiKey}`,
		Accept: 'application/json'
	};

	public constructor(private apiKey: string) {
		this.headers = {
			Authorization: `Bearer ${this.apiKey}`,
			Accept: 'application/json'
		};
	}

	private preprocessTag(tag: string) {
		return '%23' + tag.toUpperCase().replace(/#/g, '');
	}

	private async fetch(endpoint: string) {
		const res = await fetch(this.baseURL + endpoint, {
			method: 'GET',
			headers: this.headers
		});
		if (!res.ok) throw new APIError(res, await res.text());
		return await res.json();
	}

	public async getPlayer(tag: string): Promise<Player> {
		tag = this.preprocessTag(tag);
		return await this.fetch(`/players/${tag}`);
	}

	public async getBattleLog(tag: string) {
		tag = this.preprocessTag(tag);
		return await this.fetch(`/players/${tag}/battlelog`);
	}

	public async getClub(tag: string) {
		tag = this.preprocessTag(tag);
		return await this.fetch(`/clubs/${tag}`);
	}

	public async getClubMembers(tag: string) {
		tag = this.preprocessTag(tag);
		return await this.fetch(`/clubs/${tag}/members`);
	}

	public async getBrawler(id: string) {
		return await this.fetch(`/brawlers/${id}`);
	}

	public async getRankings(country: string, type: 'clubs' | 'players') {
		return {
			ranks: await this.fetch(`rankings/${country}/${type}`),
			country: country,
			type: type
		};
	}

	public async getBrawlerRankings(country: string, id: string) {
		return await this.fetch(`rankings/${country}/brawlers/${id}`);
	}

	public getEventRotation() {
		return this.fetch('/events/rotation');
	}
}
