/**
 * Represents a source (i.e. credit / more info) for an article.
 */
interface ArticleSource {
  title: string
  url: string
}

/**
 * Use [interface merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces)
 * to extend @nuxt/content/types/content.d.ts:IContentDocument
 */
export interface IContentDocument extends Record<string, any> {
  title: string
  description: string
  body: string
  featureImage?: string
  sources?: ArticleSource[]
  series?: string
  tags?: string[]
  status?: 'draft' | 'published' | string
}
