<template>
  <div v-if="$fetchState.pending">
    Checking for other articles in the series...
  </div>
  <div v-else-if="$fetchState.error">
    Error occurred while checking for other articles in the series...
  </div>
  <div v-else class="md:flex md:justify-between">
    <div class="md:w-2/5">
      <nuxt-link
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="flex border border-blue-100 rounded-md items-center p-2 pr-5"
      >
        <icon-previous size="16" />
        <div class="text-2xl ml-5">{{ prev.title }}</div>
      </nuxt-link>
    </div>

    <div class="md:w-2/5 mt-10 md:mt-0">
      <nuxt-link
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="flex justify-end border border-blue-100 rounded-md items-center p-2 pl-5"
      >
        <div class="text-2xl mr-5">{{ next.title }}</div>
        <icon-next size="16" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import IconNext from '~/components/global/icons/IconNext.vue'
import IconPrevious from '~/components/global/icons/IconPrevious.vue'
import { IHasSeries, IHasTitle } from '~/types/content'
import WhereFilterBuilder from '~/utils/WhereFilterBuilder'

interface ITitleAndSlug {
  title?: string
  slug?: string
}

@Component({
  components: { IconNext, IconPrevious },
})
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
