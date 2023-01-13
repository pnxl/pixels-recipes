<template>
  <div
    :class="
      (alignment === 'right' ? 'justify-end' : 'justify-start') + ' w-full flex'
    "
  >
    <div class="flex flex-col">
      <span
        :class="
          (alignment === 'right' ? 'pr-12 pl-2 text-right' : 'pl-12 pr-2') +
          '  dark:text-neutral-500 text-neutral-600 text-sm pb-2 bg-gradient-to-br'
        "
      >
        {{ contact }}
      </span>
      <div class="flex gap-x-3">
        <img
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
        <p
          v-else
          :class="
            (!img
              ? alignment === 'right'
                ? 'mr-11 dark:bg-blue-600 bg-blue-400 ml-11'
                : 'ml-11 dark:bg-neutral-700 bg-neutral-200 mr-11'
              : alignment === 'right'
              ? 'dark:bg-blue-600 bg-blue-400 ml-11'
              : 'dark:bg-neutral-700 bg-neutral-200 mr-11') +
            ' w-fit py-2 px-4 rounded-xl text-neutral-100 my-auto'
          "
        >
          <slot />
        </p>
        <img
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
