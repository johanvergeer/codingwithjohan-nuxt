<template>
  <div>
    <h4 v-if="title">{{ title }}</h4>
    <div
      class="grid"
      :class="[`md:grid-cols-${columns}`, columns > 1 ? 'gap-4' : '']"
    >
      <ul
        class="procon list-none list-outside"
        :class="[columns > 1 ? '' : 'procon-list-mb']"
      >
        <li v-for="(pro, index) in pros" :key="`pro-${index}`" class="flex">
          <div class="mr-5 pt-2"><icon-plus /></div>
          <div>{{ pro }}</div>
        </li>
      </ul>
      <ul class="procon list-none list-outside">
        <li v-for="(con, index) in cons" :key="`con-${index}`" class="flex">
          <div class="mr-5 pt-2"><icon-minus /></div>
          <div>{{ con }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class ProConList extends Vue {
  @Prop({ default: 2 }) private columns?: number
  @Prop({ default: "Pro's and Con's" }) private title?: string
  @Prop() private pros?: String[]
  @Prop() private cons?: String[]
}
</script>

<style scoped lang="scss">
.procon {
  padding-left: 0;
}

.procon-list-mb {
  @apply mb-5;
}
</style>
