<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppCopyButton from '~/components/molecules/AppCopyButton.vue'

/**
 * appends a copy button to each element with a `nuxt-content-highlight` css class.
 */
const appendCopyButtonToCodeblocks = () => {
  const blocks = Array.from(
    document.getElementsByClassName('nuxt-content-highlight')
  )

  for (const block of blocks) {
    const CopyButton = Vue.extend(AppCopyButton)
    const component = new CopyButton().$mount()
    block.appendChild(component.$el)
  }
}

@Component
export default class CopyCodeBlock extends Vue {
  mounted() {
    setTimeout(() => {
      appendCopyButtonToCodeblocks()
    }, 250)
  }
}
</script>
