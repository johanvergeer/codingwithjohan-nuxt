<template>
  <div>
    <div
      class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
    >
      <div class="text-6xl font-bold w-full sm:w-5/5 text-center sm:text-left">
        <div class="leading-tight">Coding with Johan</div>
        <div class="text-blue-700 leading-tight">Passion for Code</div>
      </div>
      <div class="mt-8 sm:mt-0 w-full">
        <img
          src="~/assets/img/illustrations/programming.png"
          alt="programming"
          class="mx-auto sm:mx-0"
        />
      </div>
    </div>

    <div class="container-inner mx-auto py-16 border-gray-300 border-t mb-12">
      <h1 class="font-bold">Latest Posts:</h1>
      <p v-if="$fetchState.pending">Loading articles...</p>
      <p v-else-if="$fetchState.error">Error while loading articles!</p>
      <articles-list v-else :articles="articles" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IArticle, IPartialArticle } from '~/types/content'
import WhereFilterBuilder from '~/utils/WhereFilterBuilder'

@Component
export default class Index extends Vue {
  private articles: IArticle[] = []

  async fetch() {
    this.articles = (await this.$nuxt
      .$content('blog')
      .where(new WhereFilterBuilder(this.$nuxt).build())
      .only(['title', 'slug', 'description', 'createdAt', 'body'])
      .sortBy('createdAt', 'desc')
      .fetch<IPartialArticle>()) as IArticle[]
  }
}
</script>
