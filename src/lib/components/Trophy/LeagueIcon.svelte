<script lang='ts'>
    export let twSize: string
    import l from '$lib/images/league_icon_04.png'
</script>

<div class='{twSize} relative flex justify-center'>
    <div class='w-full h-full'>
        <img src={l} alt='league' />
    </div>
    <p class='px-2 font-lilita text-white'>
        III
    </p>
</div>