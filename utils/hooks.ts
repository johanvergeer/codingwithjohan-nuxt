import { IArticle } from '~/types/content'

export function setDefaultAuthor(document: IArticle) {
  if (!document.author) {
    document.author = {
      name: 'Johan Vergeer',
      email: 'johanvergeer@gmail.com',
    }
  }
}
