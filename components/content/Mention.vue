<template>
  <div>
    <div>
      <div>
        {{ msgBefore }}
        <span
          class="dark:bg-sky-600 dark:border-sky-500 bg-sky-300 border-sky-400 border dark:bg-opacity-75 px-1 py-[0.125rem] rounded-lg"
          >@{{ user }}</span
        >
        {{ msgAfter }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: String,
    msgBefore: String,
    msgAfter: String,
  },
};
</script>
