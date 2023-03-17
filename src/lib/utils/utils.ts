import wood from '$lib/images/leagues/league_icon_01.png';
import bronze from '$lib/images/leagues/league_icon_02.png';
import silver from '$lib/images/leagues/league_icon_03.png';
import gold from '$lib/images/leagues/league_icon_04.png';
import diamond from '$lib/images/leagues/league_icon_05.png';
import amethyst from '$lib/images/leagues/league_icon_06.png';
import ruby from '$lib/images/leagues/league_icon_07.png';
import masters from '$lib/images/leagues/league_icon_08.png';
import masters2 from '$lib/images/leagues/league_icon_09.png';
import masters3 from '$lib/images/leagues/league_icon_10.png';
import masters4 from '$lib/images/leagues/league_icon_11.png';

interface LeagueInfo {
	name: string;
	icon: string;
	prestige: 1 | 2 | 3 | 4 | 5;
	next: number;
}

export { getTrophyRangeData };

function getTrophyRangeData(trophies: number): LeagueInfo | null {
	if (trophies < 500) return null;
	if (trophies < 1000) {
		return {
			name: 'Wood',
			icon: wood,
			get prestige() {
				return trophies < 650 ? 1 : trophies < 800 ? 2 : 3;
			},
			get next() {
				return trophies < 650 ? 650 : trophies < 800 ? 800 : 1000;
			}
		};
	}
	if (trophies < 2000) {
		return {
			name: 'Bronze',
			icon: bronze,
			get prestige() {
				return trophies < 1300 ? 1 : trophies < 1600 ? 2 : 3;
			},
			get next() {
				return trophies < 1300 ? 1300 : trophies < 1600 ? 1600 : 2000;
			}
		};
	}
	if (trophies < 3000) {
		return {
			name: 'Silver',
			icon: silver,
			get prestige() {
				return trophies < 2300 ? 1 : trophies < 2600 ? 2 : 3;
			},
			get next() {
				return trophies < 2300 ? 2300 : trophies < 2600 ? 2600 : 3000;
			}
		};
	}
	if (trophies < 4000) {
		return {
			name: 'Gold',
			icon: gold,
			get prestige() {
				return trophies < 3300 ? 1 : trophies < 3600 ? 2 : 3;
			},
			get next() {
				return trophies < 3300 ? 3300 : trophies < 3600 ? 3600 : 4000;
			}
		};
	}
	if (trophies < 6000) {
		return {
			name: 'Diamond',
			icon: diamond,
			get prestige() {
				return trophies < 4500 ? 1 : trophies < 5000 ? 2 : trophies < 5500 ? 3 : 4;
			},
			get next() {
				return trophies < 4500 ? 4500 : trophies < 5000 ? 5000 : trophies < 5500 ? 5500 : 6000;
			}
		};
	}
	if (trophies < 8000) {
		return {
			name: 'Amethyst',
			icon: amethyst,
			get prestige() {
				return trophies < 6500 ? 1 : trophies < 7000 ? 2 : trophies < 7500 ? 3 : 4;
			},
			get next() {
				return trophies < 6500 ? 6500 : trophies < 7000 ? 7000 : trophies < 7500 ? 7500 : 8000;
			}
		};
	}
	if (trophies < 10000) {
		return {
			name: 'Ruby',
			icon: ruby,
			get prestige() {
				return trophies < 8500 ? 1 : trophies < 9000 ? 2 : trophies < 9500 ? 3 : 4;
			},
			get next() {
				return trophies < 8500 ? 8500 : trophies < 9000 ? 9000 : trophies < 9500 ? 9500 : 10000;
			}
		};
	}
	if (trophies < 16000) {
		return {
			name: 'Masters',
			icon: masters,
			get prestige() {
				return trophies < 11000
					? 1
					: trophies < 12000
					? 2
					: trophies < 13000
					? 3
					: trophies < 14000
					? 4
					: 5;
			},
			get next() {
				return trophies < 11000
					? 11000
					: trophies < 12000
					? 12000
					: trophies < 13000
					? 13000
					: trophies < 14000
					? 14000
					: 16000;
			}
		};
	}
	if (trophies < 30000) {
		return {
			name: 'Masters II',
			icon: masters2,
			get prestige() {
				return trophies < 18000
					? 1
					: trophies < 20000
					? 2
					: trophies < 22000
					? 3
					: trophies < 25000
					? 4
					: 5;
			},
			get next() {
				return trophies < 18000
					? 18000
					: trophies < 20000
					? 20000
					: trophies < 22000
					? 22000
					: trophies < 25000
					? 25000
					: 30000;
			}
		};
	}
	if (trophies < 50000) {
		return {
			name: 'Masters III',
			icon: masters3,
			get prestige() {
				return trophies < 35000 ? 1 : trophies < 40000 ? 2 : trophies < 45000 ? 3 : 4;
			},
			get next() {
				return trophies < 35000
					? 35000
					: trophies < 40000
					? 40000
					: trophies < 45000
					? 45000
					: 50000;
			}
		};
	}
	return {
		name: 'Masters IV',
		icon: masters4,
		get prestige(): 1 {
			return 1;
		},
		get next() {
			return 50000;
		}
	};
}
