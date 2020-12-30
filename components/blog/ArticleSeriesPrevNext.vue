<template>
  <div v-if="$fetchState.pending">
    Checking for other articles in the series...
  </div>
  <div v-else-if="$fetchState.error">
    Error occurred while checking for other articles in the series...
  </div>
  <div v-else-if="document.series" class="md:flex md:justify-between">
    <div class="md:flex-1">
      <nuxt-link
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="flex border border-blue-100 rounded-md items-center p-2 pr-5"
      >
        <icon-previous size="50" class="flex-none" />
        <div class="text-2xl ml-5">{{ prev.title }}</div>
      </nuxt-link>
    </div>
    <div class="md:flex-none md:w-1/12 invisible md:visible"></div>
    <div class="md:flex-1 mt-10 md:mt-0">
      <nuxt-link
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="flex border border-blue-100 rounded-md items-center p-2 pl-5 justify-end"
      >
        <div class="text-2xl mr-5">{{ next.title }}</div>
        <icon-next size="50" class="flex-none" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IHasSeries, IHasTitle } from '~/types/content'
import WhereFilterBuilder from '~/utils/WhereFilterBuilder'

interface ITitleAndSlug {
  title?: string
  slug?: string
}

@Component
export default class ArticleSeriesPrevNext extends Vue {
  @Prop() private document?: IContentDocument & IHasSeries
  private prev?: ITitleAndSlug = {}
  private next?: ITitleAndSlug = {}

  async fetch() {
    if (!this.document?.series) return // no need to do anything

    const [_prev, _next] = (await this.$nuxt
      .$content('blog')
      .only(['title', 'slug'])
      .where(
        new WhereFilterBuilder(this).withSeries(this.document!.series!).build()
      )
      .sortBy('createdAt', 'asc')
      .surround(this.document.slug)
      .fetch<IHasTitle>()) as ITitleAndSlug[]

    this.prev = _prev
    this.next = _next
  }
}
</script>
