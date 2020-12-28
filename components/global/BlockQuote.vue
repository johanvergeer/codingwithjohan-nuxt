<template>
  <blockquote>
    <slot />
    <footer v-if="author || title || url">
      <span v-if="author" class="author">{{ author }}</span>
      <cite v-if="url || title" :class="[author ? 'hyphen-before' : '']">
        <a v-if="url" :href="url" target="_blank">
          {{ title !== '' ? title : url }}
        </a>
        <span v-else>{{ title }}</span>
      </cite>
    </footer>
  </blockquote>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class BlockQuote extends Vue {
  @Prop({ default: '' }) private author?: string
  @Prop({ default: '' }) private title?: string
  @Prop({ default: '' }) private url?: string
}
</script>

<style lang="scss" scoped>
a {
  font-weight: 400;
}

footer {
  @apply mt-10;
}

.hyphen-before::before {
  content: '—';
  padding: 0.3em;
}

.author {
  font-weight: 700;
}
</style>
