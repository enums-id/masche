import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Masche Articles',

  projectId: process.env.SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      {
        name: 'article',
        title: 'Article',
        type: 'document',
        fields: [
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title_id',
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'title_id',
            title: 'Title (Indonesian)',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'title_en',
            title: 'Title (English)',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'excerpt_id',
            title: 'Excerpt (Indonesian)',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'excerpt_en',
            title: 'Excerpt (English)',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'tag',
            title: 'Tag',
            type: 'string',
            description: 'Article category/tag',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'gradient',
            title: 'Gradient Background',
            type: 'string',
            description: 'CSS gradient for article card',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'date',
            title: 'Publication Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'readTime_id',
            title: 'Read Time (Indonesian)',
            type: 'string',
            description: 'e.g., "5 menit baca"',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'readTime_en',
            title: 'Read Time (English)',
            type: 'string',
            description: 'e.g., "5 min read"',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'content_id',
            title: 'Content (Indonesian)',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'type',
                    type: 'string',
                    options: {
                      list: ['paragraph', 'heading', 'list'],
                    },
                  },
                  {
                    name: 'text',
                    type: 'text',
                  },
                  {
                    name: 'items',
                    type: 'array',
                    of: [{type: 'string'}],
                  },
                ],
              },
            ],
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'content_en',
            title: 'Content (English)',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'type',
                    type: 'string',
                    options: {
                      list: ['paragraph', 'heading', 'list'],
                    },
                  },
                  {
                    name: 'text',
                    type: 'text',
                  },
                  {
                    name: 'items',
                    type: 'array',
                    of: [{type: 'string'}],
                  },
                ],
              },
            ],
            validation: (Rule) => Rule.required(),
          },
        ],
      },
    ],
  },
})
