<script lang="ts">
	export let data: Player;
	import type { Player } from '$lib/types';
	import { onMount } from 'svelte';
	import TrophyProgress from '$lib/components/Trophy/TrophyProgress.svelte';
	import Stat from '$lib/components/Stat.svelte';

</script>

<div class="grid grid-rows-6 w-full p-10 text-white">
	<section class="flex gap-5 items-center">
		<!-- <TrophyProgress trophies={data.trophies} /> -->
		<div class="aspect-square w-40 relative">
			<img src="https://cdn.brawlstats.com/player-thumbnails/{data.icon.id}.png" alt="pfp" />
			<div class="w-full flex items-center justify-center">
				<strong
					class="text-outline-1 font-lilita text-2xl px-2 font-extrabold absolute text-[#94e5ff] top-[90%] rounded-md"
					>{data.tag}</strong
				>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<h2 class="text-outline-2 font-extrabold text-5xl {data.nameColor}">{data.name}</h2>
			<TrophyProgress trophies={data.trophies} />
		</div>
	</section>
</div>
