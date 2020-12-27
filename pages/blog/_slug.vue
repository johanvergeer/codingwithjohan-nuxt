<template>
  <div class="container-inner mx-auto my-16">
    <p v-if="$fetchState.pending">Loading article...</p>
    <p v-else-if="$fetchState.error">Error while loading the article!</p>
    <div v-else>
      <h1 class="text-8xl font-bold leading-tight">{{ article.title }}</h1>
      <div class="flex justify-between mt-5">
        <article-meta :article="article" />
        <div class="flex mb-8 text-xl">
          <article-tags :article="article" />
        </div>
      </div>
      <feature-image :article="article" class="mb-4" />
      <!--      <article-series :article="article" />-->
      <div class="markdown-body mb-8">
        <nuxt-content :document="article" />
      </div>
      <article-sources :article="article" />
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Component, Vue } from 'nuxt-property-decorator'
import ArticleMeta from '~/components/blog/ArticleMeta.vue'
import ArticlesList from '~/components/blog/ArticlesList.vue'
import ArticleSources from '~/components/blog/ArticleSources.vue'
import ArticleTags from '~/components/blog/ArticleTags.vue'
import FeatureImage from '~/components/blog/FeatureImage.vue'

@Component({
  components: {
    ArticleMeta,
    ArticleTags,
    FeatureImage,
    ArticleSources,
    ArticlesList,
  },
})
export default class Slug extends Vue {
  private article: IContentDocument | IContentDocument[] = []

  async fetch() {
    this.article = await this.$nuxt
      .$content('blog', this.$route.params.slug)
      .fetch()
  }
}
</script>

<style lang="scss">
.nuxt-content-highlight {
  @apply relative;

  & > .filename {
    @apply absolute right-0 top-0 text-gray-400 font-light z-10 mr-2 mt-1 text-sm;
  }

  & > .copy {
    @apply hidden absolute right-0 bottom-0 leading-none shadow-lg px-1 py-1 text-white bg-gray-800 text-sm uppercase rounded-md border border-white font-semibold mr-2 mb-2;
    &:hover {
      @apply bg-gray-700;
    }
    &:focus {
      @apply outline-none bg-gray-900;
    }
  }

  &:hover {
    & > .copy {
      @apply block;
    }
  }
}

.nuxt-content {
  .token.comment {
    color: #acb5b9;
  }
}
</style>
