<template>
  <svg
    :width="size"
    :fill="fill"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15,10V3H4C3.4,3,3,3.4,3,4v6h7H15z" />
    <path d="M22,10h7V4c0-0.6-0.4-1-1-1H17v7H22z" />
    <polygon points="11,12 11,20 16,20 21,20 21,12 16,12  " />
    <rect height="8" width="6" x="3" y="12" />
    <rect height="8" width="6" x="23" y="12" />
    <path d="M10,22H3v6c0,0.6,0.4,1,1,1h11v-7H10z" />
    <path d="M17,22v7h11c0.6,0,1-0.4,1-1v-6h-7H17z" />
  </svg>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Mixins } from 'vue-property-decorator'
import IconBase from '~/components/global/icons/IconBase.vue'

@Component
export default class IconBricks extends Mixins(IconBase) {}
</script>
