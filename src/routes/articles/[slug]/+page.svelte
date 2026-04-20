<script lang="ts">
	import { base } from '$app/paths';
	import { articles } from '$lib/data/articles';
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import { langStore } from '$lib/stores/lang.svelte';
	import { getWhatsAppLink, whatsappMessages } from '$lib/utils/whatsapp';
	import type { Article } from '$lib/sanity';
	import content from '$lib/data/content.json';

	let { data } = $props();

	let article = $state<Article>(data.article);
	let imageLoaded = $state(false);
	let imageFailed = $state(false);

	const c = $derived((content as any)[langStore.value].articles);

	// Related: other articles excluding current, pick up to 3
	const related = $derived(articles.filter((a) => a.slug !== article.slug).slice(0, 3));

	function handleImageLoad() {
		imageLoaded = true;
		imageFailed = false;
	}

	function handleImageError() {
		imageFailed = true;
		imageLoaded = false;
	}

	// Fetch article in different language when langStore changes
	$effect(() => {
		const lang = langStore.value;
		const slug = article.slug;
		fetch(`/api/articles?lang=${lang}&slug=${slug}`)
			.then((res) => res.json())
			.then((newArticle) => {
				article = newArticle;
				imageLoaded = false;
				imageFailed = false;
			})
			.catch((err) => {
				console.error('Failed to fetch article:', err);
				// Keep current article if fetch fails
			});
	});
</script>

<svelte:head>
	<title>{article.title} &mdash; Masche Academics</title>
	<meta name="description" content={article.excerpt} />
</svelte:head>

<div class="min-h-screen bg-lavender font-sans text-ink antialiased selection:bg-plum/10">
	<Navbar />

	<!-- Hero banner with image or gradient -->
	<div class="relative overflow-hidden pt-20" style="background: {article.gradient};">
		<!-- Article image -->
		{#if article.imageUrl && !imageFailed}
			<img
				src={article.imageUrl}
				alt={article.title}
				class="absolute inset-0 h-full w-full object-cover"
				onload={handleImageLoad}
				onerror={handleImageError}
			/>
			<!-- Overlay for text readability -->
			<div class="absolute inset-0 bg-black/30"></div>
		{/if}

		<div class="relative z-10 mx-auto max-w-4xl px-6 py-16 md:py-24">
			<!-- Back link -->
			<a
				href="{base}/articles"
				class="mb-6 inline-flex items-center gap-1.5 text-[12px] font-medium text-white/60 transition-colors duration-200 hover:text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="size-3.5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
				</svg>
				{c.viewAllArticles}
			</a>
			<div class="flex flex-col gap-0.5">
				<span
					class="inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase backdrop-blur-sm"
				>
					{article.tag}
				</span>
				<h1
					class="mt-4 text-[clamp(1.6rem,4vw,2.6rem)] leading-tight font-bold tracking-tight text-white"
				>
					{article.title}
				</h1>
			</div>
			<div class="mt-4 flex items-center gap-2 text-[12px] text-white/50">
				<span>{article.date}</span>
				<span>&middot;</span>
				<span>{article.readTime}</span>
			</div>
		</div>
	</div>

	<!-- Article body -->
	<main class="px-6 py-14 md:py-20">
		<div class="mx-auto max-w-2xl">
			<!-- Excerpt -->
			<p
				class="mb-10 border-l-4 border-plum/30 pl-5 text-[16px] leading-relaxed font-medium text-slate/70 italic"
			>
				{article.excerpt}
			</p>

			<!-- Content sections -->
			<div class="space-y-6 text-[15px] leading-relaxed text-slate/70">
				{#each article.content as section}
					{#if section.type === 'paragraph'}
						<p>{section.text}</p>
					{:else if section.type === 'heading'}
						<h2 class="mt-10 mb-2 text-[1.15rem] font-bold tracking-tight text-ink">
							{section.text}
						</h2>
					{:else if section.type === 'list'}
						<ul class="space-y-2.5 pl-1">
							{#each section.items ?? [] as item}
								<li class="flex items-start gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										class="mt-0.5 size-4 shrink-0 text-plum"
									>
										<path
											fill-rule="evenodd"
											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
											clip-rule="evenodd"
										/>
									</svg>
									{item}
								</li>
							{/each}
						</ul>
					{/if}
				{/each}
			</div>

			<!-- CTA -->
			<div class="mt-16 rounded-2xl bg-plum px-8 py-10 text-center">
				<p class="text-[11px] font-semibold tracking-widest text-white/40 uppercase">
					MASCHE ACADEMICS
				</p>
				<h3 class="mt-2 text-[1.2rem] font-bold text-white">
					Siap mewujudkan sistem ini di institusi Anda?
				</h3>
				<p class="mt-2 text-[13px] text-white/55">
					Konsultasikan kebutuhan Anda dengan tim kami secara gratis.
				</p>
				<div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<a
						href={getWhatsAppLink(whatsappMessages.consultation)}
						target="_blank"
						rel="noopener noreferrer"
						class="cursor-pointer rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-plum transition-all duration-200 hover:bg-white/90 hover:shadow-md"
					>
						Konsultasi Gratis
					</a>
					<a
						href={getWhatsAppLink(whatsappMessages.demo)}
						target="_blank"
						rel="noopener noreferrer"
						class="cursor-pointer rounded-full border border-white/30 px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white/10"
					>
						Request Demo
					</a>
				</div>
			</div>
		</div>
	</main>

	<!-- Related articles -->
	<!-- {#if related.length > 0}
		<section class="border-t border-stone/15 bg-white px-6 py-16">
			<div class="mx-auto max-w-5xl">
				<h2 class="mb-8 text-[1.1rem] font-bold text-ink">Artikel Lainnya</h2>
				<div class="grid gap-5 sm:grid-cols-3">
					{#each related as rel}
						<a
							href="{base}/articles/{rel.slug}"
							class="group flex flex-col overflow-hidden rounded-2xl bg-lavender ring-1 ring-stone/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-plum/15"
						>
							<div class="aspect-video w-full" style="background: {rel.gradient};"></div>
							<div class="flex flex-1 flex-col p-5">
								<span class="text-[10px] font-semibold tracking-wider text-plum/60 uppercase"
									>{rel.tag}</span
								>
								<h3
									class="mt-1.5 line-clamp-3 text-[13px] leading-snug font-bold text-ink transition-colors duration-200 group-hover:text-plum"
								>
									{rel.title}
								</h3>
								<p class="mt-3 flex items-center gap-1 text-[11px] font-semibold text-plum">
									Baca
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										class="size-3 transition-transform duration-200 group-hover:translate-x-1"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
										/>
									</svg>
								</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</section>
	{/if} -->

	<Footer />
</div>
