<template>
  <div>
    <nuxt-link
      v-for="tag in article.tags"
      :key="tag"
      :to="{ name: 'blog-tag-tag', params: { tag: tag } }"
      class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-blue-300"
    >
      {{ tag }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ArticleTags extends Vue {
  @Prop() private article?: IContentDocument
}
</script>
