import Vue from 'vue'

/**
 * return a properly formatted date. e.g. Jan 1, 2020
 * @param value: date is ISO format
 */
export function formatDate(value: string): string {
  if (value) {
    return new Date(value).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }
  return ''
}

Vue.filter('formatDate', formatDate)
