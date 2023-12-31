import type { posts } from '@/types'
import { getCollection } from 'astro:content'

export const getAllPosts = async (floder: 'blog' = 'blog'): Promise<posts> => {
    const posts = await getCollection(floder, ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true
    })
    return sortByDate(posts)
}

export const sortByDate = (posts: posts) => {
    return posts.sort((a, b) => {
        const aDate = new Date(a.data.pubDate ?? a.data.pubDate).valueOf()
        const bDate = new Date(b.data.pubDate ?? b.data.pubDate).valueOf()
        return bDate - aDate
    })
}
