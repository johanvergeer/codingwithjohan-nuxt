<template>
  <div class="container-inner mx-auto my-16">
    <div>
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
import { IStructuredDataArticle } from '~/types/structureddata'

@Component({
  async asyncData({ $content, params }) {
    const article = (await $content(
      'blog',
      params.slug
    ).fetch<IPartialArticle>()) as IArticle

    return { article }
  },
})
export default class Slug extends mixins(CopyCodeBlock) {
  private article!: IArticle

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
        {
          hid: 'author',
          name: 'author',
          content: this.article.author?.name,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: urljoin(this.$store.state.host, this.article.path),
        },
        ...this._timesMeta,
        {
          hid: 'article:author',
          name: 'article:author',
          content: this.article.author?.name,
        },
        ...this._tagsMeta,
        ...this._twitterMeta,
        ...this._imageMeta,
      ],
      link: this._link,
      script: [this._structuredData],
    }
  }

  get _link() {
    const link = [
      {
        rel: 'canonical',
        href: this._canonicalUrl,
      },
    ]

    if (this._featureImageUrl) {
      link.push({
        rel: 'preload',
        href: this._featureImageUrl,
        as: 'image',
      })
    }

    return link
  }

  get _timesMeta() {
    const times = [
      {
        hid: 'article:published_time',
        name: 'article:published_time',
        content: this.article.createdAt,
      },
    ]

    if (this.article.createdAt < this.article.updatedAt) {
      times.push({
        hid: 'article:modified_time',
        name: 'article:modified_time',
        content: this.article.updatedAt,
      })
    }

    return times
  }

  get _featureImageUrl(): string | undefined {
    if (this.article.featureImage) {
      return urljoin(this.$store.state.host, this.article.featureImage)
    }
  }

  get _canonicalUrl(): string {
    return urljoin(this.$store.state.host, this.article.path)
  }

  get _twitterMeta() {
    return [
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@johan_vergeer',
      },
      {
        name: 'twitter:creator',
        content: '@johan_vergeer',
      },
      {
        name: 'twitter:label1',
        content: 'Reading time',
      },
      {
        name: 'twitter:data1',
        content: `${this.article.readingTime} min read`,
      },
      {
        name: 'twitter:title',
        content: this.article.title,
      },
      {
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
    if (this._featureImageUrl) {
      return [
        {
          hid: 'og:image',
          name: 'og:image',
          content: this._featureImageUrl,
        },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content: this._featureImageUrl,
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
          content: this._featureImageUrl,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.article.title,
        },
      ]
    } else return []
  }

  get _structuredData() {
    const data: IStructuredDataArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      headline: this.article.title,

      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this._canonicalUrl,
      },
      datePublished: this.article.createdAt,
      publisher: {
        '@type': 'Organization',
        name: 'Coding with Johan',
        logo: {
          '@type': 'ImageObject',
          url: urljoin(this.$store.state.host, '_nuxt/assets/img/logo-100.png'),
        },
      },
      author: {
        '@type': 'Person',
        name: this.article.author.name,
      },
      description: this.article.description ?? '',
    }

    if (this._featureImageUrl) {
      data.image = {
        '@type': 'ImageObject',
        url: this._featureImageUrl,
      }
    }

    if (this.article.createdAt < this.article.updatedAt) {
      data.dateModified = this.article.updatedAt
    }

    return {
      type: 'application/ld+json',
      json: data,
    }
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
