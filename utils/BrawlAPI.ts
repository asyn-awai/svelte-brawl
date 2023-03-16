import { handleAPIError } from './Errors';

export default class BrawlAPI {
	private baseURL = 'https://api.brawlstars.com/v1';
	private userData: any = {};

	public constructor(private apiKey: string, private tag: string) {}

	public async init() {
		try {
			const res = await fetch(`${this.baseURL}/players/${this.tag}`);
			var data = await res.json();
		} catch (err) {
			handleAPIError(err);
		}
		this.userData = data;
	}
}
