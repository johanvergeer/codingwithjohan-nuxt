<template>
  <div class="text-copy-secondary mb-4 text-xl">
    <span>{{ article.createdAt | formatDate }}</span>
    <span> &middot; </span>
    <reading-time :article="article" />
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
