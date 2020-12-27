<template>
  <div class="text-copy-secondary mb-4 text-xl">
    <span>{{ article.createdAt | formatDate }}</span>
    <span> &middot; </span>
    <reading-time :article="article" />
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ArticleMeta extends Vue {
  @Prop() private article?: IContentDocument
}
</script>
