<script lang='ts'>
  export let trophies: number;
  import LeagueIcon from './LeagueIcon.svelte';
  import TrophyBar from './TrophyBar.svelte'
</script>

<div class='relative flex items-center'> 
  <LeagueIcon twSize="h-[4.5rem]" />
  <TrophyBar trophies={trophies} />
</div>