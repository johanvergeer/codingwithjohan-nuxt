<template>
  <div class="flex items-center mb-2">
    <div class="mr-10">
      <slot name="col1" />
    </div>
    <div>
      <slot name="col2" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LayoutTwoColumns extends Vue {}
</script>
