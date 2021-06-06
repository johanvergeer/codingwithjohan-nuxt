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
import { Component, Vue } from 'nuxt-property-decorator'
import { IArticle } from '~/types/content'
import WhereFilterBuilder from '~/utils/WhereFilterBuilder'

@Component
export default class Tag extends Vue {
  private articles: IArticle[] = []

  async fetch() {
    this.articles = (await this.$nuxt
      .$content('blog')
      .where(
        new WhereFilterBuilder(this.$nuxt.context.isDev)
          .withTagsContaining(this.$route.params.tag)
          .build()
      )
      .only(['title', 'slug', 'description', 'createdAt', 'body', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()) as IArticle[]

    // Only for client-side rendering
    if (this.articles.length < 1)
      return this.$nuxt.error({
        statusCode: 404,
        message: `No tag named "${this.$route.params.tag}" found`,
      })
  }
}
</script>
