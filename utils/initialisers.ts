import { IArticle } from '~/types/content'

export const emptyArticle = (): IArticle => {
  return {
    dir: '',
    path: '',
    extension: '',
    slug: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    title: '',
    description: '',
    body: '',
  }
}
