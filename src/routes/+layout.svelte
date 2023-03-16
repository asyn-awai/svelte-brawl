<script lang="ts">
	import './styles.css';
	import bg from "$lib/images/bs-bg.jpg"
	import Nav from '$lib/components/Nav/Nav.svelte';
</script>

<div class="app">
	<!-- <img src={bg} class='object-cover w-full h-full fixed -z-50'/> -->
	<Nav />

	<div class='flex justify-center mt-5'>
		<div class='w-9/12 main-container'>
			<slot />
		</div>
	</div>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>