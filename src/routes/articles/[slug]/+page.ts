import { articles } from '$lib/data/articles';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return articles.map((a) => ({ slug: a.slug }));
}

export function load({ params }) {
	const article = articles.find((a) => a.slug === params.slug);
	if (!article) error(404, 'Artikel tidak ditemukan');
	return { article };
}
