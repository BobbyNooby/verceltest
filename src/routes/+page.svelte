<script>
	import arcaneIcon_result from '../lib/images/arcaneIcon_result.webp';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import NavGrid from '$lib/components/NavGrid.svelte';

	export let data;
	let datar = [];

	// Fade in initiator
	let ready = false;
	onMount(() => {
		ready = true;

		for (const item in data.testDB) {
			datar.push(data.testDB[item]);
		}
		console.log(datar);
		console.log(data.testDB);
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Arcane Odyssey Tools</title>
	<meta name="title" content="Arcane Odyssey Tools" />
	<meta name="description" content="Various Tools for Arcane Odyssey by BobbyNooby" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tools.arcaneodyssey.net/" />
	<meta property="og:title" content="Arcane Odyssey Tools" />
	<meta property="og:description" content="Various Tools for Arcane Odyssey by BobbyNooby" />
	<meta property="og:image" content="https://i.imgur.com/c6n3LP1.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://tools.arcaneodyssey.net/" />
	<meta property="twitter:title" content="Arcane Odyssey Tools" />
	<meta property="twitter:description" content="Various Tools for Arcane Odyssey by BobbyNooby" />
	<meta property="twitter:image" content="https://i.imgur.com/c6n3LP1.png" />

	<!-- Meta Tags Generated with https://metatags.io -->

	<!-- Google Fonts Link -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Open+Sans:wght@700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section class=" items-center snap-center justify-center">
	{#if ready}
		<img
			src={arcaneIcon_result}
			alt="logo"
			in:fly={{ y: 20, duration: 2000 }}
			style="padding-top: 3rem;"
		/>

		<p
			class=" text-7xl font-medium text-gray-300 text-center"
			style="font-family: Merriweather;"
			in:fly={{ y: 20, duration: 3000 }}
			out:fade={{ delay: 250, duration: 300 }}
		>
			Arcane Odyssey Tools
			{#each data.testDB as amogogs}
				<p>{amogogs.name}</p>
			{/each}
		</p>

		<!-- No navbar component as i want this to be a little different -->

		<NavGrid showHome={false} />
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
