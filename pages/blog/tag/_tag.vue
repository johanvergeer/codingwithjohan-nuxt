<template>
  <div
    class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
  >
    <p v-if="$fetchState.pending">
      Loading articles for tag {{ $route.params.tag }}...
    </p>
    <p v-else-if="$fetchState.error">Error while loading the tags!</p>
    <div v-else class="container-inner mx-auto py-16">
      <h1 class="border-gray-700 border-b mb-12">
        Tag: {{ $route.params.tag }}
      </h1>
      <articles-list :articles="articles" />
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Vue } from 'nuxt-property-decorator'
import ArticleMeta from '~/components/blog/ArticleMeta.vue'
import ArticleSeries from '~/components/blog/ArticleSeries.vue'
import ArticlesList from '~/components/blog/ArticlesList.vue'
import ArticleSources from '~/components/blog/ArticleSources.vue'
import ArticleTags from '~/components/blog/ArticleTags.vue'
import FeatureImage from '~/components/blog/FeatureImage.vue'

@Component({
  components: {
    ArticleMeta,
    ArticleTags,
    FeatureImage,
    ArticleSeries,
    ArticleSources,
    ArticlesList,
  },
})
export default class Tag extends Vue {
  private articles: IContentDocument | IContentDocument[] = []

  async fetch() {
    this.articles = await this.$nuxt
      .$content('blog', this.$route.params.slug)
      .where({ tags: { $contains: this.$route.params.tag } })
      .only(['title', 'slug', 'description', 'createdAt', 'body'])
      .sortBy('createdAt', 'asc')
      .fetch()

    if (this.articles.length < 1) return this.$nuxt.context.redirect('/404')
  }
}
</script>
