<script lang="ts">
	export let trophies: number;
	export let twSize: string;
	export let className: string;
	import l from '$lib/images/leagues/league_icon_05.png';
	import { getTrophyRangeData } from '$lib/utils/utils';

	const toRomanNumeral = (num: 1 | 2 | 3 | 4 | 5 | undefined) => {
		return num ? ['I', 'II', 'III', 'IV', 'V'][num - 1] : '';
	};

	$: iconSrc = getTrophyRangeData(trophies)?.icon;
	$: prestige = toRomanNumeral(getTrophyRangeData(trophies)?.prestige);

</script>

<div class="{twSize} {className} relative flex justify-center">
	<div class="w-full h-full">
		<img class="h-full object-contain" src={iconSrc} alt="league" />
	</div>
	<p class="absolute text-center px-2 font-lilita bg-black rounded-lg text-white top-[80%]">
		{prestige}
	</p>
</div>
