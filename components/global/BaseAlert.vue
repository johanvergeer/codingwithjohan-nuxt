<template>
  <div class="alert border-l-4 p-4 mb-4" :class="`alert-${type}`">
    <div class="flex">
      <div class="flex-shrink-0 self-start pt-1">
        <icon-info v-if="type === 'info'" class="alert-icon" />
        <icon-next v-else-if="type === 'next'" class="alert-next" />
        <icon-star v-else-if="type === 'star'" class="alert-star" />
        <icon-alert v-else class="alert-icon" />
      </div>
      <div class="ml-2 alert-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import IconInfo from '@/components/atoms/icons/IconInfo'
import IconNext from '@/components/atoms/icons/IconNext'
import IconStar from '@/components/atoms/icons/IconStar'
import IconAlert from '@/components/atoms/icons/IconAlert'

export default {
  components: { IconAlert, IconStar, IconNext, IconInfo },
  props: {
    type: {
      type: String,
      default: 'warning',
    },
  },
}
</script>

<style scoped lang="scss">
.alert p {
  @apply m-0;
}

/* Warning Icon */
.alert-warning {
  @apply bg-orange-100 border-orange-400;

  code {
    @apply bg-orange-200 shadow-none;
  }

  .alert-icon {
    @apply text-orange-400;
  }

  .alert-content {
    @apply text-orange-700;
  }
}

/* Info Icon */
.alert-info {
  @apply bg-blue-100 border-blue-400;

  .alert-icon {
    @apply text-blue-400;
  }

  .alert-content {
    @apply text-blue-700;
  }

  .alert-info .dark-mode .alert-info {
    @apply bg-blue-900 border-blue-700;
  }
}

/* Next Icon */
.alert-next {
  @apply bg-gray-100 border-gray-400;

  code {
    @apply bg-gray-200 shadow-none;
  }

  .alert-icon {
    @apply text-gray-400;
  }

  .alert-content {
    @apply text-gray-700;
  }
}

/* Star Icon */
.alert-star {
  @apply bg-purple-100 border-purple-400;

  code {
    @apply bg-purple-200 shadow-none;
  }

  .alert-icon {
    @apply text-purple-400;
  }

  .alert-content {
    @apply text-purple-700;
  }
}

.dark-mode {
  .alert-warning {
    @apply bg-yellow-900 border-yellow-700;

    .alert-content {
      @apply text-orange-300 bg-yellow-900 border-yellow-700;

      code {
        @apply bg-yellow-800;
      }
    }
  }

  .alert-info .alert-content {
    @apply text-blue-300 bg-blue-900 border-blue-700;

    code {
      @apply bg-blue-800;
    }
  }

  .alert-star {
    @apply bg-purple-800 border-purple-700;

    .alert-content {
      @apply text-gray-300 bg-purple-800 border-purple-700;

      code {
        @apply bg-purple-800;
      }
    }
  }

  .alert-next {
    @apply bg-gray-800 border-gray-700;

    .alert-next .alert-content {
      @apply text-gray-300 bg-gray-800 border-gray-700;

      code {
        @apply bg-gray-800;
      }
    }
  }
}
</style>
