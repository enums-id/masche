<script lang="ts">
	import type { Snippet } from 'svelte';
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';

	let {
		title,
		subtitle,
		children
	}: {
		title: string;
		subtitle?: string;
		children: Snippet;
	} = $props();
</script>

<svelte:head>
	<title>{title} &mdash; Masche Academics</title>
</svelte:head>

<div class="min-h-screen bg-white font-sans text-ink antialiased selection:bg-plum/10">
	<Navbar />

	<!-- Page header -->
	<section class="bg-plum px-6 pt-28 pb-16 md:pt-36 md:pb-20">
		<div class="mx-auto max-w-4xl">
			<h1
				class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-white"
			>
				{title}
			</h1>
			{#if subtitle}
				<p class="mt-3 max-w-lg text-base leading-relaxed text-white/50">{subtitle}</p>
			{/if}
		</div>
	</section>

	<!-- Content -->
	<main class="px-6 py-16 md:py-24">
		<div class="mx-auto max-w-4xl">
			{@render children()}
		</div>
	</main>

	<Footer />
</div>
