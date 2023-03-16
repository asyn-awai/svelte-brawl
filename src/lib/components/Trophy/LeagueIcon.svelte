<script lang='ts'>
    export let twSize: string
    export let className: string
    import l from '$lib/images/leagues/league_icon_05.png'

    
</script>

<div class='{twSize} {className} relative flex justify-center'>
    <div class='w-full h-full'>
        <img class='h-full' src={l} alt='league' />
    </div>
    <p class='absolute text-center px-2 font-lilita bg-black rounded-lg text-white top-[80%]'>
        III
    </p>
</div>