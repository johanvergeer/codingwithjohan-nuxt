/**
 * Represents a source (i.e. credit / more info) for an article.
 */
import { IContentDocument } from '@nuxt/content/types/content'

interface ArticleSource {
  title: string
  url: string
}

interface IAuthor {
  name: string
  email: string
}

export interface IHasFeatureImage {
  featureImage?: string
}

export interface IHasTags {
  tags?: string[]
}

export interface IHasSources {
  sources?: ArticleSource[]
}

export interface IHasSeries {
  series?: string
}

export interface IHasTitle {
  title: string
}

export interface IHasAuthor {
  author?: IAuthor
}

export interface IHasDescription {
  description?: string
}

export interface IHasReadingTime {
  /**
   * estimated time in minutes it takes to read the content.
   */
  readingTime?: number
}

export interface IPartialArticle
  extends Record<string, any>,
    IHasFeatureImage,
    IHasTags,
    IHasSources,
    IHasSeries,
    IHasTitle,
    IHasAuthor,
    IHasDescription,
    IHasReadingTime {
  body: string
  status?: 'draft' | 'published' | string
}

export type IArticle = IContentDocument & IPartialArticle
