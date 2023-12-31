import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { SITE } from './site.config'

// https://astro.build/config
export default defineConfig({
    site: SITE.site,
    integrations: [tailwind(), mdx(), sitemap()],
})
