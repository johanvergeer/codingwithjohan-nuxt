<template>
  <div>
    <div
      v-for="article in articles"
      :key="article.slug"
      class="post border-gray-400 border-b mb-12"
    >
      <h2 class="font-bold">
        <nuxt-link
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="text-copy-primary"
        >
          {{ article.title }}
        </nuxt-link>
      </h2>
      <article-meta :article="article" />

      <div class="mb-4">
        {{ article.description }}
      </div>

      <div class="mb-8">
        <nuxt-link
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="font-bold uppercase"
        >
          Read More
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IArticle } from '~/types/content'

@Component
export default class ArticlesList extends Vue {
  @Prop() private articles!: IArticle[]
}
</script>
