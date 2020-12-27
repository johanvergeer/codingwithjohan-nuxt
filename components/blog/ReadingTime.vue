<template>
  <span>{{ readingTime() }} min read</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IContentDocument } from '~/types/content'

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
