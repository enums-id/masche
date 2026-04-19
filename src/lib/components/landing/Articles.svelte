<script lang="ts">
	import { base } from '$app/paths';
	import { reveal } from '$lib/actions/reveal';
	import { articles } from '$lib/data/articles';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';

	let visible = $state(false);

	const c = $derived((content as any)[langStore.value].articles);
	const preview = articles.slice(0, 3);
</script>

<section id="artikel" class="scroll-mt-24 px-6 py-20 md:py-28" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div
			class="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<div>
				<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum uppercase">
					{c.sectionLabel}
				</p>
				<h2 class="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink">
					{c.sectionTitle}<br class="hidden sm:block" /> {c.sectionSubtitle}
				</h2>
			</div>
			<a
				href="{base}/articles"
				class="shrink-0 cursor-pointer rounded-full border border-plum/25 px-5 py-2.5 text-[13px] font-semibold text-plum transition-all duration-200 hover:bg-plum hover:text-white"
			>
				{c.viewAllArticles}
			</a>
		</div>

		<!-- Article cards -->
		<div class="grid gap-6 md:grid-cols-3">
			{#each preview as article, i}
				<a
					href="{base}/articles/{article.slug}"
					class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone/10 transition-all duration-700 ease-out hover:shadow-md hover:ring-plum/15 hover:-translate-y-0.5 {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'}"
					style="transition-delay: {100 + i * 100}ms;"
				>
					<!-- Gradient image placeholder (16:9) -->
					<div
						class="relative aspect-video w-full overflow-hidden"
						style="background: {article.gradient};"
					>
						<span
							class="absolute top-3 left-3 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm"
						>
							{article.tag}
						</span>
					</div>

					<!-- Content -->
					<div class="flex flex-1 flex-col p-6">
						<div class="flex items-center gap-2 text-[11px] text-slate/40">
							<span>{article.date}</span>
							<span>&middot;</span>
							<span>{article.readTime}</span>
						</div>
						<h3 class="mt-2 flex-1 text-[15px] font-bold leading-snug text-ink group-hover:text-plum transition-colors duration-200">
							{article.title}
						</h3>
						<div class="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-plum">
							{c.readMore}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
							</svg>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
