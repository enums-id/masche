<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';
	import type { Article } from '$lib/sanity';

	let { data } = $props();

	const PAGE_SIZE = 4;
	let currentPage = $state(1);
	let articles = $state<Article[]>(data.articles);
	let failedImages = $state(new Set<string>());

	const c = $derived((content as any)[langStore.value].articles);
	const totalPages = $derived(Math.ceil(articles.length / PAGE_SIZE));
	const paged = $derived(articles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE));

	function goPage(n: number) {
		currentPage = n;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function handleImageError(slug: string) {
		failedImages.add(slug);
		failedImages = failedImages;
	}

	// Fetch articles when language changes
	$effect(() => {
		const lang = langStore.value;
		fetch(`/api/articles?lang=${lang}`)
			.then((res) => res.json())
			.then((newArticles) => {
				articles = newArticles;
				failedImages.clear();
				currentPage = 1;
			})
			.catch((err) => {
				console.error('Failed to fetch articles:', err);
				// Fall back to initial data
				articles = data.articles;
			});
	});
</script>

<svelte:head>
	<title>{c.pageTitle} &mdash; Masche Academics</title>
	<meta
		name="description"
		content={c.pageDescription}
	/>
</svelte:head>

<div class="min-h-screen bg-lavender font-sans text-ink antialiased selection:bg-plum/10">
	<Navbar />

	<!-- Header -->
	<section class="bg-plum px-6 pt-28 pb-16 md:pt-36 md:pb-20">
		<div class="mx-auto max-w-5xl">
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-white/40 uppercase">
				{langStore.value === 'id' ? 'ARTIKEL MASCHE' : 'MASCHE ARTICLES'}
			</p>
			<h1 class="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-white">
				{c.pageSubtitle}
			</h1>
			<p class="mt-3 max-w-lg text-base leading-relaxed text-white/50">
				{c.pageDescription}
			</p>
		</div>
	</section>

	<!-- Article grid -->
	<main class="px-6 py-16 md:py-20">
		<div class="mx-auto max-w-5xl">
			<div class="grid gap-6 sm:grid-cols-2">
				{#each paged as article}
					<a
						href="{base}/articles/{article.slug}"
						class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone/10 transition-all duration-200 hover:shadow-md hover:ring-plum/20 hover:-translate-y-0.5"
					>
						<!-- Article image with gradient fallback -->
						<div
							class="relative aspect-video w-full overflow-hidden bg-cover bg-center"
							style="background: {article.gradient};"
						>
							{#if article.imageUrl && !failedImages.has(article.slug)}
								<img
									src={article.imageUrl}
									alt={article.title}
									class="h-full w-full object-cover"
									onerror={() => handleImageError(article.slug)}
								/>
							{/if}
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
							<h2
								class="mt-2.5 text-[15px] font-bold leading-snug text-ink group-hover:text-plum transition-colors duration-200"
							>
								{article.title}
							</h2>
							<p class="mt-2 flex-1 text-[13px] leading-relaxed text-slate/55 line-clamp-3">
								{article.excerpt}
							</p>
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

			<!-- Pagination -->
			{#if totalPages > 1}
				<div class="mt-12 flex items-center justify-center gap-2">
					<button
						onclick={() => goPage(currentPage - 1)}
						disabled={currentPage === 1}
						class="flex size-9 items-center justify-center rounded-full border border-stone/25 text-slate/50 transition-all duration-200 hover:border-plum/30 hover:text-plum disabled:cursor-not-allowed disabled:opacity-30"
						aria-label={c.pagination.previous}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
						</svg>
					</button>

					{#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
						<button
							onclick={() => goPage(page)}
							class="flex size-9 items-center justify-center rounded-full text-[13px] font-semibold transition-all duration-200 {page === currentPage
								? 'bg-plum text-white shadow-sm'
								: 'border border-stone/25 text-slate/50 hover:border-plum/30 hover:text-plum'}"
							aria-label="{c.pagination.page} {page}"
						>
							{page}
						</button>
					{/each}

					<button
						onclick={() => goPage(currentPage + 1)}
						disabled={currentPage === totalPages}
						class="flex size-9 items-center justify-center rounded-full border border-stone/25 text-slate/50 transition-all duration-200 hover:border-plum/30 hover:text-plum disabled:cursor-not-allowed disabled:opacity-30"
						aria-label={c.pagination.next}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
							<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</button>
				</div>

				<p class="mt-4 text-center text-[12px] text-slate/35">
					{c.pagination.page} {currentPage} {c.pagination.of} {totalPages} &middot; {data.articles.length} {c.pagination.articles}
				</p>
			{/if}
		</div>
	</main>

	<Footer />
</div>
