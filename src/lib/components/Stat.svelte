<script lang='ts'>
    export let name: string;
    export let value: string;
    import type { Mode } from '$lib/types'
    // import icon from '$lib/images/img.png'

    const getIcon = (name: string): string | null => {
        const icons: Partial<Record<Mode, string>> = {
            
        }
        return icons[name] ?? null
    }
</script>

<div class='relative flex items-center bg-[rgba(0, 0, 0, 0.4)] -skew-x-12 rounded-lg'>
    <p class='absolute skew-x-12 -top-5 font-lilita font-bold text-outline-1 text-white text-center'>
        {name}
    </p>
    <p class='skew-x-12 font-lilita text-white text-outline-1 font-bold'>
        {stat}
    </p>
</div>