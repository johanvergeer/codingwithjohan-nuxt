<template>
  <div v-if="article.sources && article.sources.length > 0">
    <h1>Sources</h1>
    <div v-for="source in article.sources" :key="source.title">
      <a :href="source.url" target="_blank">{{ source.title }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Article } from '~/types/Article'

@Component
export default class ArticleTags extends Vue {
  @Prop() private article?: Article
}
</script>
