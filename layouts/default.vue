<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen"
  >
    <site-header />

    <div class="flex-grow">
      <Nuxt />
    </div>

    <site-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {}
</script>

<style lang="scss">
html {
  font-size: 62.5%; // Usually about 10px, so it is easy to calculate.
}

body {
  font-size: 1.8rem;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.2em;
}

.theme-light {
  --bg-background-primary: white;
  --bg-background-secondary: #f7fafc;
  --bg-background-tertiary: #e2e8f0;
  --bg-background-form: white;
  --text-copy-primary: #2d3748;
  --text-copy-secondary: #4a5568;
  --border-border-color-primary: white;

  .search-highlighted,
  .search-hover:hover {
    background: #f0fff4;
  }
}

.theme-dark {
  .search-highlighted,
  .search-hover:hover {
    background: #2d3748;
  }

  --bg-background-primary: #0d2438;
  --bg-background-secondary: #102c44;
  --bg-background-tertiary: #1e3951;
  --bg-background-form: #1a202c;
  --text-copy-primary: #cbd5e0;
  --text-copy-secondary: #e2e8f0;
  --border-border-color-primary: #1a202c;

  .markdown-body {
    color: #cbd5e0;
  }

  nav .top-menu .active {
    @apply border-white border-b;
  }
}

.content-wrapper {
  transition: background-color 0.25s;
}

a {
  @apply text-blue-700;
  @apply font-bold;

  &:hover {
    @apply text-blue-800;
  }
}

.container-inner {
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 800px;
  }
}

.checkmark {
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2229%22%20height%3D%2229%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4.427%2024.93A14.5%2014.5%200%201%201%2024.93%204.427c5.495%205.69%205.416%2014.733-.177%2020.326s-14.637%205.672-20.326.177z%22%20fill%3D%22%232E855A%22/%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M10.234%2012.803l3.67%203.253L20.766%2010%2023%2012l-9.096%208L8%2014.789l2.234-2z%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  @apply pl-10;
}

.responsive-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
