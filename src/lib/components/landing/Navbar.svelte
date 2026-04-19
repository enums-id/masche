<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo/masche-primary-horizontal.svg';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';

	let scrollY = $state(0);
	let heroHeight = $state(0);

	onMount(() => {
		langStore.init();
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

	const c = $derived((content as any)[langStore.value].navbar);
	const navLinks = $derived(c.links.map((l: any) => ({ ...l, href: `${base}${l.href}` })));
</script>

<svelte:window bind:scrollY />

<header
	class="fixed top-0 z-50 w-full transition-all duration-300 bg-white"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
		<a href="{base}/" class="transition-opacity duration-200 hover:opacity-70">
			<img
				src={logo}
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

		<div class="flex items-center gap-4">
			<button
				onclick={() => langStore.toggle()}
				class="hidden rounded-full bg-stone/10 px-3 py-1.5 text-[12px] font-semibold transition-all duration-200 md:flex gap-2 hover:bg-stone/15"
				aria-label="Toggle language"
			>
				<span class="transition-colors {langStore.value === 'id' ? 'text-ink' : 'text-slate/40'}">
					ID
				</span>
				<span class="text-stone/20">|</span>
				<span class="transition-colors {langStore.value === 'en' ? 'text-ink' : 'text-slate/40'}">
					EN
				</span>
			</button>

			<a
				href="{base}/contact"
				class="cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 bg-plum text-white hover:bg-plum-light hover:shadow-md hover:shadow-plum/20"
			>
				{c.cta}
			</a>
		</div>
	</div>
</header>
