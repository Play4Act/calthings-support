import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/announcements' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
  }),
});

export const collections = { announcements };
