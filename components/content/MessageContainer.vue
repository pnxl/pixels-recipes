<template>
  <div
    class="gap-y-8 flex flex-col py-8 my-8 border-y-2 dark:border-neutral-600 border-neutral-200"
  >
    <div
      :class="(!platform && !time ? 'hidden' : '') + ' flex flex-col gap-y-1'"
    >
      <span v-if="platform" class="text-sm text-center text-neutral-400">{{
        platform
      }}</span>
      <span
        v-if="time"
        class="text-sm text-center font-semibold text-neutral-300"
        >{{ time }}</span
      >
    </div>
    <div class="flex gap-y-4 flex-col">
      <slot />
    </div>
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
