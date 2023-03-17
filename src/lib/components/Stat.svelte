<script lang='ts'>
    export let name: string;
    export let value: string | number;
    import type { Mode } from '$lib/types'
    // import icon from '$lib/images/img.png'
    import trophy from '$lib/images/icon_trophy_small.png'

    const getIcon = (name: string): string | null => {
        const icons: Partial<Record<string, string>> = {
            
        }
        return icons[name] ?? null
    }
</script>

<div class='relative flex flex-col items-center justify-center w-40'>
    <p class='uppercase -top-4 font-lilita font-bold text-outline-1 text-white text-center'>
        {name}
    </p>
    <div class='relative h-full w-full flex items-center'>
        <div class='-left-3 absolute h-[110%] z-10'>
            <img class='h-full' alt={name + " icon"} src={trophy} />
        </div>
        <div class='w-full font-bold bg-[rgba(0,0,0,0.5)] -skew-x-12 rounded-sm h-8 px-2 grid place-items-center'>
            <p class='skew-x-12 font-lilita text-white text-outline-1 text-xl'>
                {value}
            </p>
        </div>
    </div>
</div>