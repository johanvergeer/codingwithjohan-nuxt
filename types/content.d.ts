interface ArticleSource {
  title: string
  url: string
}

// Use interface merging to extend IContentDocument from @nuxt/content/types/content
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
export interface IContentDocument extends Record<string, any> {
  title: string
  description: string
  body: string
  featureImage?: string
  sources?: ArticleSource[]
  series?: string
}
