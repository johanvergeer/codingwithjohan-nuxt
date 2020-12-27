<template>
  <div v-if="article.featureImage">
    <img :src="article.featureImage" alt="Feature Image" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IContentDocument } from '~/types/content'

@Component
export default class ReadingTime extends Vue {
  @Prop() private article?: IContentDocument
}
</script>
