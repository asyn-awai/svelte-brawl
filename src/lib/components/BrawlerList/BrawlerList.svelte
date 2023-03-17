<script lang='ts'>
    export let brawlers: BrawlerStat[];
    import type { BrawlerStat } from '$lib/types'
    import BrawlerListItem from './BrawlerListItem.svelte'
    
    let sortBy: 'rarity' | 'trophies' | 'power level' = 'rarity'

    $: 
</script>

<div class='w-full flex flex-col items-center gap-5'>
    <div class=''>
    
    </div>
    <div class='flex items-center font-lilita'>
        
    </div>
    <div class='flex w-full gap-3'>
        {#each brawlers as brawler (brawler.id)}
            <BrawlerListItem {...brawler}  />
        {/each}
    </div>
</div>