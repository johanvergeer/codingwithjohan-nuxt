<template>
  <div v-if="$fetchState.pending">
    Checking for other articles in the series...
  </div>
  <p v-else-if="$fetchState.error">
    An error occurred while loading other articles in the series :(
  </p>
  <div
    v-else-if="articlesInSeries.length > 0"
    class="border-2 border-gray-200 border-solid rounded pb-5 pl-5 bg-gray-100"
  >
    <h1 class="text-5xl">Articles in this series:</h1>
    <ul class="list-disc list-inside">
      <li v-for="article of articlesInSeries" :key="article.slug">
        <nuxt-link
          v-if="article.slug !== document.slug"
          :to="`/blog/${article.slug}`"
          class="font-normal"
        >
          {{ article.title }}
        </nuxt-link>
        <span v-else>{{ article.title }}</span>
      </li>
    </ul>
  </div>
  <div v-else><!-- No series --></div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IHasSeries, IHasTitle } from '~/types/content'
import WhereFilterBuilder from '~/utils/WhereFilterBuilder'

@Component
export default class ArticleSeries extends Vue {
  @Prop() private document?: IContentDocument & IHasSeries
  private articlesInSeries: (IContentDocument & IHasTitle)[] = []

  async fetch() {
    if (!this.document?.series) return

    this.articlesInSeries = (await this.$nuxt
      .$content('blog')
      .only(['slug', 'title'])
      .where(
        new WhereFilterBuilder(this.$nuxt.context.isDev)
          .withSeries(this.document?.series)
          .build()
      )
      .sortBy('createdAt', 'asc')
      .fetch<IContentDocument & IHasTitle>()) as (IContentDocument &
      IHasTitle)[]
  }
}
</script>
