<script lang="ts">
	import { base } from '$app/paths';
	import { reveal } from '$lib/actions/reveal';
	import logo from '$lib/assets/logo/masche-primary-horizontal.svg';
	import content from '$lib/data/content.json';

	let visible = $state(false);
	const c = content.callToAction;
</script>

<!-- Top gradient section -->
<div
	class="relative overflow-hidden px-6 py-28 text-center"
	style="background: linear-gradient(135deg, #4b2e83 0%, #7c5cbf 50%, #2d1a5e 100%);"
	use:reveal={() => (visible = true)}
>
	<!-- Ambient color blobs -->
	<div
		class="pointer-events-none absolute top-0 left-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[80px]"
		style="background: #e6a23c;"
	></div>
	<div
		class="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full opacity-20 blur-[100px]"
		style="background: #8faf9a;"
	></div>

	<div class="relative z-10">
		<h2
			class="text-[clamp(1.8rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-white transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			{#each c.heading.split('\n') as line, i}{#if i > 0}<br />{/if}{line}{/each}
		</h2>
		<p
			class="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/60 transition-all delay-150 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			{c.subtitle}
		</p>
	</div>

	<!-- Overlapping card — pulled up with negative margin on the card itself -->
	<div
		class="relative z-10 mx-auto mt-16 max-w-2xl transition-all delay-300 duration-700 ease-out {visible
			? 'translate-y-0 opacity-100'
			: 'translate-y-10 opacity-0'}"
	>
		<div class="rounded-3xl bg-white px-8 py-10 shadow-2xl shadow-plum/20 ring-1 ring-stone/10">
			<img src={logo} alt="Masche Academics" class="mx-auto mb-6 h-7 w-auto" />
			<h3 class="text-[1.4rem] font-bold tracking-tight text-ink">
				{c.cardHeading}
			</h3>
			<p class="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-slate/50">
				{c.cardDesc}
			</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
				<a
					href="{base}/contact"
					class="w-full cursor-pointer rounded-full border border-stone/30 px-7 py-3.5 text-[14px] font-semibold text-slate/70 transition-all duration-200 hover:border-ink/30 hover:text-ink sm:w-auto"
				>
					{c.cta1}
				</a>
				<a
					href="{base}/contact"
					class="w-full cursor-pointer rounded-full bg-amber px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-amber-dark hover:shadow-lg hover:shadow-amber/25 sm:w-auto"
				>
					{c.cta2}
				</a>
			</div>
		</div>
	</div>
</div>
