<template>
  <div class="flex gap-x-1 -my-[0.0625rem]">
    <a :href="link" class="dark:text-sky-300 text-sky-600">
      {{ text }}
    </a>
    <i
      class="fa-solid fa-link text-sm my-auto text-gray-600 dark:text-gray-500"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    text: String,
  },
};
</script>
