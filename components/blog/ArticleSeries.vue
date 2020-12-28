<template>
  <div v-if="$fetchState.pending">
    Checking for other articles in the series...
  </div>
  <p v-else-if="$fetchState.error">
    An error occurred while loading other articles in the series :(
  </p>
  <div
    v-else-if="currentArticle && currentArticle.series"
    class="border-2 border-gray-200 border-solid rounded pb-5 pl-5 bg-gray-100"
  >
    <h1 class="text-5xl">Articles in this series:</h1>
    <ul class="list-disc list-inside">
      <li v-for="article of articlesInSeries" :key="article.slug">
        <nuxt-link
          v-if="article.slug !== currentArticle.slug"
          :to="`/blog/${article.slug}`"
          class="font-normal"
        >
          {{ article.title }}
        </nuxt-link>
        <span v-else>{{ article.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IContentDocument } from '@nuxt/content/types/content'
import WhereFilterBuilder from '~/utils/WhereFilterBuilder'

@Component
export default class ArticleSeries extends Vue {
  @Prop() private currentArticle?: IContentDocument
  private articlesInSeries?: IContentDocument | IContentDocument[]

  async fetch() {
    if (!this.currentArticle?.series) return

    this.articlesInSeries = await this.$nuxt
      .$content('blog')
      .only(['slug', 'title'])
      .where(
        new WhereFilterBuilder(this.$nuxt)
          .withSeries(this.currentArticle?.series)
          .build()
      )
      .sortBy('createdAt', 'asc')
      .fetch()
  }
}
</script>
