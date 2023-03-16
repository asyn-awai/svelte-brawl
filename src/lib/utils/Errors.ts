class APIError extends Error {
	public url: string;
	public code: number;
	public headers: Headers;
	public reason: string;

	constructor(public res: Response, body: string) {
		super();

		this.url = res.url;
		this.code = res.status;
		this.headers = res.headers;

		this.reason =
			body.startsWith('{') && body.endsWith('}') ? JSON.parse(body).reason || body : body;

		this.message = `BrawlStars API Rejection\n\n${this.url}\n${body}\n${this.code}`;
	}
}

export { APIError };
