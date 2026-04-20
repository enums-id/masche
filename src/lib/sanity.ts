import { env } from '$env/dynamic/public';
import { createClient } from '@sanity/client';

const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = 'production';
const apiVersion = '2024-01-01';

let sanityClientInstance: ReturnType<typeof createClient> | null = null;

export function getSanityClient() {
	if (!projectId) {
		return null;
	}

	if (!sanityClientInstance) {
		sanityClientInstance = createClient({
			projectId,
			dataset,
			apiVersion,
			useCdn: true
		});
	}

	return sanityClientInstance;
}

export const sanityClient = getSanityClient();

export interface ArticleSection {
	type: 'paragraph' | 'heading' | 'list';
	text?: string;
	items?: string[];
}

export interface Article {
	slug: string;
	title: string;
	excerpt: string;
	tag: string;
	gradient: string;
	date: string;
	readTime: string;
	content: ArticleSection[];
}

export async function getArticles(lang: 'id' | 'en' = 'id'): Promise<Article[]> {
	const client = getSanityClient();
	if (!client) {
		return [];
	}

	const titleField = lang === 'id' ? 'title_id' : 'title_en';
	const excerptField = lang === 'id' ? 'excerpt_id' : 'excerpt_en';
	const contentField = lang === 'id' ? 'content_id' : 'content_en';
	const readTimeField = lang === 'id' ? 'readTime_id' : 'readTime_en';

	try {
		const query = `*[_type == "article"] | order(date desc) {
      slug,
      "title": ${titleField},
      "excerpt": ${excerptField},
      tag,
      gradient,
      date,
      "readTime": ${readTimeField},
      "content": ${contentField}
    }`;

		const articles = await client.fetch(query);
		return articles.map((article: any) => ({
			...article,
			slug: article.slug?.current || article.slug,
			date: new Date(article.date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		}));
	} catch (error) {
		console.error('Error fetching articles from Sanity:', error);
		return [];
	}
}

export async function getArticle(slug: string, lang: 'id' | 'en' = 'id'): Promise<Article | null> {
	const client = getSanityClient();
	if (!client) {
		return null;
	}

	const titleField = lang === 'id' ? 'title_id' : 'title_en';
	const excerptField = lang === 'id' ? 'excerpt_id' : 'excerpt_en';
	const contentField = lang === 'id' ? 'content_id' : 'content_en';
	const readTimeField = lang === 'id' ? 'readTime_id' : 'readTime_en';

	try {
		const query = `*[_type == "article" && slug.current == $slug][0] {
      slug,
      "title": ${titleField},
      "excerpt": ${excerptField},
      tag,
      gradient,
      date,
      "readTime": ${readTimeField},
      "content": ${contentField}
    }`;

		const article = await client.fetch(query, { slug });

		if (!article) return null;

		return {
			...article,
			slug: article.slug?.current || article.slug,
			date: new Date(article.date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		};
	} catch (error) {
		console.error('Error fetching article from Sanity:', error);
		return null;
	}
}
