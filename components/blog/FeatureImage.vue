<template>
  <div v-if="article.featureImage">
    <img :src="article.featureImage" alt="Feature Image" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IHasFeatureImage } from '~/types/content'

@Component
export default class ReadingTime extends Vue {
  @Prop() private article?: IHasFeatureImage
}
</script>
