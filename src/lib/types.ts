export interface Player {
	club: {
		tag: string;
		name: string;
	};
	'3vs3Victories': number;
	isQualifiedFromChampionshipChallenge: boolean;
	icon: {
		id: number;
	};
	tag: string;
	name: string;
	trophies: number;
	expLevel: number;
	expPoints: number;
	highestTrophies: number;
	// powerPlayPoints: number;
	highestPowerPlayPoints: number;
	soloVictories: number;
	duoVictories: number;
	bestRoboRumbleTime: number;
	bestTimeAsBigBrawler: number;
	brawlers: BrawlerStat[];
	nameColor: string;
}

/**
 * Represents a country code.
 */
export type Country =
	| 'global'
	| 'af'
	| 'ax'
	| 'al'
	| 'dz'
	| 'as'
	| 'ad'
	| 'ao'
	| 'ai'
	| 'aq'
	| 'ag'
	| 'ar'
	| 'am'
	| 'aw'
	| 'aс'
	| 'au'
	| 'at'
	| 'az'
	| 'bs'
	| 'bh'
	| 'bd'
	| 'bb'
	| 'by'
	| 'be'
	| 'bz'
	| 'bj'
	| 'bm'
	| 'bt'
	| 'bo'
	| 'ba'
	| 'bw'
	| 'bv'
	| 'br'
	| 'io'
	| 'vg'
	| 'bn'
	| 'bg'
	| 'bf'
	| 'bi'
	| 'kh'
	| 'cm'
	| 'ca'
	| 'ic'
	| 'cv'
	| 'bq'
	| 'ky'
	| 'cf'
	| 'ea'
	| 'td'
	| 'cl'
	| 'cn'
	| 'cx'
	| 'cc'
	| 'co'
	| 'km'
	| 'cg'
	| 'cd'
	| 'ck'
	| 'cr'
	| 'ci'
	| 'hr'
	| 'cu'
	| 'cw'
	| 'cy'
	| 'cz'
	| 'dk'
	| 'dg'
	| 'dj'
	| 'dm'
	| 'do'
	| 'ec'
	| 'eg'
	| 'sv'
	| 'gq'
	| 'er'
	| 'ee'
	| 'et'
	| 'fk'
	| 'fo'
	| 'fj'
	| 'fi'
	| 'fr'
	| 'gf'
	| 'pf'
	| 'tf'
	| 'ga'
	| 'gm'
	| 'ge'
	| 'de'
	| 'gh'
	| 'gi'
	| 'gr'
	| 'gl'
	| 'gw'
	| 'gy'
	| 'ht'
	| 'hm'
	| 'hn'
	| 'hk'
	| 'hu'
	| 'is'
	| 'in'
	| 'id'
	| 'ir'
	| 'iq'
	| 'ie'
	| 'im'
	| 'il'
	| 'it'
	| 'jm'
	| 'jp'
	| 'je'
	| 'jo'
	| 'kz'
	| 'ke'
	| 'ki'
	| 'xk'
	| 'kw'
	| 'la'
	| 'lv'
	| 'lb'
	| 'ls'
	| 'lr'
	| 'ly'
	| 'li'
	| 'lt'
	| 'lu'
	| 'mo'
	| 'mk'
	| 'mg'
	| 'mw'
	| 'my'
	| 'mv'
	| 'ml'
	| 'mt'
	| 'mh'
	| 'mq'
	| 'mr'
	| 'mu'
	| 'yt'
	| 'mx'
	| 'fm'
	| 'md'
	| 'mc'
	| 'mn'
	| 'me'
	| 'ms'
	| 'ma'
	| 'mz'
	| 'mm'
	| 'na'
	| 'nr'
	| 'np'
	| 'nl'
	| 'nc'
	| 'nz'
	| 'ni'
	| 'ne'
	| 'ng'
	| 'nu'
	| 'nf'
	| 'kp'
	| 'mp'
	| 'no'
	| 'om'
	| 'pk'
	| 'pw'
	| 'ps'
	| 'pa'
	| 'pg'
	| 'py'
	| 'pe'
	| 'ph'
	| 'pn'
	| 'pl'
	| 'pt'
	| 'pr'
	| 'qa'
	| 're'
	| 'ro'
	| 'ru'
	| 'rw'
	| 'bl'
	| 'sh'
	| 'kn'
	| 'lc'
	| 'mf'
	| 'pm'
	| 'ws'
	| 'sn'
	| 'rs'
	| 'sc'
	| 'sl'
	| 'sg'
	| 'sx'
	| 'sk'
	| 'si'
	| 'sb'
	| 'so'
	| 'za'
	| 'kr'
	| 'ss'
	| 'es'
	| 'lk'
	| 'vc'
	| 'sd'
	| 'sr'
	| 'sj'
	| 'sz'
	| 'se'
	| 'ch'
	| 'sy'
	| 'tw'
	| 'tj'
	| 'tz'
	| 'th'
	| 'tl'
	| 'tg'
	| 'tk'
	| 'to'
	| 'tt'
	| 'ta'
	| 'tn'
	| 'tr'
	| 'tm'
	| 'tc'
	| 'tv'
	| 'um'
	| 'vi'
	| 'ug'
	| 'ua'
	| 'ae'
	| 'gb'
	| 'us'
	| 'uy'
	| 'uz'
	| 'vu'
	| 'va'
	| 've'
	| 'vn'
	| 'wf'
	| 'eh'
	| 'ye'
	| 'zm'
	| 'zw';

/**
 * Represents the different types of game modes in the game.
 */
export type Mode =
	| 'soloShowdown'
	| 'duoShowdown'
	| 'heist'
	| 'bounty'
	| 'siege'
	| 'gemGrab'
	| 'brawlBall'
	| 'bigGame'
	| 'bossFight'
	| 'roboRumble'
	| 'takedown'
	| 'loneStar'
	| 'presentPlunder'
	| 'hotZone'
	| 'superCityRampage'
	| 'knockout'
	| 'volleyBrawl'
	| 'basketBrawl'
	| 'holdTheTrophy'
	| 'trophyThieves'
	| 'duels'
	| 'wipeout'
	| 'payload'
	| 'botDrop'
	| 'hunters'
	| 'lastStand'
	| 'unknown';
/**
 * Represents the type of a battle.
 * @type {'soloRanked' | 'teamRanked' | 'ranked'}
 */
export type BattleType = 'soloRanked' | 'teamRanked' | 'ranked';
/**
 * Represents the result of a battle.
 * @type {BattleResult}
 */
export type BattleResult = 'victory' | 'defeat' | 'draw';
/**
 * Represents the role of a member in a club.
 * @type {ClubMemberRole}
 */
export type ClubMemberRole =
	| 'notMember'
	| 'member'
	| 'president'
	| 'senior'
	| 'vicePresident'
	| 'unknown';
/**
 * Represents the type of a club.
 * @type {ClubType}
 */
export type ClubType = 'open' | 'inviteOnly' | 'closed' | 'unknown';

export interface BrawlerStat {
	id: number;
	name: string;
	power: number;
	rank: number;
	trophies: number;
	highestTrophies: number;
	gears: {
		id: number;
		name: string;
		level: number;
	}[];
	starPowers: {
		id: number;
		name: string;
	}[];
	gadgets: {
		id: number;
		name: string;
	}[];
}
