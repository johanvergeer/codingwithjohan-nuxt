interface ArticleSource {
  title: string
  url: string
}

export interface Article {
  title: string
  slug: string
  description: string
  createdAt: string
  body: string
  featureImage?: string
  sources?: [ArticleSource]
}
