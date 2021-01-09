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
      <article-series :document="article" />
      <div class="markdown-body mb-8">
        <nuxt-content :document="article" />
      </div>
      <article-series-prev-next :document="article" />
      <article-sources :article="article" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import urljoin from 'url-join'
import CopyCodeBlock from '~/mixins/CopyCodeBlock.vue'
import { IArticle, IPartialArticle } from '~/types/content'
import { emptyArticle } from '~/utils/initialisers'

@Component
export default class Slug extends mixins(CopyCodeBlock) {
  private article: IArticle = emptyArticle()

  async fetch() {
    this.article = (await this.$nuxt
      .$content('blog', this.$route.params.slug)
      .fetch<IPartialArticle>()) as IArticle
  }

  head() {
    return {
      title: this.article.title,
      titleTemplate: '%s - Coding with Johan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: urljoin(this.$store.state.host, this.article.path),
        },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          hid: 'article:modified_time',
          name: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          hid: 'article:author',
          name: 'article:author',
          content: this.article.author?.name,
        },
        ...this._tagsMeta,
        ...this._twitterMeta,
        ...this._imageMeta,
      ],
    }
  }

  get _twitterMeta() {
    return [
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.article.title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.article.description,
      },
    ]
  }

  get _tagsMeta() {
    return this.article.tags
      ? this.article.tags.map((tag) => ({
          name: 'article:tag',
          content: tag,
        }))
      : []
  }

  get _imageMeta() {
    if (this.article.featureImage) {
      const imageUrl = urljoin(
        this.$store.state.host,
        this.article.featureImage
      )

      return [
        {
          hid: 'og:image',
          name: 'og:image',
          content: imageUrl,
        },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content: imageUrl,
        },
        {
          hid: 'og:image:type',
          name: 'og:image:type',
          content: 'image/png',
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: this.article.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: imageUrl,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.article.title,
        },
      ]
    } else return []
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
