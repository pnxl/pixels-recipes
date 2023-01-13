<template>
  <div class="gap-y-8 flex flex-col my-8 py-8 border-y-2 border-neutral-600">
    <div class="flex w-full justify-center">
      <div
        class="flex bg-neutral-800 p-3 rounded-full w-2/3 shadow-lg justify-between"
      >
        <div class="flex gap-x-4">
          <img :src="img" class="h-14 w-14 m-0 rounded-full my-auto" />
          <div class="flex flex-col h-full my-auto justify-center">
            <div class="flex text-neutral-400 gap-x-1.5">
              <i :class="`fa-solid fa-${icon} text-sm`"></i
              ><span class="font-light text-sm my-auto">{{ platform }}</span>
            </div>
            <strong class="-my-0.5">{{ contact }} — {{ duration }}</strong>
          </div>
        </div>
        <div class="flex gap-x-4">
          <div
            class="bg-neutral-700 rounded-full h-14 w-14 flex justify-center"
          >
            <div class="flex flex-col justify-center">
              <i class="fa-solid fa-volume-high text-2xl text-white"></i>
            </div>
          </div>
          <div class="bg-white rounded-full h-14 w-14 flex justify-center">
            <div class="flex flex-col justify-center">
              <i class="fa-solid fa-microphone text-2xl text-black"></i>
            </div>
          </div>
          <div class="bg-red-500 rounded-full h-14 w-14 flex justify-center">
            <div class="flex flex-col justify-center">
              <i class="fa-solid fa-phone-slash text-2xl text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="-my-0.5 text-neutral-400 text-center"
      >Call transcription started at {{ transcribeStart }}.</span
    >
    <div class="flex gap-y-4 flex-col">
      <slot />
    </div>
    <span class="-my-0.5 text-neutral-400 text-center"
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
