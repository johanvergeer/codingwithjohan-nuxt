<template>
  <li>
    <a target="_blank" class="text-white hover:text-gray-400" @href="href">
      <img :src="require(`~/assets/img/icons/${img}.png`)" @alt="img" />
    </a>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ProConList extends Vue {
  @Prop() private href?: [String]
  @Prop() private img?: [String]
}
</script>
