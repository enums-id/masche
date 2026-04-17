import { articles } from '$lib/data/articles';

export const prerender = true;

export function load() {
	return { articles };
}
