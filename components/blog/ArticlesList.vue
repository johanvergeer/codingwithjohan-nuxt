<template>
  <div class="container-inner mx-auto py-16">
    <h1 class="text-4xl font-bold">Latest Posts:</h1>
    <div
      v-for="article in articles"
      :key="article.slug"
      class="post border-gray-400 border-b mb-12"
    >
      <h2 class="text-3xl font-bold">
        <nuxt-link
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="text-copy-primary"
        >
          {{ article.title }}
        </nuxt-link>
      </h2>
      <div class="text-copy-secondary mb-4 text-sm">
        <span>{{ article.createdAt | formatDate }}</span>
        <span> &middot; </span>
        <reading-time :article="article" />
      </div>

      <div class="text-lg mb-4">
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
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Article } from '~/types/Article'
import ReadingTime from '~/components/blog/ReadingTime.vue'
@Component({
  components: { ReadingTime },
})
export default class ArticlesList extends Vue {
  @Prop() private articles?: [Article]
}
</script>
