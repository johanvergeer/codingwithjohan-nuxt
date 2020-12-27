<template>
  <div v-if="article.featureImage">
    <img :src="article.featureImage" alt="Feature Image" />
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ReadingTime extends Vue {
  @Prop() private article?: IContentDocument
}
</script>
