<template>
  <div>
    <div>
      <div>
        {{ msgBefore }}
        <span
          class="dark:bg-red-600 dark:border-red-500 bg-red-300 border-red-400 border dark:bg-opacity-75 px-1 py-[0.125rem] rounded-lg"
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
