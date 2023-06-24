<template>
  <div
    :class="
      (alignment === 'right' ? 'justify-end' : 'justify-start') + ' w-full flex'
    "
  >
    <div :class="(!contact ? null : 'gap-y-2') + ' flex flex-col'">
      <span
        v-if="contact"
        :class="
          (alignment === 'right' ? 'pr-12 pl-2 text-right' : 'pl-12 pr-2') +
          '  text-neutral-500 text-sm mt-1'
        "
      >
        {{ contact }}
      </span>
      <div class="flex gap-x-3">
        <img
          v-if="img"
          :class="
            (alignment === 'right' ? 'hidden' : null) +
            ' w-8 h-8 rounded-full my-auto'
          "
          :src="img"
        />
        <p
          v-if="emoji"
          :class="
            (!img
              ? alignment === 'right'
                ? 'mr-12 ml-12'
                : 'ml-12 mr-12'
              : alignment === 'right'
              ? 'ml-12'
              : 'mr-12') +
            ' w-fit text-5xl rounded-xl text-neutral-100 my-auto '
          "
        >
          <slot />
        </p>
        <div
          v-else
          :class="
            (!img
              ? alignment === 'right'
                ? 'mr-11 dark:bg-red-900 bg-red-200 border border-red-300  dark:border-red-700 ml-11'
                : 'ml-11 dark:bg-neutral-700 bg-neutral-200 border border-neutral-300 dark:border-neutral-500 mr-11'
              : alignment === 'right'
              ? 'dark:bg-red-900 bg-red-200 border border-red-300 dark:border-red-700 ml-11'
              : 'dark:bg-neutral-700 bg-neutral-200 border-neutral-300 dark:border-neutral-500 border mr-11') +
            ' w-fit py-2 px-4 rounded-xl dark:text-neutral-100 my-auto'
          "
        >
          <slot />
        </div>
        <img
          v-if="img"
          :class="
            (alignment === 'left' ? 'hidden' : null) +
            ' w-8 h-8 rounded-full my-auto'
          "
          :src="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alignment: String,
    img: String,
    contact: String,
    message: String,
    emoji: Boolean,
  },
};
</script>
