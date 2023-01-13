<template>
  <div
    class="gap-y-8 flex flex-col py-8 my-8 border-y-2 dark:border-gray-600 border-gray-400"
  >
    <div
      :class="(!platform && !time ? 'hidden' : '') + ' flex flex-col gap-y-1'"
    >
      <span
        v-if="platform"
        class="text-sm text-center text-gray-500 dark:text-gray-400"
        >{{ platform }}</span
      >
      <span
        v-if="time"
        class="text-sm text-center font-semibold text-gray-600 dark:text-gray-300"
        >{{ time }}</span
      >
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    platform: String,
    time: String,
  },
};
</script>
