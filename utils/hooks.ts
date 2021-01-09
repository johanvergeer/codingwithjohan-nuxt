import consola from 'consola'
import { IArticle, IHasDescription, IHasTitle } from '~/types/content'

export function setDefaultAuthor(document: IArticle) {
  if (!document.author) {
    document.author = {
      name: 'Johan Vergeer',
      email: 'johanvergeer@gmail.com',
    }
  }
}

/**
 * Logs a warning when the document description is over 200 characters.
 * This is not a requirement, but Twitter only displays the first 200 characters.
 * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
 */
export function warnWhenDescriptionOver200Chars(
  document: IHasDescription & IHasTitle,
  maxLength = 200
) {
  if (document.description && document.description.length > maxLength) {
    consola
      .withTag('codingwithjohan:validation')
      .warn(
        `Description of '${document.title}' has ${document.description.length} characters, which is over the maximum of ${maxLength}`
      )
  }
}

export function warnWhenMissingDescription(
  document: IHasDescription & IHasTitle
) {
  if (!document.description) {
    consola
      .withTag('codingwithjohan:validation')
      .warn(`'${document.title}' is missing a description`)
  }
}
