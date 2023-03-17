<script lang="ts">
	export let trophies: number;
	import { getTrophyRangeData } from '$lib/utils/utils';
	import trophy from '$lib/images/icon_trophy_small.png';

	$: trophyRangeData = getTrophyRangeData(trophies);
</script>

<div class="-left-5 relative border-4 border-black rounded-lg -skew-x-12 w-52 h-10">
	<div class="absolute flex h-full w-full items-center justify-center gap-x-2 skew-x-12">
		<img class="h-4/6" alt="trophy" src={trophy} />
		<p class="text-xl font-lilita font-extrabold text-outline-1 text-white">
			{`${trophies}/${trophyRangeData?.next}`}
		</p>
	</div>
	<div class="absolute w-full h-full rounded-sm -z-10 flex flex-col">
		<div class="flex-1 bg-[#3f211d] rounded-tr-sm" />
		<div class="flex-1 bg-[#66251d] rounded-br-sm" />
	</div>
	<div
		class="flex flex-col rounded-sm h-full"
		style="width: {Math.min(100, trophies / (trophyRangeData?.next ?? 1) * 100)}%;"
	>
		<div class="flex-1 bg-orange-600 rounded-tr-sm" />
		<div class="flex-1 bg-orange-500 rounded-br-sm" />
	</div>
</div>
