import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from "zod"

export default defineContentConfig({
  collections: {
    siteConfig: defineCollection({
      type: 'data',
      source: 'site-config.yml',
      schema: z.object({
        sitename: z.string(),
        navigation: z.object({
          links: z.array(z.object({
            id: z.number(),
            title: z.string(),
            url: z.string(),
          })),
        }),
      }),
    })
  }
})
