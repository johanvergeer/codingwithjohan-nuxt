<template>
  <div
    class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
  >
    <div class="container-inner mx-auto py-16">
      <h1 class="border-gray-700 border-b mb-12">
        Category: {{ articles[0].category }}
      </h1>
      <articles-list :articles="articles" />
    </div>
  </div>
</template>

<script>
import ArticlesList from '~/components/blog/ArticlesList'

export default {
  components: { ArticlesList },
  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .where({ category: { $regex: [params.category, 'i'] } })
      .only(['title', 'slug', 'description', 'createdAt', 'body', 'category'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  },
}
</script>
