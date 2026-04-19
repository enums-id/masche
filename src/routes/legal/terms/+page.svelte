<script lang="ts">
	import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';

	const c = $derived((content as any)[langStore.value].legal.terms);
	const sections = $derived(
		c.sections.map((s: any, i: number) => ({
			id: `section-${i}`,
			label: s.heading
		}))
	);
</script>

<LegalPageLayout
	title={c.title}
	effectiveDate={c.effectiveDate}
	lastUpdated={c.effectiveDate}
	{sections}
>
	<p>{c.intro}</p>

	{#each c.sections as section, i}
		<h2 id="section-{i}">{section.heading}</h2>
		<p>{section.content}</p>
	{/each}
</LegalPageLayout>
