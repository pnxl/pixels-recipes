<template>
  <div class="min-h-screen flex w-full">
    <div
      class="w-full flex justify-center bg-neutral-900 md:bg-[rgb(11,11,11)] text-neutral-200"
    >
      <div class="md:flex flex-col justify-center">
        <div
          class="md:border-neutral-700 md:my-16 bg-neutral-900 md:shadow-2xl md:drop-shadow-2xl md:border min-h-[80vh] w-screen md:w-[80vw] lg:w-[70vw] xl:w-[60vw] md:rounded-xl"
        >
          <div
            class="gap-x-8 hidden md:flex bg-neutral-800 md:rounded-t-xl md:border-neutral-700 md:border-b px-8 py-4"
          >
            <button class="flex gap-x-2 no-underline" @click="$router.go(-1)">
              <i
                class="fa-solid fa-circle my-auto text-sm text-red-500 cursor-pointer"
              ></i>
              <i
                class="fa-solid fa-circle my-auto text-sm text-yellow-500 cursor-pointer"
              ></i>
              <i
                class="fa-solid fa-circle my-auto text-sm text-green-500 cursor-pointer"
              ></i>
            </button>
            <strong>Showing All Storylines</strong>
          </div>
          <div class="md:hidden flex flex-row px-8 pt-8 pb-2 justify-between">
            <button
              @click="$router.go(-1)"
              class="flex md:hidden gap-x-2 no-underline text-red-400 hover:text-red-300"
            >
              <i class="fa-solid fa-chevron-left my-auto text-lg"></i>
              <p class="my-auto">Go Back</p>
            </button>
          </div>

          <div class="px-5 py-4 w-full flex flex-col">
            <div class="flex-col gap-y-4 flex py-8 overflow-y-auto">
              <!-- <div class="flex-col gap-y-4 flex px-4 py-8 overflow-y-auto"> -->
              <!-- <div class="grid md:grid-cols-2 gap-x-4 gap-y-4 w-full">  -->
              <!-- <div class="gap-y-4 flex flex-col">
                  <p
                    class="text-lg font-medium dark:text-neutral-200 text-neutral-800"
                  >
                    All Series — {{ series.length }}
                  </p>
                  <nuxt-link
                    v-for="story in series"
                    :key="story.slug"
                    :to="'/' + story.slug"
                    class="w-full no-underline dark:text-blue-400 hover:dark:text-blue-300 hover:text-blue-600 text-blue-500"
                  >
                    <div
                      class="flex flex-col md:-ml-2 p-2 rounded-lg border-neutral-200 dark:border-neutral-800 border-2 dark:hover:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-opacity-40 hover:bg-opacity-20 transition"
                    >
                      <p class="text-sm no-underline text-neutral-500">
                        Started by {{ story.writers.join(", ") }} on
                        {{ story.started }}
                      </p>
                      <span class="underline font-medium">
                        {{ story.title }}
                      </span>
                    </div>
                  </nuxt-link>
                </div> -->
              <div class="gap-y-4 flex flex-col">
                <p class="text-lg font-medium text-neutral-200 md:ml-4">
                  All Oneshots — {{ oneshots.length }}
                </p>
                <nuxt-link
                  v-for="story in oneshots"
                  :key="story.slug"
                  :to="'/oneshots/' + story.slug"
                  class="w-full no-underline text-red-400 hover:text-red-300"
                >
                  <div
                    class="flex flex-col md:ml-2 p-2 rounded-lg border-neutral-800 border-2 hover:bg-neutral-700 hover:bg-opacity-40 transition"
                  >
                    <p
                      class="text-sm no-underline text-neutral-500 text-ellipsis overflow-hidden"
                    >
                      {{ story.date }}
                    </p>
                    <span
                      class="underline font-medium text-ellipsis overflow-hidden"
                    >
                      {{ story.title }}
                    </span>
                  </div>
                </nuxt-link>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const oneshots = await $content("oneshots")
      .only(["slug", "title", "date"])
      .sortBy("num", "asc")
      .fetch();
    return {
      oneshots,
    };
  },
  head() {
    return {
      title: `Storylines - Nadine's journal`,
    };
  },
};
</script>
