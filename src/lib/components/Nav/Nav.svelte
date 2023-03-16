<script lang="ts">
    export let links = ["a", "b", "c"];
    export let searchBar: boolean = false;

    import Search from './Search.svelte'
</script>

<nav class="py-2 flex justify-center items-center w-full bg-[#091A34] text-white">
    <div class="h-full md:w-4/6 w-11/12 flex md:flex-row flex-col items-center md:justify-between justify-center md:gap-10 gap-2">
        <h1 class='tracking-wider cursor-pointer font-bold font-lilita text-4xl'>Title</h1>
        <div class='flex gap-14 justify-end items-center'>
            <ul class="flex gap-3">
                {#each links as link}
                    <li><a href={"/" + link}>{link}</a></li>
                {/each}
            </ul>
            <Search />
        </div>
    </div>
</nav>
