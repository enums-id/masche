<script lang="ts">
	import { onMount } from 'svelte';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';
	import { getWhatsAppLink, whatsappMessages } from '$lib/utils/whatsapp';

	let mounted = $state(false);
	const c = $derived((content as any)[langStore.value].hero);

	onMount(() => {
		requestAnimationFrame(() => {
			mounted = true;
		});
	});
</script>

<section id="hero" class="relative flex min-h-svh items-center justify-center overflow-hidden bg-white">

	<!-- ─── Center content ─── -->
	<div class="z-10  w-full px-6 text-center bg-plum py-16 sm:py-32 mx-8 sm:mx-16 rounded-2xl">
		<!-- Big headline -->
		<div
			class="text-[clamp(1.2rem,7vw,3rem)] leading-[1.06] font-bold tracking-tight transition-all duration-700 ease-out {mounted
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<span class="text-white">{c.headline1}</span><br />
			<span class="text-white">{c.headline2}</span>
	</div>

		<!-- Subtitle -->
		<p
			class="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white font-bold transition-all delay-200 duration-700 ease-out md:text-lg {mounted
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			{c.subtitle}
		</p>

		<!-- CTAs -->
		<div
			class="mt-10 flex flex-col items-center justify-center gap-3 transition-all delay-400 duration-700 ease-out sm:flex-row {mounted
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			<a
				href={getWhatsAppLink(whatsappMessages.consultation)}
				target="_blank"
				rel="noopener noreferrer"
				class="cursor-pointer rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-plum backdrop-blur-sm transition-all duration-200 hover:border-white/60 hover:bg-white/10 hover:text-white"
			>
				{c.cta1}
			</a>
			<a
				href={getWhatsAppLink(whatsappMessages.learnMore)}
				target="_blank"
				rel="noopener noreferrer"
				class="cursor-pointer rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-plum backdrop-blur-sm transition-all duration-200 hover:border-white/60 hover:bg-white/10  hover:text-white"
			>
				{c.cta2}
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-1000 duration-700 ease-out {mounted
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<div class="flex size-9 items-center justify-center rounded-full border border-white/12">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-3.5 animate-bounce text-white/30"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</div>
	</div>
</section>

<style>
	/* ── Floating animations (different paths per character) ── */
	.hero-float-0 {
		animation: hf0 8s ease-in-out infinite;
	}
	.hero-float-1 {
		animation: hf1 9.5s ease-in-out infinite;
	}
	.hero-float-2 {
		animation: hf2 7.5s ease-in-out infinite;
	}
	.hero-float-3 {
		animation: hf3 10s ease-in-out infinite;
	}
	.hero-float-4 {
		animation: hf4 8.5s ease-in-out infinite;
	}

	@keyframes hf0 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		33% {
			transform: translate(10px, -16px);
		}
		66% {
			transform: translate(-6px, 12px);
		}
	}
	@keyframes hf1 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(-12px, -10px);
		}
		75% {
			transform: translate(8px, 14px);
		}
	}
	@keyframes hf2 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		40% {
			transform: translate(14px, 10px);
		}
		60% {
			transform: translate(-10px, -14px);
		}
	}
	@keyframes hf3 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		33% {
			transform: translate(-8px, 16px);
		}
		66% {
			transform: translate(12px, -10px);
		}
	}
	@keyframes hf4 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(10px, -12px);
		}
	}

	/* ── Ambient particle drift ── */
	.particle {
		animation: pdrift var(--pd-dur, 20s) ease-in-out infinite;
		animation-delay: var(--pd-delay, 0s);
	}

	@keyframes pdrift {
		0%,
		100% {
			transform: translateY(0) translateX(0);
		}
		33% {
			transform: translateY(-20px) translateX(5px);
		}
		66% {
			transform: translateY(10px) translateX(-3px);
		}
	}
</style>
