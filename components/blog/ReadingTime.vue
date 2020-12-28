<template>
  <span>{{ readingTime() }} min read</span>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class ReadingTime extends Vue {
  @Prop() private article?: IContentDocument

  readingTime() {
    const contentString = JSON.stringify(this.article?.body)
    const words = contentString.split(' ').length
    const wordsPerMinute = 200

    return Math.ceil(words / wordsPerMinute)
  }
}
</script>
