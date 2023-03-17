<script lang='ts'>
    export let twSize: string;
    export let id: string
    export let name: string
    export let level: number | undefined

    // import 

    const getGearSrc = (level: number) => {
        if (level === undefined) return "";
        if (name === "") {
            return
        }
        if (name === "") {
            return
        }
        return "";
    }
</script>

<div class='relative {twSize} flex items-center justify-center'>
    {#if level} <!-- gear --> 

    {:else}
        <img class='absolute inset-0 w-full h-full' src='' alt={name} />
    {/if}
</div>