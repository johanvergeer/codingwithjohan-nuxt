import { QueryBuilder } from '@nuxt/content/types/query-builder'
import Vue from 'vue'

interface StatusFilter {
  $ne: 'draft' | 'published'
}

interface WhereFilter {
  series?: string
  status?: StatusFilter
  tags?: Object
}

/**
 * Creates a filter to be used in the `where` method of a {@link QueryBuilder}
 */
export default class WhereFilterBuilder {
  private whereStatement: WhereFilter = {}
  private readonly vue: Vue

  constructor(vue: Vue, excludeDraftsInProductionMode: boolean = true) {
    this.vue = vue

    if (excludeDraftsInProductionMode) {
      this._addStatusIfProductionMode()
    }
  }

  /**
   * posts with status draft should only be displayed when running in dev mode
   */
  _addStatusIfProductionMode(): void {
    if (!this.vue.$nuxt.context.isDev) {
      this.whereStatement.status = { $ne: 'draft' }
    }
  }

  /**
   * only include posts that belong to the given series
   * @param series name of the series to be included
   */
  addSeries(series: string): WhereFilterBuilder {
    this.whereStatement.series = series
    return this
  }

  /**
   * onlu include posts that contain the given tag
   * @param tag name of the tag that are used by posts that should be included
   */
  addTagsContain(tag: string): WhereFilterBuilder {
    this.whereStatement.tags = { $contains: tag }
    return this
  }

  /**
   * Build the filter
   */
  build(): WhereFilter {
    return this.whereStatement
  }
}
