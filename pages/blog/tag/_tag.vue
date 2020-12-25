<template>
  <div
    class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
  >
    <div class="container-inner mx-auto py-16">
      <h1 class="border-gray-700 border-b mb-12">Tag: {{ tag }}</h1>
      <div>Articles: {{ articles }}</div>
      <articles-list :articles="articles" />
    </div>
  </div>
</template>

<script>
import ArticlesList from '~/components/blog/ArticlesList'

export default {
  components: { ArticlesList },
  async asyncData({ $content, params, redirect }) {
    const tag = params.tag

    const articles = await $content('blog', params.slug)
      .where({ tags: { $contains: tag } })
      // .where(function (article) {
      //   return article.tags
      //     .map((tag) => tag.toLowerCase())
      //     .contains(params.tag.toLowerCase())
      // })
      .only(['title', 'slug', 'description', 'createdAt', 'body'])
      .sortBy('createdAt', 'asc')
      .fetch()

    if (articles.length > 0) return { articles, tag }

    return redirect('/404')
  },
}
</script>
