<template>
  <svg
    :width="size"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    :stroke="stroke"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="13" cy="13" r="10" />
    <path
      class="st0"
      d="M22.4,9.6c1.3,0.5,2.6,1.3,3.7,2.3c3.9,3.9,3.9,10.2,0,14.1s-10.2,3.9-14.1,0"
    />
    <path
      class="st6"
      stroke-dasharray="4, 3"
      d="M9.6,22.4c-1.3-3.5-0.5-7.6,2.3-10.5c2.8-2.8,6.9-3.6,10.5-2.3"
    />
  </svg>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Mixins } from 'vue-property-decorator'
import IconBase from '~/components/global/icons/IconBase.vue'

@Component
export default class IconOpacity extends Mixins(IconBase) {}
</script>
