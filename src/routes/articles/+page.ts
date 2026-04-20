import { getArticles } from '$lib/sanity'
import { articles as fallbackArticles } from '$lib/data/articles'

export const prerender = true

export async function load() {
	// Try to fetch from Sanity, fall back to local data if not configured
	const sanityArticles = await getArticles('id')
	const articles = sanityArticles.length > 0 ? sanityArticles : fallbackArticles

	return {
		articles,
	}
}
