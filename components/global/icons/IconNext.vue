<template>
  <svg
    :width="size"
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    :stroke="stroke"
    stroke-width="22"
    stroke-miterlimit="10"
    fill="none"
  >
    <circle cx="253.9" cy="246.4" r="181.8" />
    <polyline
      points="214.2,313.4 305.9,245 305.9,245 305.9,245 305.9,245 214.3,176.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Prop } from 'nuxt-property-decorator'
import { Mixins } from 'vue-property-decorator'
import IconBase from '~/components/global/icons/IconBase.vue'

@Component
export default class IconNext extends Mixins(IconBase) {
  @Prop({ default: 25 }) size?: number
  @Prop({ default: 'currentColor' }) stroke?: string
}
</script>
