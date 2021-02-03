/**
 * Types used for elements in the <head></head> tag
 */

interface IMainEntityOfPage {
  '@type': 'WebPage'
  '@id': string
}

interface ILogo {
  '@type': 'ImageObject'
  url: string
}

interface IPublisher {
  '@type': 'Organization'
  name: string
  logo: ILogo
}

interface IAuthor {
  '@type': 'Person'
  name: string
}

interface IImage {
  '@type': 'ImageObject'
  url: string
}

/**
 * [Article structure data](https://developers.google.com/search/docs/data-types/article)
 */
export interface IStructuredDataArticle {
  '@context': 'http://schema.org'
  '@type': 'Article' | 'NewsArticle' | 'BlogPosting'
  headline: string
  mainEntityOfPage: IMainEntityOfPage
  datePublished: Date
  publisher: IPublisher
  author: IAuthor
  description: string
  image?: IImage
  dateModified?: Date
}

export interface ILink {
  rel: 'canonical' | 'preload'
  href: string
  as?: string
}
