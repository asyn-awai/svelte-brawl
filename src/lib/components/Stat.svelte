<script lang='ts'>
    export let name: string;
    export let value: string | number;
    import type { Mode } from '$lib/types'
    import highestTrophies from '$lib/images/highest_trophies_icon.png'
    import team3 from '$lib/images/3vs3_icon.png'
    import ssd from '$lib/images/ssd_icon.png'
    import dsd from '$lib/images/dsd_icon.png'

    const getIcon = (name: string): string | null => {
        const icons: Partial<Record<string, string>> = {
            'highest trophies': highestTrophies, 
            '3v3 victories': team3,
            'solo victories': ssd,
            'duo victories': dsd
        }
        return icons[name.toLowerCase()] ?? null
    }
</script>

<div class='relative flex flex-col items-center justify-center w-40 h-min'>
    <p class='uppercase -top-4 font-lilita font-bold text-outline-1 text-white text-center'>
        {name}
    </p>
    <div class='relative h-full w-full flex items-center'>
        <div class='-left-3 absolute h-[130%] z-10'>
            <img class='h-full' alt={name + " icon"} src={getIcon(name)} />
        </div>
        <div class='w-full font-bold bg-[rgba(0,0,0,0.5)] -skew-x-12 rounded-sm h-8 px-2 grid place-items-center'>
            <p class='skew-x-12 font-lilita text-white text-outline-1 text-xl'>
                {value}
            </p>
        </div>
    </div>
</div>