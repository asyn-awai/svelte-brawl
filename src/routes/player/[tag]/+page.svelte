<script lang="ts">
	export let data: Player;
	import type { Player } from '$lib/types';
	import { onMount } from 'svelte';
	import TrophyProgress from '$lib/components/Trophy/TrophyProgress.svelte';
</script>

<div class="grid grid-rows-6 w-full p-10 text-white">
	<section class="flex gap-5 items-center">
		<TrophyProgress trophies={data.trophies} />
		<!-- <div class="aspect-square w-40 relative">
			<img src="https://cdn.brawlstats.com/player-thumbnails/28000163.png" alt="pfp" />
			<div class="w-full flex items-center justify-center">
				<strong
					class="s font-lilita text-2xl px-2 font-extrabold absolute text-outline-2 text-[#94e5ff] top-[90%] rounded-md"
					>{data.tag}</strong
				>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<h2 class="font-extrabold text-3xl {data.nameColor}">{data.name}</h2>
            
		</div> -->
	</section>
</div>
