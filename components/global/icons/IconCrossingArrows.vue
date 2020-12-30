<template>
  <svg
    :class="[`h-${size}`, `w-${size}`]"
    :fill="fill"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.3,14.2l2.8,2.8h-4.7L3.4,5H0v2h2.6l5,5l-5,5H0v2h3.4L9,13.4l5.6,5.6h5.5l-2.8,2.8l1.4,1.4L24,18l-5.3-5.2  L17.3,14.2z M15.4,7h4.7l-2.8,2.8l1.4,1.4L24,6l-5.3-5.2l-1.4,1.4L20.1,5h-5.5l-4.3,4.3l1.4,1.4L15.4,7z"
    />
  </svg>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Mixins } from 'vue-property-decorator'
import IconBase from '~/components/global/icons/IconBase.vue'

@Component
export default class IconBricks extends Mixins(IconBase) {}
</script>
