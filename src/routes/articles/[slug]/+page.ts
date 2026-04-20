import { getArticles, getArticle } from '$lib/sanity'
import { articles as fallbackArticles } from '$lib/data/articles'
import { error } from '@sveltejs/kit'

export const prerender = true

export async function entries() {
	// Get entries from Sanity, fall back to local data
	const sanityArticles = await getArticles('id')
	const articles = sanityArticles.length > 0 ? sanityArticles : fallbackArticles
	return articles.map((a) => ({ slug: a.slug }))
}

export async function load({ params }) {
	// Try to fetch from Sanity first
	let article = await getArticle(params.slug, 'id')

	// Fall back to local data if not found in Sanity
	if (!article) {
		article = fallbackArticles.find((a) => a.slug === params.slug) || null
	}

	if (!article) {
		error(404, 'Artikel tidak ditemukan')
	}

	return { article }
}
