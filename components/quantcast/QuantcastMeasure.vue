<template><div></div></template>

<script>
export default {
  mounted() {
    window._qevents = window._qevents || []
    ;(function () {
      const elem = document.createElement('script')
      elem.src = 'https://secure.quantserve.com/quant.js'
      elem.async = true
      elem.type = 'text/javascript'
      const scpt = document.getElementsByTagName('script')[0]
      scpt.parentNode.insertBefore(elem, scpt)
    })()

    window._qevents.push({
      qacct: 'p-2KXG7Uf16fG9h',
      uid: 'johan@whitegyro.com',
    })
  },
}
</script>

<style lang="scss">
.quantserve-img {
  border: 0;
  height: 1px;
  width: 1px;
}
</style>
