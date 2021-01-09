<template>
  <img :src="gravatarImgUrl" alt="User profile image" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import md5 from 'md5'
import { IAuthor } from '~/types/content'

@Component
export default class GravatarImage extends Vue {
  @Prop() author!: IAuthor
  @Prop({ default: 24 }) size!: number

  /**
   * returns the url to a gravatar image based on the author email
   * http://en.gravatar.com/site/implement/images/
   */
  get gravatarImgUrl(): string {
    const hash = md5(this.author.email.trim().toLowerCase())

    return `https://www.gravatar.com/avatar/${hash}?default=mp&size=${this.size}`
  }
}
</script>
