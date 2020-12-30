/**
 * Represents a source (i.e. credit / more info) for an article.
 */
import { IContentDocument } from '@nuxt/content/types/content'

interface ArticleSource {
  title: string
  url: string
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

export interface IPartialArticle
  extends Record<string, any>,
    IHasFeatureImage,
    IHasTags,
    IHasSources,
    IHasSeries,
    IHasTitle {
  description: string
  body: string
  status?: 'draft' | 'published' | string
}

export type IArticle = IContentDocument & IPartialArticle
