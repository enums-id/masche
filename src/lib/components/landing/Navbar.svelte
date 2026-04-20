<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo/masche-primary-horizontal.svg';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';
	import { getWhatsAppLink, whatsappMessages } from '$lib/utils/whatsapp';

	let scrollY = $state(0);
	let heroHeight = $state(0);
	let isMobileMenuOpen = $state(false);

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

<header class="fixed top-0 z-50 w-full bg-white transition-all duration-300">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
		<a href="{base}/" class="transition-opacity duration-200 hover:opacity-70">
			<img src={logo} alt="Masche Academics" class="h-7 w-auto transition-all duration-300" />
		</a>

		<nav class="hidden items-center gap-7 md:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-[13px] font-medium text-black transition-colors duration-200"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-4 md:flex">
			<button
				onclick={() => langStore.toggle()}
				class="flex gap-2 rounded-full bg-stone/10 px-3 py-1.5 text-[12px] font-semibold transition-all duration-200 hover:bg-stone/15"
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
				href={getWhatsAppLink(whatsappMessages.general)}
				class="cursor-pointer rounded-full bg-plum px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-plum-light hover:shadow-md hover:shadow-plum/20"
			>
				{c.cta}
			</a>
		</div>

		<button
			class="md:hidden"
			onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
			aria-label="Toggle menu"
		>
			<svg class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
				/>
			</svg>
		</button>
	</div>

	{#if isMobileMenuOpen}
		<div class="border-t bg-white px-6 py-6 md:hidden">
			<nav class="flex flex-col gap-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-[15px] font-medium text-black"
						onclick={() => (isMobileMenuOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<div class="flex items-center justify-between pt-4">
					<button
						onclick={() => langStore.toggle()}
						class="flex gap-2 rounded-full bg-stone/10 px-3 py-1.5 text-[12px] font-semibold"
					>
						<span class={langStore.value === 'id' ? 'text-ink' : 'text-slate/40'}>ID</span>
						<span class="text-stone/20">|</span>
						<span class={langStore.value === 'en' ? 'text-ink' : 'text-slate/40'}>EN</span>
					</button>

					<a
						href={getWhatsAppLink(whatsappMessages.general)}
						class="rounded-full bg-plum px-5 py-2.5 text-[13px] font-semibold text-white"
						onclick={() => (isMobileMenuOpen = false)}
					>
						{c.cta}
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
