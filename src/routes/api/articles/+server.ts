import { json } from '@sveltejs/kit'
import { getArticles, getArticle } from '$lib/sanity'

export async function GET({ url }) {
	const lang = (url.searchParams.get('lang') || 'id') as 'id' | 'en'
	const slug = url.searchParams.get('slug')

	try {
		if (slug) {
			const article = await getArticle(slug, lang)
			if (!article) {
				return json({ error: 'Article not found' }, { status: 404 })
			}
			return json(article)
		} else {
			const articles = await getArticles(lang)
			return json(articles)
		}
	} catch (error) {
		console.error('API error:', error)
		return json({ error: 'Failed to fetch articles' }, { status: 500 })
	}
}
