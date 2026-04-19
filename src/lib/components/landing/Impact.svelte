<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import content from '$lib/data/content.json';

	let visible = $state(false);

	const c = content.impact;
	const stats = c.stats;
</script>

<!-- Full-width plum banner -->
<div class="bg-plum px-6 py-16 text-center">
	<p class="text-[clamp(1.2rem,3vw,1.8rem)] leading-snug font-bold text-white">
		{c.banner}
	</p>
</div>

<!-- Stats row -->
<section class="px-6 py-16 md:py-20" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-4xl">
		<p
			class="mb-10 text-center text-[11px] font-semibold tracking-widest text-plum uppercase transition-all duration-700 ease-out {visible
				? 'opacity-100'
				: 'opacity-0'}"
		>
			{c.statsLabel}
		</p>
		<div class="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
			{#each stats as stat, i}
				<div
					class="transition-all duration-700 ease-out {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'}"
					style="transition-delay: {i * 100}ms;"
				>
					<p class="text-[clamp(2.5rem,6vw,4rem)] leading-none font-bold text-plum">
						{stat.value}
					</p>
					<p class="mt-3 text-[13px] leading-relaxed text-slate/60">
						{#each stat.label.split('\n') as line, j}
							{#if j > 0}<br />{/if}{line}
						{/each}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
