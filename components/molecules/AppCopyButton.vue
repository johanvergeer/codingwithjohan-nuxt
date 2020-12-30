<template>
  <button ref="copy" class="copy">
    <icon-clipboard-check v-if="state === 'copied'" class="w-5 h-5" />
    <icon-clipboard-copy v-else class="w-8 h-8" />
  </button>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  data() {
    return {
      state: 'init',
    }
  },
  mounted() {
    const copyCode = new Clipboard(this.$refs.copy, {
      target(trigger) {
        return trigger.previousElementSibling
      },
    })
    copyCode.on('success', (event) => {
      event.clearSelection()
      this.state = 'copied'
      window.setTimeout(() => {
        this.state = 'init'
      }, 2000)
    })
  },
}
</script>
