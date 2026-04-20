<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import { reveal } from '$lib/actions/reveal';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';
	import { getWhatsAppLink, whatsappMessages } from '$lib/utils/whatsapp';

	let visible = $state(false);

	const c = $derived((content as any)[langStore.value].about);
	const colorMap = ['bg-plum/10 text-plum', 'bg-sage/15 text-sage-dark', 'bg-amber/10 text-amber-dark', 'bg-ink/8 text-ink'];
	const values = $derived(c.values.map((v: any, i: number) => ({ ...v, color: colorMap[i] })));
</script>

<PageShell title={c.pageTitle} subtitle={c.pageSubtitle}>
	<div class="space-y-20" use:reveal={() => (visible = true)}>
		<!-- Misi -->
		<section
			class="transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				{c.missionLabel}
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-ink">
				{c.missionTitle}
			</h2>
			<div class="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-slate/60">
				{#each c.missionContent as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</section>

		<!-- Cerita -->
		<section
			class="transition-all delay-100 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				{c.storyLabel}
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-ink">{c.storyTitle}</h2>
			<div class="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-slate/60">
				{#each c.storyContent as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</section>

		<!-- Nilai -->
		<section
			class="transition-all delay-200 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				{c.valuesLabel}
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-ink">
				{c.valuesTitle}
			</h2>
			<div class="mt-8 grid gap-4 md:grid-cols-2">
				{#each values as value}
					<div class="rounded-3xl border border-stone/15 bg-white p-7">
						<div
							class="mb-4 flex size-10 items-center justify-center rounded-xl {value.color}"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m4.5 12.75 6 6 9-13.5"
								/>
							</svg>
						</div>
						<h3 class="text-base font-semibold text-ink">{value.title}</h3>
						<p class="mt-2 text-[13px] leading-relaxed text-slate/50">{value.desc}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- CTA -->
		<section
			class="rounded-3xl bg-plum/5 p-10 text-center transition-all delay-300 duration-700 ease-out md:p-14 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<h2 class="text-2xl font-bold tracking-tight text-ink">
				{c.ctaHeading}
			</h2>
			<p class="mt-3 text-[15px] text-slate/50">
				{c.ctaDesc}
			</p>
			<a
				href={getWhatsAppLink(whatsappMessages.consultation)}
				target="_blank"
				rel="noopener noreferrer"
				class="mt-8 inline-block cursor-pointer rounded-full bg-plum px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-plum/20"
			>
				{c.ctaButton}
			</a>
		</section>
	</div>
</PageShell>
