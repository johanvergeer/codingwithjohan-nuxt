<template>
  <div
    class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
  >
    <p v-if="$fetchState.pending">
      Loading articles for category {{ $route.params.category }}...
    </p>
    <p v-else-if="$fetchState.error">Error while loading the articles!</p>
    <div class="container-inner mx-auto py-16">
      <h1 class="border-gray-700 border-b mb-12">
        Category: {{ articles[0].category }}
      </h1>
      <articles-list :articles="articles" />
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Vue } from 'nuxt-property-decorator'
import ArticlesList from '~/components/blog/ArticlesList.vue'

@Component({
  components: { ArticlesList },
})
export default class Tag extends Vue {
  private articles: IContentDocument | IContentDocument[] = []

  async fetch() {
    this.articles = await this.$nuxt
      .$content('blog')
      .where({ category: { $regex: [this.$route.params.category, 'i'] } })
      .only(['title', 'slug', 'description', 'createdAt', 'body', 'category'])
      .sortBy('createdAt', 'asc')
      .fetch()

    if (this.articles.length < 1) return this.$nuxt.context.redirect('/404')
  }
}
</script>
