<script lang="ts">
	import { onMount } from 'svelte';
	import search from '$lib/images/search.png';

	let searchType: 'player' | 'club' = 'player';
	let tag: string = '';
	let mouseDown: boolean = false;
	let inputValue: string = '';
	let inputFocused: boolean = false;
	$: searchTypeFormat = searchType === 'player' ? 'Player' : 'Club';
	$: {
		// console.log(mouseDown)
	}
	let savedProfiles: {
		tag: string;
		name: string;
		nameColor: string;
		trophies: number;
	}[] = [];

	onMount(() => {
		const getSavedProfiles = window.localStorage.getItem('savedProfiles');
		if (!getSavedProfiles) {
			window.localStorage.setItem('savedProfiles', JSON.stringify([]));
		}
		if (getSavedProfiles && Array.isArray(getSavedProfiles)) {
			savedProfiles = getSavedProfiles;
		}
	});
</script>

<div class="flex gap-5 items-center">
	<!-- <button
		class={`flex items-center select-none`}
		on:mousedown={() => (mouseDown = true)}
		on:mouseup={() => (mouseDown = false)}
		on:click={() => (searchType = searchType === 'player' ? 'club' : 'player')}
	>
		<p class="w-full h-full">
			<span class="sm:inline hidden font-semibold">Search By:</span>
			<b class="text-blue-500 text-lg">
				{` ${searchTypeFormat}`}
			</b>
		</p>
	</button> -->
	<div class='flex items-center font-lilita'>
        <button 
			on:click={() => searchType = "player"}
			class='border-black-500 bg-black w-24 h-11 angled-right-container flex items-center justify-center p-1 pr-0.5 rounded-lg rounded-tr-none rounded-br-none transition-transform {searchType === 'player' ? 'scale-105' : 'scale-100'}'
		>
            <div class='w-full h-full flex items-center justify-center angled-right-inner rounded-md rounded-tr-none rounded-br-none transition-colors {searchType === 'player' ? 'bg-orange-500' : 'bg-gray-600'} border-y-4 {searchType === 'player' ? 'border-t-orange-400 border-b-orange-600' : 'border-t-gray-500 border-b-gray-700'}'>
                <p class='mr-5'>PLAYER</p>
            </div>
        </button>
        <button 
			on:click={() => searchType = "club"}
			class='relative -left-[1.9rem] bg-black w-24 h-11  angled-left-container flex items-center justify-center p-1 pl-0.5 rounded-lg rounded-tl-none rounded-bl-none {searchType === 'club' ? 'scale-105' : 'scale-100'} transition-transform'
		>
            <div class='w-full h-full flex items-center justify-center angled-left-inner rounded-md rounded-tl-none rounded-bl-none transition-colors {searchType === 'club' ? 'bg-[#ee7527]' : 'bg-gray-600'} border-y-4 {searchType === 'club' ? 'border-t-orange-400 border-b-orange-600' : 'border-t-gray-500 border-b-gray-700'}'>
                <p class='ml-5'>CLUB</p>
            </div>
        </button>
    </div>
	<div class="flex flex-col gap-5 relative">
		<div class="flex items-center">
			<div
				class="bg-white flex flex-col -skew-x-12 border-4 border-black border-r-0 rounded-tr-none rounded-br-none rounded-md w-44 h-12"
			>
				<div class="py-0.5 bg-gray-300 w-full" />
				<input
					class="bg-white mx-3 uppercase font-lilita placeholder:font-bold placeholder:tracking-wider text-xl skew-x-12 ring-none outline-none w-5/6 flex-1"
					placeholder="#YOURTAG"
					on:focus={() => (inputFocused = true)}
					on:blur={() => (inputFocused = false)}
					bind:value={inputValue}
				/>
			</div>
			<button
				class={`hover:scale-105 transition-all rounded-md rounded-tl-none rounded-bl-none border-4 border-black h-12 w-14 -skew-x-12`}
			>
				<div
					class="w-full h-full flex items-center justify-center bg-[#256ffe] p-2 border-y-4 border-t-[#2192fb] border-b-[#1059ec]"
				>
					<img class="skew-x-12 aspect-square w-5/6" src={search} alt="search" />
				</div>
			</button>
		</div>
		<div
			class={`text-black absolute w-full flex flex-col items-center min-h-24 top-[120%] transition-transform origin-top ${
				inputFocused ? 'scale-y-100' : 'scale-y-0'
			}`}
		>
			<ul class="w-[120%] bg-white p-2 rounded-lg border-2 border-black">
				{#each savedProfiles as profile}
					<li>{JSON.stringify(profile)}</li>
				{:else}
					<h2>no saved profiles</h2>
				{/each}
			</ul>
		</div>
	</div>
</div>
