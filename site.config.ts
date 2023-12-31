import type { SITETYPE, SITE_CONFIG_TYPE } from '@/types'

export const SITE: SITETYPE = {
    site: 'https://www.baidu.com',
    title: '我的博客网站',
    description: '我的博客网站，使用 Astro + typescript + tailwindcss 开发',
    author: 'cheungray',
    favicon: '/assets/favicon.svg',
}
export const SITE_CONFIG: SITE_CONFIG_TYPE = {
    LEAST_POSTS: 4, // 首页显示多少篇文章
    POSTS_LENTH: 10, // 文章列表每页显示多少篇文章
}
