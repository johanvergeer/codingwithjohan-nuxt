<template>
  <div class="container-inner mx-auto py-16">
    <h1 class="mb-16 text-center">
      {{ errorMessage }}
    </h1>
    <div class="flex justify-center">
      <img src="~/assets/img/illustrations/not-found.svg" :alt="errorMessage" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

interface IError {
  statusCode: number
}

@Component
export default class errors extends Vue {
  @Prop() error!: IError

  get errorMessage() {
    if (this.error.statusCode === 404) {
      return 'Page not found'
    } else {
      return 'An error occurred'
    }
  }
}
</script>
