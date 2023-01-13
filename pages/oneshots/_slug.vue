<template>
  <div class="min-h-screen flex w-full">
    <div
      class="w-full bg-neutral-100 flex justify-center text-neutral-800 dark:bg-[rgb(11,11,11)] dark:text-neutral-200"
    >
      <div class="flex flex-col justify-center">
        <div
          class="md:dark:border-neutral-700 md:my-16 dark:bg-neutral-900 bg-neutral-100 shadow-2xl drop-shadow-2xl md:border-neutral-300 md:border min-h-[80vh] w-screen md:w-[80vw] lg:w-[70vw] xl:w-[60vw] md:rounded-xl"
        >
          <div
            class="gap-x-8 hidden md:flex dark:bg-neutral-800 bg-neutral-200 md:rounded-t-xl md:dark:border-neutral-700 md:border-neutral-300 md:border-b px-8 py-4"
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
            <strong class="text-ellipsis overflow-hidden whitespace-nowrap">{{ page.title }}</strong>
          </div>
          <div class="md:hidden flex flex-row px-8 pt-8 pb-2 justify-between">
            <nuxt-link
              to="/oneshots/storylines"
              class="flex md:hidden gap-x-2 no-underline dark:text-blue-400 hover:dark:text-blue-300 hover:text-blue-600 text-blue-500"
            >
              <i class="fa-solid fa-chevron-left my-auto text-lg"></i>
              <p class="my-auto">Episode Switcher</p>
            </nuxt-link>
            <i class="fa-solid fa-share-from-square my-auto text-lg"></i>
          </div>
          <div class="px-8 py-8 w-full flex flex-col">
            <div class="w-full justify-center flex">
              <span
                class="my-auto text-center text-neutral-400 font-light text-sm"
                >{{ page.date }}</span
              >
            </div>
            <div class="mt-8">
              <h1 class="text-3xl font-bold">{{ page.title }}</h1>
              <nuxt-content
                :document="page"
                class="prose mt-6 md:max-w-none dark:prose-invert prose-neutral prose-h2:text-xl prose-h3:text-xl prose-h4:text-xl prose-a:underline prose-a:transition prose-blockquote:font-normal prose-code:rounded-md dark:prose-code:bg-opacity-60 prose-code:p-1 prose-code:font-mono prose-p:font-normal prose-li:marker:text-neutral-500 prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl"
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
