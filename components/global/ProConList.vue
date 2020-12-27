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
        <li v-for="pro in pros" :key="pro" class="flex">
          <div class="mr-5 pt-2"><icon-plus /></div>
          <div>{{ pro }}</div>
        </li>
      </ul>
      <ul class="procon list-none list-outside">
        <li v-for="con in cons" :key="con" class="flex">
          <div class="mr-5 pt-2"><icon-minus /></div>
          <div>{{ con }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import IconPlus from '~/components/atoms/icons/IconPlus.vue'
import IconMinus from '~/components/atoms/icons/IconMinus.vue'
@Component({
  components: { IconMinus, IconPlus },
})
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
