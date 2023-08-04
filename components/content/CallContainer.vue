<template>
  <div
    class="gap-y-8 flex flex-col my-8 py-8 border-y-2 dark:border-neutral-600 border-neutral-200"
  >
    <div class="flex w-full justify-center">
      <div
        class="flex flex-col sm:flex-row dark:bg-neutral-800 bg-neutral-200 p-3 rounded-xl sm:rounded-full w-full sm:w-[7/8] lg:w-3/4 shadow-lg justify-between"
      >
        <div class="flex flex-row justify-between w-full">
          <div class="flex gap-x-4">
            <img :src="img" class="h-14 w-14 m-0 rounded-full my-auto" />
            <div class="flex flex-col h-full my-auto justify-center">
              <div class="flex gap-x-1.5">
                <i
                  :class="`fa-solid fa-${icon} text-sm my-auto dark:text-neutral-400 text-neutral-600`"
                ></i
                ><span
                  class="font-light text-sm my-auto dark:text-neutral-400 text-neutral-600"
                  >{{ platform }}</span
                >
              </div>
              <strong class="-my-0.5 dark:text-neutral-300 text-neutral-700"
                >{{ contact }} — {{ duration }}</strong
              >
            </div>
          </div>
          <div class="hidden sm:flex gap-x-4">
            <button
              class="h-14 w-14 rounded-full my-auto m-0 dark:bg-neutral-700 dark:hover:bg-neutral-600 transition group duration-300 bg-neutral-300 hover:bg-neutral-400"
            >
              <i
                class="fa-solid fa-volume-high text-2xl mt-[0.375rem] transition duration-300 text-neutral-700 dark:group-hover:text-neutral-100 group-hover:text-neutral-900 dark:text-neutral-100"
              ></i>
            </button>
            <button
              class="h-14 w-14 rounded-full my-auto m-0 dark:bg-red-600 dark:hover:bg-red-500 transition duration-300 bg-red-500 hover:bg-red-600"
            >
              <i
                class="fa-solid fa-phone text-2xl mt-[0.375rem] text-neutral-100"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <span class="-my-0.5 dark:text-neutral-400 text-neutral-500 text-center"
      >Call transcription started at {{ transcribeStart }}.</span
    >
    <div class="flex gap-y-4 flex-col">
      <slot />
    </div>
    <span class="-my-0.5 dark:text-neutral-400 text-neutral-500 text-center"
      >Call ended at {{ transcribeEnd }}.</span
    >
  </div>
</template>

<script>
export default {
  props: {
    platform: String,
    icon: String,
    contact: String,
    duration: String,
    img: String,
    transcribeStart: String,
    transcribeEnd: String,
  },
};
</script>

<script setup>
const speaker = ref(false);

function toggleSpeaker() {
  if (speaker.value === false) {
    speaker.value = true;
    console.log("set to true");
    console.log(speaker.value);
  } else {
    speaker.value = false;
    console.log("set to false");
    console.log(speaker.value);
  }
}
</script>
