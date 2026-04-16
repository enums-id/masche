<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import logo from '$lib/assets/masche-logo-primary-03.png';
	import logoDark from '$lib/assets/masche-logo-primary-02.png';

	let scrollY = $state(0);
	let heroHeight = $state(0);

	onMount(() => {
		const hero = document.getElementById('hero');
		if (hero) {
			heroHeight = hero.offsetHeight;
			const ro = new ResizeObserver(() => {
				heroHeight = hero.offsetHeight;
			});
			ro.observe(hero);
			return () => ro.disconnect();
		}
	});

	let pastHero = $derived(scrollY >= heroHeight && heroHeight > 0);

	const navLinks = [
		{ label: 'Produk & Fitur', href: `${base}/#produk` },
		{ label: 'Benefit', href: `${base}/#benefit` },
		{ label: 'Artikel', href: `${base}/#artikel` },
		{ label: 'Tentang Kami', href: `${base}/about` },
		{ label: 'Kontak', href: `${base}/contact` }
	];
</script>

<svelte:window bind:scrollY />

<header
	class="fixed top-0 z-50 w-full transition-all duration-300 bg-white"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
		<a href="{base}/" class="transition-opacity duration-200 hover:opacity-70">
			<img
				src={logoDark}
				alt="Masche Academics"
				class="h-7 w-auto transition-all duration-300"
			/>
		</a>

		<nav class="hidden items-center gap-7 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-[13px] font-medium transition-colors duration-200 text-black"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<a
			href="{base}/contact"
			class="cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 bg-plum text-white hover:bg-plum-light hover:shadow-md hover:shadow-plum/20"
		>
			Hubungi Kami
		</a>
	</div>
</header>
