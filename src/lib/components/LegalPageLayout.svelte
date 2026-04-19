<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageShell from '$lib/components/PageShell.svelte';

	let {
		title,
		subtitle,
		effectiveDate,
		lastUpdated,
		sections,
		children
	}: {
		title: string;
		subtitle?: string;
		effectiveDate: string;
		lastUpdated: string;
		sections: { id: string; label: string }[];
		children: Snippet;
	} = $props();
</script>

<PageShell {title} {subtitle}>
	<div class="flex gap-16">
		<!-- TOC sidebar (desktop) -->
		<aside class="hidden w-52 shrink-0 md:block">
			<div class="sticky top-28">
				<p class="mb-4 text-[11px] font-semibold tracking-widest text-slate/40 uppercase">
					Di halaman ini
				</p>
				<nav class="space-y-2.5">
					{#each sections as section}
						<a
							href="#{section.id}"
							class="block text-[13px] text-slate/40 transition-colors duration-200 hover:text-ink"
						>
							{section.label}
						</a>
					{/each}
				</nav>
			</div>
		</aside>

		<!-- Prose content -->
		<div class="min-w-0 flex-1">
			<p class="mb-8 text-[13px] text-slate/40">
				Berlaku: {effectiveDate} &middot; Terakhir diperbarui: {lastUpdated}
			</p>
			<div
				class="prose prose-slate max-w-none prose-headings:text-ink prose-h2:text-xl prose-h2:font-bold prose-h2:tracking-tight prose-h3:text-base prose-h3:font-semibold prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-slate/60 prose-a:text-plum prose-li:text-[15px] prose-li:text-slate/60"
			>
				{@render children()}
			</div>
		</div>
	</div>
</PageShell>
