<template>
  <div class="min-h-screen flex w-full">
    <div class="w-full flex justify-center bg-[rgb(11,11,11)] text-neutral-200">
      <div class="flex flex-col justify-center">
        <div
          class="md:border-neutral-700 md:my-16 bg-neutral-900 shadow-2xl drop-shadow-2xl md:border min-h-[80vh] w-screen md:w-[80vw] lg:w-[70vw] xl:w-[60vw] md:rounded-xl"
        >
          <div
            class="gap-x-8 hidden md:flex bg-neutral-800 md:rounded-t-xl md:border-neutral-700 md:border-b px-8 py-4"
          >
            <nuxt-link
              class="flex gap-x-2 no-underline"
              to="/oneshots/storylines"
            >
              <i
                class="fa-solid fa-circle my-auto text-sm text-red-500 cursor-pointer"
              ></i>
              <i
                class="fa-solid fa-circle my-auto text-sm text-yellow-500 cursor-pointer"
              ></i>
              <i
                class="fa-solid fa-circle my-auto text-sm text-green-500 cursor-pointer"
              ></i>
            </nuxt-link>
            <strong class="text-ellipsis overflow-hidden whitespace-nowrap">{{
              page.title
            }}</strong>
          </div>
          <div class="md:hidden flex flex-row px-8 pt-8 pb-2 justify-between">
            <nuxt-link
              to="/oneshots/storylines"
              class="flex md:hidden gap-x-2 no-underline text-red-400 hover:text-red-300"
            >
              <i class="fa-solid fa-chevron-left my-auto text-lg"></i>
              <p class="my-auto">Episode Switcher</p>
            </nuxt-link>
          </div>
          <div class="px-8 py-8 w-full flex flex-col">
            <div class="w-full justify-center flex">
              <span
                class="my-auto text-center text-neutral-400 font-light text-sm tracking-wide"
                >{{ page.date }} • {{ page.readingStats.text }}</span
              >
            </div>
            <div class="mt-8 prose-neutral">
              <h1 class="text-3xl font-bold">{{ page.title }}</h1>
              <div
                class="mt-4 md:mt-2 md:flex md:space-x-2 text-neutral-400 p-3 md:p-0 rounded-xl border md:border-none border-neutral-500"
              >
                <i class="fa-solid fa-headphones-simple text-xl md:text-md my-auto"></i>
                <p class="my-auto"
                  >The author recommends you to listen to <a :href="page.song[1]">{{  page.song[0] }}</a> while listening.</p
                >
              </div>
              <div
                class="mt-4 md:mt-2 md:flex md:space-x-2 text-neutral-400 p-3 md:p-0 rounded-xl border md:border-none border-neutral-500"
              >
                <i class="fa-solid fa-triangle-exclamation text-xl md:text-md my-auto"></i>
                <p class="my-auto"
                  >This work is purely fictional, and the story’s characters DO NOT represent any people in real life.</p
                >
              </div>
              <nuxt-content
                :document="page"
                class="prose mt-8 md:max-w-none prose-invert prose-h2:text-xl prose-h3:text-xl prose-h4:text-xl prose-a:underline prose-a:transition prose-blockquote:font-normal prose-code:rounded-md prose-code:bg-opacity-60 prose-code:p-1 prose-code:font-mono prose-p:font-normal prose-li:marker:text-neutral-500 prose-code:before:content-none prose-code:after:content-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content("oneshots", params.slug).fetch();
    return {
      page,
    };
  },
  head() {
    return {
      title: `${this.page.title} - stories.fangdustry.me`,
    };
  },
};
</script>
