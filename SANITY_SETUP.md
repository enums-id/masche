# Sanity.io Setup Guide

This project uses Sanity.io as a headless CMS for managing articles with bilingual support (Indonesian & English).

## Initial Setup

### 1. Create a Sanity Project

```bash
# Visit https://www.sanity.io/ and create a free account
# Create a new project
# Note your Project ID and Dataset name
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your Sanity credentials:

```bash
cp .env.example .env.local
```

Update `.env.local`:
```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```

### 3. Get API Credentials

1. Go to your Sanity project dashboard
2. Navigate to **Settings → API**
3. Create a new API token with these permissions:
   - `documents.read` (for reading articles)
   - `documents.write` (for creating/editing articles in the studio)
4. Copy the token to `SANITY_API_TOKEN`

### 4. Deploy Sanity Studio (Optional)

To use Sanity's visual editing interface:

```bash
npm install -D @sanity/visual-editing
npx sanity deploy
```

This will deploy Sanity Studio to `https://<project-id>.sanity.studio`

## Schema Structure

Articles are stored with bilingual content:

```typescript
{
  slug: string            // URL slug
  title_id: string        // Indonesian title
  title_en: string        // English title
  excerpt_id: string      // Indonesian excerpt
  excerpt_en: string      // English excerpt
  tag: string            // Article category
  gradient: string       // CSS gradient background
  date: date             // Publication date
  readTime_id: string    // Indonesian read time (e.g., "5 menit baca")
  readTime_en: string    // English read time (e.g., "5 min read")
  content_id: array      // Indonesian content sections
  content_en: array      // English content sections
}
```

### Content Section Format

Each section in `content_id` and `content_en`:

```typescript
{
  type: 'paragraph' | 'heading' | 'list'
  text?: string          // For paragraph and heading
  items?: string[]       // For list items
}
```

## Fetching Articles

### Server-Side (in route loaders):

```typescript
import { getArticles, getArticle } from '$lib/sanity'

// Get all articles
const articles = await getArticles('id') // Indonesian
const articles = await getArticles('en') // English

// Get single article
const article = await getArticle('article-slug', 'id')
```

### Client-Side:

Articles are fetched server-side and passed through page loaders. The API will use the `SANITY_API_TOKEN` for secure requests.

## Fallback to Local Data

If Sanity is not configured (missing `SANITY_PROJECT_ID`), the system will return empty articles. You can keep the local `src/lib/data/articles.ts` as a fallback:

```typescript
import { getArticles } from '$lib/sanity'
import { articles as fallbackArticles } from '$lib/data/articles'

const articles = (await getArticles('id')) || fallbackArticles
```

## Creating Articles in Sanity Studio

1. Go to Sanity Studio (`https://<project-id>.sanity.studio`)
2. Click "Articles" in the left sidebar
3. Click "Create" → "Article"
4. Fill in both Indonesian and English fields
5. Publish the document

## Important Notes

- **Content.json** is NOT affected - it continues to manage landing page, about, contact, and legal page content
- **Articles only** use Sanity.io
- Both languages must be filled for an article to work properly
- The CDN cache (useCdn: true) is enabled for performance

## Troubleshooting

### Articles not showing

1. Check that `SANITY_PROJECT_ID` is set correctly
2. Verify articles are published in Sanity
3. Check browser console for fetch errors
4. Ensure API token has read permissions

### Content not updating

1. Articles are cached - changes may take a few minutes
2. Rebuild the site to clear the cache: `npm run build`
3. Check that Sanity fetch query is working in Vision (Sanity Studio's query tool)

## Next Steps

- Configure Sanity webhooks to trigger rebuilds on content changes
- Add image support to articles schema
- Set up Sanity preview for draft articles
