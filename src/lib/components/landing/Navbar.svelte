<script lang="ts">
	import { onMount } from 'svelte';
	import logo from '$lib/assets/masche-logo-primary-03.png';

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
</script>

<svelte:window bind:scrollY />

<header class="fixed top-0 z-50 w-full backdrop-blur-sm transition-colors duration-300 {pastHero ? 'bg-plum' : 'bg-plum/80'}">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
		<a href="/" class="transition-opacity duration-200 hover:opacity-70">
			<img src={logo} alt="Masche Academics" class="h-7 w-auto" />
		</a>

		<!-- <nav class="hidden items-center gap-8 md:flex">
			<a href="#ecosystem" class="cursor-pointer text-[13px] text-slate/60 transition-colors duration-200 hover:text-ink">How it works</a>
			<a href="#product" class="cursor-pointer text-[13px] text-slate/60 transition-colors duration-200 hover:text-ink">Product</a>
			<a href="#impact" class="cursor-pointer text-[13px] text-slate/60 transition-colors duration-200 hover:text-ink">Impact</a>
			<a href="#testimonials" class="cursor-pointer text-[13px] text-slate/60 transition-colors duration-200 hover:text-ink">Proof</a>
		</nav> -->

		<a
			href="#cta"
			class="cursor-pointer rounded-full bg-white px-5 py-2 text-[13px] font-medium text-black transition-all duration-200 hover:bg-plum-light hover:shadow-lg hover:shadow-plum/15"
		>
			Request Demo
		</a>
	</div>
</header>
