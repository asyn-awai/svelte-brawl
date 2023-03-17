<script lang='ts'>
    export let id: string; //src
    export let name: string;
    export let power: BrawlerStat['power']
    export let rank: BrawlerStat['rank']
    export let trophies: BrawlerStat['trophies']
    export let highestTrophies: BrawlerStat['highestTrophies']
    export let starPowers: BrawlerStat['starPowers']
    export let gadgets: BrawlerStat['gadgets']
    export let gears: BrawlerStat['gears']
    import type { BrawlerStat } from '$lib/types'
</script>

<div class='w-full grid grid-cols-6 -skew-x-12 border-4 h-10 p-5 py-2'>
    <div class='aspect-square border-2 border-black flex-1 cols-span-1'>
        <img class='object-cover' src={itemImg} alt={name} /> 
    </div>
    <div class='flex flex-col items-center gap-2 font-lilita flex-1 cols-span-2'>
        <p class='text-xl text-white font-bold'>{name}</p>
    </div>
    <div class='flex items-center justify-center gap-5 flex-1 cols-span-2'>
        <div class=''>

        </div>
        <div class=''>

        </div>
        <div class=''>

        </div>
    </div>
    <div>
        <p class='text-white text-xl font-bold'>{value}</p>
    </div>
</div>