import type { CollectionEntry } from 'astro:content'
export interface METADATA {
    title: string
    description: string
    image?: string
}
export interface SITETYPE {
    site: string
    title: string
    description: string
    author: string
    favicon?: string
}
export interface SITE_CONFIG_TYPE {
    LEAST_POSTS: number
    POSTS_LENTH: number
}
export type posts = Array<CollectionEntry<'blog'>>


