<template>
  <div
    class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
  >
    <p v-if="$fetchState.pending">
      Loading articles for tag {{ $route.params.tag }}...
    </p>
    <p v-else-if="$fetchState.error">Error while loading the articles!</p>
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
import ArticlesList from '~/components/blog/ArticlesList.vue'
@Component({
  components: { ArticlesList },
})
export default class Tag extends Vue {
  private articles: IContentDocument | IContentDocument[] = []

  async fetch() {
    this.articles = await this.$nuxt
      .$content('blog')
      .where({ tags: { $contains: this.$route.params.tag } })
      .only(['title', 'slug', 'description', 'createdAt', 'body'])
      .sortBy('createdAt', 'asc')
      .fetch()

    if (this.articles.length < 1) return this.$nuxt.context.redirect('/404')
  }
}
</script>
