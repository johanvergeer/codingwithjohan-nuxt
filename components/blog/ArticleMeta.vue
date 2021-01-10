<template>
  <div class="flex items-center text-copy-secondary mb-4 text-xl">
    <gravatar-image class="rounded-full" :author="article.author" />
    <span class="ml-2">{{ article.author.name }}</span>
    <span class="middot-before">{{ article.createdAt | formatDate }}</span>
    <span class="middot-before">{{ article.readingTime }} min read</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IArticle } from '~/types/content'

@Component
export default class ArticleMeta extends Vue {
  @Prop() private article?: IArticle
}
</script>

<style lang="scss">
.middot-before::before {
  content: '\b7';
  padding: 0.3em;
}
</style>
