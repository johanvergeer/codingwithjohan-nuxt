<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class IconBase extends Vue {
  @Prop({ default: 20 }) size?: number
  @Prop({ default: 'rgb(25, 110, 210)' }) fill?: string
  @Prop({ default: 'rgb(25, 110, 210)' }) stroke?: string
}
</script>
