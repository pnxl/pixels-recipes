<template>
  <div>
    <div v-if="this.$nuxt.$route.path.startsWith('/promised/')">
      <div>
        {{ msgBefore }}
        <span class="bg-[#412B1D] border-[#412B1D] px-1 rounded-lg"
          >@{{ user }}</span
        >
        {{ msgAfter }}
      </div>
    </div>
    <div v-else>WIP</div>
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
