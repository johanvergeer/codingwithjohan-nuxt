<template>
  <div class="container-inner mx-auto my-16">
    <h1 class="text-8xl font-bold leading-tight">{{ article.title }}</h1>
    <div class="flex justify-between mt-5">
      <article-meta :article="article" />
      <div class="flex mb-8 text-xl">
        <article-tags :article="article" />
      </div>
    </div>
    <feature-image :article="article" class="mb-4" />
    <div class="markdown-body mb-8">
      <nuxt-content :document="article" />
    </div>
    <article-sources :article="article" />
  </div>
</template>

<script>
import FeatureImage from '@/components/blog/FeatureImage'
import ArticleTags from '@/components/blog/ArticleTags'
import ArticleSources from '@/components/blog/ArticleSources'
import ArticleMeta from '~/components/blog/ArticleMeta'
import copyCodeBlock from '~/mixins/copyCodeBlock'

export default {
  components: { ArticleSources, ArticleTags, FeatureImage, ArticleMeta },
  mixins: [copyCodeBlock],
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
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
