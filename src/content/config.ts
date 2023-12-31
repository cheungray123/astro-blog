import { defineCollection, z } from 'astro:content'
const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string().optional(),
        category: z.string().default('other').optional(),
        tags: z.array(z.string()).default(['other']).optional(),
        cover: z.string().optional(),
        draft: z.boolean().default(false),
    }),
})
export const collections = { blog }
