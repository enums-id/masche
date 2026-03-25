<script lang="ts">
	import { base } from '$app/paths';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);
</script>

<section id="cta" class="scroll-mt-24 px-6 py-32 md:py-48" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-4xl text-center">
		<h2
			class="text-[clamp(2rem,6vw,4.5rem)] leading-[1.08] font-bold tracking-tight text-ink transition-all duration-1000 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			Your institution<br />deserves a backbone.
		</h2>
		<p
			class="mx-auto mt-6 max-w-lg text-lg text-slate/40 transition-all delay-150 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			Not another dashboard. Not another app.<br />
			The invisible architecture that holds everything together.
		</p>

		<div
			class="mt-14 flex flex-col items-center gap-4 transition-all delay-300 duration-700 ease-out sm:flex-row sm:justify-center {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			<a
				href="{base}/contact"
				class="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-plum px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-plum/20"
			>
				<span class="relative z-10">Request Demo</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="relative z-10 size-5 transition-transform duration-300 group-hover:translate-x-1"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
					/></svg
				>
				<div
					class="absolute inset-0 -translate-x-full bg-plum-light transition-transform duration-500 ease-out group-hover:translate-x-0"
				></div>
			</a>
		</div>

		<p
			class="mt-8 text-[13px] text-slate/25 transition-all delay-500 duration-700 ease-out {visible
				? 'opacity-100'
				: 'opacity-0'}"
		>
			Free for 30 days &middot; No credit card required &middot; Setup in 5 minutes
		</p>
	</div>
</section>
