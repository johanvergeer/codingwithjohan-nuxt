<template>
  <li>
    <a target="_blank" class="text-white hover:text-gray-400" :href="href">
      <img :src="require(`~/assets/img/icons/${img}.png`)" :alt="img" />
    </a>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class FooterIcon extends Vue {
  @Prop() private href?: String
  @Prop() private img?: String
}
</script>
