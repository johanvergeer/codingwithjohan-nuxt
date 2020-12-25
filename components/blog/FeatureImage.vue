<template>
  <div v-if="article.featureImage">
    <img :src="article.featureImage" alt="Feature Image" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Article } from '~/types/Article'

@Component
export default class ReadingTime extends Vue {
  @Prop() private article?: Article
}
</script>
