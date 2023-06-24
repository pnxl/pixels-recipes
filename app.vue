<template>
  <div>
    <div
      class="flex flex-col bg-neutral-50 dark:bg-neutral-900 h-screen overflow-hidden"
    >
      <header
        class="px-6 py-3 bg-neutral-100 hidden md:flex border-b border-[rgb(187,187,187)] dark:bg-neutral-800 dark:border-neutral-700 shadow-lg"
      >
        <nuxt-link
          to="/"
          class="no-underline font-display group gap-x-3 smoothen hidden md:flex"
        >
          <img src="@/static/icon.png" class="h-8 w-8 my-auto" />
          <h1
            class="my-auto font-bold dark:text-neutral-300 text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 smoothen"
          >
            Nadine’s Journal
          </h1>
        </nuxt-link>
      </header>

      <div class="grow flex h-full">
        <div
          class="h-full shrink-0 md:bg-[rgb(237,237,237)] md:w-1/3 lg:w-1/6 w-full border-r p-6 md:p-4 border-neutral-300 md:dark:bg-[rgb(31,31,31)] dark:border-[rgb(51,51,51)]"
          :class="$route.query.series ? 'hidden lg:block' : ''"
        >
          <div class="flex flex-col gap-y-2">
            <p
              class="mb-1 dark:text-neutral-300 mt-10 text-neutral-800 font-display text-3xl font-bold md:hidden"
            >
              Folders
            </p>
            <span
              class="md:text-sm font-semibold md:font-normal ml-4 md:ml-2 md:dark:text-neutral-400 md:text-neutral-500"
              >My Notes</span
            >
            <div class="flex flex-col gap-y-2 md:gap-y-1">
              <div v-for="{ _path: url, title } in seriesList">
                <div
                  v-if="$route.query.series === url.slice(9)"
                  class="flex flex-row gap-x-2 dark:bg-red-900 bg-red-200 smoothen px-2 py-1 rounded-md no-underline"
                >
                  <i
                    class="fa-solid fa-folder my-auto text-neutral-700 dark:text-neutral-200"
                  ></i
                  ><span
                    class="my-auto text-neutral-700 dark:text-neutral-200"
                    >{{ title }}</span
                  >
                </div>
                <nuxt-link
                  v-else
                  :to="`?series=${url.slice(9)}`"
                  class="flex flex-row justify-between md:justify-start gap-x-2 md:bg-transparent dark:bg-neutral-700 bg-neutral-200 dark:bg-opacity-30 dark:hover:bg-neutral-700 hover:bg-neutral-300 smoothen md:px-2 md:py-1 px-4 py-2 rounded-md no-underline"
                >
                  <div class="flex flex-row gap-x-2">
                    <i
                      class="fa-solid fa-folder my-auto text-neutral-700 dark:text-neutral-200"
                    ></i
                    ><span
                      class="my-auto text-neutral-700 dark:text-neutral-200"
                      >{{ title }}</span
                    >
                  </div>

                  <div class="md:hidden flex-row gap-x-2 flex">
                    <i
                      class="fa-solid fa-chevron-right my-auto text-neutral-500 dark:text-neutral-400"
                    ></i>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div
          class="h-full shrink-0 md:bg-[rgb(237,237,237)] md:w-1/3 lg:w-1/4 w-full border-r md:p-4 p-6 border-neutral-300 md:dark:bg-[rgb(31,31,31)] dark:border-[rgb(51,51,51)]"
          :class="$route.query.story ? 'hidden md:block' : ''"
        >
          <div
            v-if="$route.query.series"
            class="flex flex-col gap-y-3 md:gap-y-2"
          >
            <div class="font-semibold lg:hidden">
              <button
                v-if="$route.query.series"
                class="flex flex-row gap-x-1 lg:hidden"
                @click="$router.push('/')"
              >
                <i
                  class="fa-solid fa-chevron-left my-auto dark:text-red-300"
                ></i>
                <span class="my-auto dark:text-red-300">Folders</span>
              </button>
            </div>
            <div>
              <p
                v-if="$route.query.series === 'oneshots'"
                class="md:text-sm my-1 md:my-0 dark:text-neutral-300 text-neutral-800 md:ml-2 font-display md:font-sans text-3xl font-bold md:font-normal md:dark:text-neutral-400 md:text-neutral-500"
              >
                Oneshots
                <span
                  class="text-sm hidden md:inline-block dark:text-neutral-400 text-neutral-500"
                  >— {{ seriesOneshots.length }}
                  {{ seriesOneshots.length > 1 ? "items" : "item" }}</span
                >
              </p>

              <p
                v-else-if="$route.query.series === 'is-it-murder'"
                class="md:text-sm my-1 md:my-0 dark:text-neutral-300 text-neutral-800 md:ml-2 font-display md:font-sans text-3xl font-bold md:font-normal md:dark:text-neutral-400 md:text-neutral-500"
              >
                Is It Murder?
                <span
                  class="text-sm hidden md:inline-block dark:text-neutral-400 text-neutral-500"
                  >— {{ seriesIsItMurder.length }}
                  {{ seriesIsItMurder.length > 1 ? "items" : "item" }}</span
                >
              </p>

              <p
                v-else-if="$route.query.series === 'dinners-ready'"
                class="md:text-sm my-1 md:my-0 dark:text-neutral-300 text-neutral-800 md:ml-2 font-display md:font-sans text-3xl font-bold md:font-normal md:dark:text-neutral-400 md:text-neutral-500"
              >
                Dinner’s Ready!
                <span
                  class="text-sm hidden md:inline-block dark:text-neutral-400 text-neutral-500"
                  >— {{ seriesDinnersReady.length }}
                  {{ seriesDinnersReady.length > 1 ? "items" : "item" }}</span
                >
              </p>

              <p
                v-else-if="$route.query.series === 'promised'"
                class="md:text-sm my-1 md:my-0 dark:text-neutral-300 text-neutral-800 md:ml-2 font-display md:font-sans text-3xl font-bold md:font-normal md:dark:text-neutral-400 md:text-neutral-500"
              >
                Promised.
                <span
                  class="text-sm hidden md:inline-block dark:text-neutral-400 text-neutral-500"
                  >— {{ seriesPromised.length }}
                  {{ seriesPromised.length > 1 ? "items" : "item" }}</span
                >
              </p>
            </div>
            <div class="flex flex-col gap-y-2">
              <div
                v-if="$route.query.series === 'oneshots'"
                v-for="{ _path: slug, title, date } in seriesOneshots"
              >
                <div
                  v-if="
                    $route.query.story ===
                    slug.replaceAll('/', '').replace('oneshots', '')
                  "
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-2 py-1 rounded-lg dark:bg-red-900 bg-red-200 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap text-neutral-700 dark:text-neutral-100 font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-neutral-600 dark:text-neutral-300 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ date }}
                    </span>
                  </div>
                </div>
                <nuxt-link
                  v-else
                  :key="slug"
                  :to="`?series=oneshots&story=${slug
                    .replaceAll('/', '')
                    .replace('oneshots', '')}`"
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-4 py-2 md:px-2 md:py-1 rounded-lg md:bg-transparent dark:bg-neutral-700 bg-neutral-200 dark:bg-opacity-30 dark:hover:bg-neutral-700 hover:bg-neutral-300 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-neutral-500 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ date }}
                    </span>
                  </div>
                </nuxt-link>
              </div>

              <div
                v-else-if="$route.query.series === 'is-it-murder'"
                v-for="{ _path: slug, title, date } in seriesIsItMurder"
              >
                <div
                  v-if="
                    $route.query.story ===
                    slug.replaceAll('/', '').replace('is-it-murder', '')
                  "
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-2 py-1 rounded-lg dark:bg-red-900 bg-red-200 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap text-neutral-700 dark:text-neutral-100 font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-neutral-600 dark:text-neutral-300 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ date }}
                    </span>
                  </div>
                </div>
                <nuxt-link
                  v-else
                  :key="slug"
                  :to="`?series=is-it-murder&story=${slug
                    .replaceAll('/', '')
                    .replace('is-it-murder', '')}`"
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-4 py-2 md:px-2 md:py-1 rounded-lg md:bg-transparent dark:bg-neutral-700 bg-neutral-200 dark:bg-opacity-30 dark:hover:bg-neutral-700 hover:bg-neutral-300 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-neutral-500 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ date }}
                    </span>
                  </div>
                </nuxt-link>
              </div>

              <div
                v-else-if="$route.query.series === 'dinners-ready'"
                v-for="{ _path: slug, title, date } in seriesDinnersReady"
              >
                <div
                  v-if="
                    $route.query.story ===
                    slug.replaceAll('/', '').replace('dinners-ready', '')
                  "
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-2 py-1 rounded-lg dark:bg-red-900 bg-red-200 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap text-neutral-700 dark:text-neutral-100 font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-neutral-600 dark:text-neutral-300 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ date }}
                    </span>
                  </div>
                </div>
                <nuxt-link
                  v-else
                  :key="slug"
                  :to="`?series=dinners-ready&story=${slug
                    .replaceAll('/', '')
                    .replace('dinners-ready', '')}`"
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-4 py-2 md:px-2 md:py-1 rounded-lg md:bg-transparent dark:bg-neutral-700 bg-neutral-200 dark:bg-opacity-30 dark:hover:bg-neutral-700 hover:bg-neutral-300 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-neutral-500 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ date }}
                    </span>
                  </div>
                </nuxt-link>
              </div>

              <div
                v-else-if="$route.query.series === 'promised'"
                v-for="{ _path: slug, title, date } in seriesPromised"
              >
                <div
                  v-if="
                    $route.query.story ===
                    slug.replaceAll('/', '').replace('promised', '')
                  "
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-2 py-1 rounded-lg dark:bg-red-900 bg-red-200 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap text-neutral-700 dark:text-neutral-100 font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-neutral-600 dark:text-neutral-300 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ date }}
                    </span>
                  </div>
                </div>
                <nuxt-link
                  v-else
                  :key="slug"
                  :to="`?series=promised&story=${slug
                    .replaceAll('/', '')
                    .replace('promised', '')}`"
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-4 py-2 md:px-2 md:py-1 rounded-lg md:bg-transparent dark:bg-neutral-700 bg-neutral-200 dark:bg-opacity-30 dark:hover:bg-neutral-700 hover:bg-neutral-300 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-neutral-500 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ date }}
                    </span>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div v-else class="mt-8 mx-5 flex flex-row gap-x-4">
            <i
              class="fa-solid fa-arrow-left text-lg animate-bounce-l mt-[0.15rem] -ml-1"
            ></i>
            <p class="font-display font-light my-auto">
              Click on any series on the left sidebar to select a story!
            </p>
          </div>
        </div>

        <div
          class="flex flex-row md:mb-14 md:pt-0 pt-6 justify-center w-full overflow-y-auto"
          :class="$route.query.story ? '' : 'hidden md:flex'"
        >
          <div class="w-full">
            <div class="ml-6 font-semibold md:hidden">
              <button
                v-if="$route.query.story"
                class="flex flex-row gap-x-1"
                @click="
                  $router.push({ query: { series: $route.query.series } })
                "
              >
                <i
                  class="fa-solid fa-chevron-left my-auto dark:text-red-300 text-red-700"
                ></i>
                <span class="my-auto dark:text-red-300 text-red-700"
                  >Series</span
                >
              </button>
            </div>
            <div class="w-full">
              <ContentDoc
                :path="`/${$route.query.series}/${$route.query.story}.md`"
              >
                <template #not-found>
                  <div
                    v-if="$route.query.series"
                    class="lg:mt-12 mt-20 hidden md:flex flex-row gap-x-4 ml-8"
                  >
                    <i
                      class="fa-solid fa-arrow-left text-lg animate-bounce-l mt-[0.15rem] -ml-1"
                    ></i>
                    <p class="font-display font-light my-auto">
                      Click on any
                      {{
                        $route.query.series === "oneshots" ? "story" : "episode"
                      }}
                      on the left sidebar to start reading!
                    </p>
                  </div></template
                >
                <template v-slot="{ doc }">
                  <span
                    class="justify-center hidden md:flex mt-2 dark:text-neutral-400 text-neutral-600 text-sm"
                    >{{ doc.date }}</span
                  >
                  <div class="md:p-8 p-6 pt-4 min-w-full">
                    <h1
                      class="font-display font-bold text-3xl dark:text-neutral-300 text-neutral-800"
                    >
                      {{ doc.title }}
                    </h1>

                    <div
                      v-if="doc.date"
                      class="mt-2 md:hidden dark:text-neutral-300 text-neutral-700 flex gap-x-3"
                    >
                      <i
                        class="fa-solid fa-calendar dark:text-neutral-400 text-neutral-600 mt-[0.375rem]"
                      ></i>
                      <span
                        class="justify-center w-full dark:text-neutral-400 text-neutral-600 my-auto"
                        >{{ doc.date }}</span
                      >
                    </div>
                    <div
                      v-if="doc.song"
                      class="dark:text-neutral-300 mt-2 text-neutral-700 flex gap-x-3"
                    >
                      <i
                        class="fa-solid fa-music dark:text-neutral-400 text-neutral-600 mt-[0.375rem]"
                      ></i>
                      <p class="dark:text-neutral-400 text-neutral-600">
                        The author suggests you to listen to
                        <a :href="doc.song[1]">{{ doc.song[0] }}</a> while
                        reading this story.
                      </p>
                    </div>
                    <ContentRenderer
                      :value="doc"
                      class="prose mt-6 min-w-full prose-invert prose-h2:text-xl prose-h3:text-xl prose-h4:text-xl prose-a:underline prose-a:transition prose-blockquote:font-normal prose-code:rounded-md prose-code:bg-opacity-60 prose-code:p-1 prose-code:font-mono prose-p:font-normal prose-li:marker:text-neutral-500 prose-code:before:content-none prose-code:after:content-none"
                    >
                    </ContentRenderer>
                  </div>
                </template>
              </ContentDoc>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <TransitionRoot appear :show="dialogOpen" as="template">
        <Dialog
          as="div"
          @close="setDialogCloseNoAccept()"
          class="relative z-10"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-75" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h3"
                    class="text-lg font-semibold font-display leading-6 text-neutral-900 dark:text-neutral-100"
                  >
                    Important Disclaimer
                  </DialogTitle>
                  <div class="mt-4 flex flex-col gap-y-4">
                    <p class="text-neutral-700 dark:text-neutral-300">
                      The work that can be found here are all purely fictional
                      and does not depict any real-life individuals or events.
                      Any similarities to actual persons, living or deceased, or
                      to real-life situations are purely coincidental.
                    </p>
                    <p class="text-neutral-700 dark:text-neutral-300">
                      The characters, names, and incidents in this story are
                      products of the author's imagination and have been created
                      for artistic purposes.
                    </p>
                    <p class="text-neutral-700 dark:text-neutral-300">
                      All rights to this fictional work are reserved, and
                      unauthorized reproduction, distribution, or adaptation is
                      prohibited without written permission.
                    </p>
                  </div>

                  <div class="flex justify-end">
                    <div class="mt-6">
                      <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-green-200 bg-green-100 dark:bg-green-700 dark:border-green-600 px-4 py-2 font-medium text-green-900 dark:text-neutral-100 smoothen hover:bg-green-200 dark:hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        @click="setDialogClose()"
                      >
                        I understand
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const seriesOneshots = await queryContent("/oneshots").find();
const seriesIsItMurder = await queryContent("/is-it-murder").find();
const seriesDinnersReady = await queryContent("/dinners-ready").find();
const seriesPromised = await queryContent("/promised").find();

const seriesList = await queryContent("/_series").find();

const dialogOpen = ref(checkAgreed());

function checkAgreed() {
  if (process.client && window.localStorage.getItem("agree") == "true") {
    return false;
  } else {
    return true;
  }
}

function setDialogClose() {
  dialogOpen.value = false;
  localStorage.setItem("agree", JSON.stringify(true));
}

function setDialogCloseNoAccept() {}
</script>
