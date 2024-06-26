<template>
  <div>
    <div
      class="flex flex-col relative bg-gray-50 dark:bg-gray-900 h-screen overflow-hidden"
    >
      <header
        class="px-6 py-3 justify-between fixed top-0 w-full bg-gray-100 hidden md:flex border-b border-[rgb(187,187,187)] dark:bg-gray-800 dark:border-gray-700 shadow-lg"
      >
        <nuxt-link
          to="/"
          class="no-underline group gap-x-3 my-1 smoothen hidden md:flex"
        >
          <img src="@/static/icon.png" class="h-7 w-7 my-auto" />
          <h1
            class="my-auto font-bold dark:text-gray-300 text-gray-700 group-hover:text-gray-900 dark:group-hover:text-gray-100 smoothen"
          >
            Pixel’s Recipes
          </h1>
        </nuxt-link>
      </header>

      <div class="grow flex h-full md:pt-14">
        <div
          class="h-full shrink-0 md:bg-gray-100 md:w-1/3 lg:w-1/5 2xl:w-1/6 w-full border-r p-6 md:p-4 border-gray-300 md:dark:bg-gray-800 dark:border-gray-700"
          :class="$route.query.recipes ? 'hidden lg:block' : ''"
        >
          <div class="flex flex-col gap-y-2">
            <p
              class="mb-1 dark:text-gray-300 mt-10 text-gray-800 text-3xl font-bold md:hidden"
            >
              Categories
            </p>
            <span
              class="md:text-sm font-semibold md:font-normal ml-4 md:ml-2 md:dark:text-gray-400 md:text-gray-500"
              >Recipes</span
            >
            <div class="flex flex-col gap-y-2 md:gap-y-1">
              <div v-for="{ _path: url, title } in recipesList">
                <div v-if="$route.query.recipes === url.slice(10)">
                  <div
                    v-if="$route.query.card"
                    class="flex flex-row gap-x-2 dark:bg-gray-700 bg-gray-200 smoothen px-2 py-1 rounded-md no-underline"
                  >
                    <i
                      class="fa-solid fa-folder my-auto text-sky-500 dark:text-sky-400"
                    ></i
                    ><span class="my-auto text-gray-700 dark:text-gray-200">{{
                      title
                    }}</span>
                  </div>
                  <div
                    v-else
                    class="flex flex-row gap-x-2 dark:bg-sky-900 bg-sky-200 smoothen px-2 py-1 rounded-md no-underline"
                  >
                    <i
                      class="fa-solid fa-folder my-auto text-gray-700 dark:text-gray-200"
                    ></i
                    ><span class="my-auto text-gray-700 dark:text-gray-200">{{
                      title
                    }}</span>
                  </div>
                </div>
                <nuxt-link
                  v-else
                  :to="`?recipes=${url.slice(10)}`"
                  class="flex flex-row justify-between md:justify-start gap-x-2 md:bg-transparent dark:bg-gray-700 bg-gray-200 dark:bg-opacity-30 dark:hover:bg-gray-700 hover:bg-gray-300 smoothen md:px-2 md:py-1 px-4 py-2 rounded-md no-underline"
                >
                  <div class="flex flex-row gap-x-2">
                    <i
                      class="fa-solid fa-folder my-auto text-gray-700 dark:text-gray-200"
                    ></i
                    ><span class="my-auto text-gray-700 dark:text-gray-200">{{
                      title
                    }}</span>
                  </div>

                  <div class="md:hidden flex-row gap-x-2 flex">
                    <i
                      class="fa-solid fa-chevron-right my-auto text-gray-500 dark:text-gray-400"
                    ></i>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div
          class="h-full shrink-0 md:bg-gray-100 md:w-1/3 lg:w-1/4 w-full border-r md:p-4 p-6 border-gray-300 md:dark:bg-gray-800 dark:border-gray-700"
          :class="$route.query.card ? 'hidden md:block' : ''"
        >
          <div
            v-if="$route.query.recipes"
            class="flex flex-col gap-y-3 md:gap-y-2"
          >
            <div class="font-semibold lg:hidden">
              <button
                v-if="$route.query.recipes"
                class="flex flex-row gap-x-1 lg:hidden"
                @click="$router.push('/')"
              >
                <i
                  class="fa-solid fa-chevron-left my-auto dark:text-sky-300"
                ></i>
                <span class="my-auto dark:text-sky-300">Categories</span>
              </button>
            </div>
            <div>
              <p
                v-if="$route.query.recipes === 'complete-meals'"
                class="md:text-sm my-1 md:my-0 dark:text-gray-300 text-gray-800 md:ml-2 md:font-sans text-3xl font-bold md:font-normal md:dark:text-gray-400 md:text-gray-500"
              >
                Complete Meals
                <span
                  class="text-sm hidden md:inline-block dark:text-gray-400 text-gray-500"
                  >— {{ recipesCompleteMeals.length }}
                  {{ recipesCompleteMeals.length > 1 ? "items" : "item" }}</span
                >
              </p>

              <p
                v-else-if="$route.query.recipes === 'side-dishes'"
                class="md:text-sm my-1 md:my-0 dark:text-gray-300 text-gray-800 md:ml-2 md:font-sans text-3xl font-bold md:font-normal md:dark:text-gray-400 md:text-gray-500"
              >
                Side Dishes
                <span
                  class="text-sm hidden md:inline-block dark:text-gray-400 text-gray-500"
                  >— {{ recipesSideDishes.length }}
                  {{ recipesSideDishes.length > 1 ? "items" : "item" }}</span
                >
              </p>

              <p
                v-else-if="$route.query.recipes === 'sauces-and-dressings'"
                class="md:text-sm my-1 md:my-0 dark:text-gray-300 text-gray-800 md:ml-2 md:font-sans text-3xl font-bold md:font-normal md:dark:text-gray-400 md:text-gray-500"
              >
                Sauces and Dressings
                <span
                  class="text-sm hidden md:inline-block dark:text-gray-400 text-gray-500"
                  >— {{ recipesSideDishes.length }}
                  {{ recipesSideDishes.length > 1 ? "items" : "item" }}</span
                >
              </p>
            </div>
            <div class="flex flex-col gap-y-2">
              <div
                v-if="$route.query.recipes === 'side-dishes'"
                v-for="{ _path: slug, title, description } in recipesSideDishes"
              >
                <div
                  v-if="
                    $route.query.card ===
                    slug.replaceAll('/', '').replace('side-dishes', '')
                  "
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-2 py-1 rounded-lg dark:bg-sky-900 bg-sky-200 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap text-gray-700 dark:text-gray-100 font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-gray-600 dark:text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ description }}
                    </span>
                  </div>
                </div>
                <nuxt-link
                  v-else
                  :key="slug"
                  :to="`?recipes=side-dishes&card=${slug
                    .replaceAll('/', '')
                    .replace('side-dishes', '')}`"
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-4 py-2 md:px-2 md:py-1 group rounded-lg md:bg-transparent dark:bg-gray-700 bg-gray-200 dark:bg-opacity-30 dark:hover:bg-gray-700 hover:bg-gray-300 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-gray-500 dark:group-hover:text-gray-400 group-hover:text-gray-600 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ description }}
                    </span>
                  </div>
                </nuxt-link>
              </div>

              <div
                v-else-if="$route.query.recipes === 'complete-meals'"
                v-for="{
                  _path: slug,
                  title,
                  description,
                } in recipesCompleteMeals"
              >
                <div
                  v-if="
                    $route.query.card ===
                    slug.replaceAll('/', '').replace('complete-meals', '')
                  "
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-2 py-1 rounded-lg dark:bg-sky-900 bg-sky-200 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap text-gray-700 dark:text-gray-100 font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-gray-600 dark:text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ description }}
                    </span>
                  </div>
                </div>
                <nuxt-link
                  v-else
                  :key="slug"
                  :to="`?recipes=complete-meals&card=${slug
                    .replaceAll('/', '')
                    .replace('complete-meals', '')}`"
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-4 py-2 md:px-2 md:py-1 group rounded-lg md:bg-transparent dark:bg-gray-700 bg-gray-200 dark:bg-opacity-30 dark:hover:bg-gray-700 hover:bg-gray-300 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-gray-500 dark:group-hover:text-gray-400 group-hover:text-gray-600 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ description }}
                    </span>
                  </div>
                </nuxt-link>
              </div>

              <div
                v-else-if="$route.query.recipes === 'sauces-and-dressings'"
                v-for="{
                  _path: slug,
                  title,
                  description,
                } in recipesSaucesAndDressings"
              >
                <div
                  v-if="
                    $route.query.card ===
                    slug.replaceAll('/', '').replace('sauces-and-dressings', '')
                  "
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-2 py-1 rounded-lg dark:bg-sky-900 bg-sky-200 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap text-gray-700 dark:text-gray-100 font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-gray-600 dark:text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ description }}
                    </span>
                  </div>
                </div>
                <nuxt-link
                  v-else
                  :key="slug"
                  :to="`?recipes=sauces-and-dressings&card=${slug
                    .replaceAll('/', '')
                    .replace('sauces-and-dressings', '')}`"
                  class="w-full no-underline"
                >
                  <div
                    class="flex flex-col px-4 py-2 md:px-2 md:py-1 group rounded-lg md:bg-transparent dark:bg-gray-700 bg-gray-200 dark:bg-opacity-30 dark:hover:bg-gray-700 hover:bg-gray-300 smoothen"
                  >
                    <p
                      class="text-ellipsis overflow-hidden whitespace-nowrap font-semibold"
                    >
                      {{ title }}
                    </p>
                    <span
                      class="text-sm no-underline text-gray-500 dark:group-hover:text-gray-400 group-hover:text-gray-600 text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {{ description }}
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
            <p class="font-light my-auto">
              Click on any category on the left sidebar to select a recipe!
            </p>
          </div>
        </div>

        <div
          class="flex flex-row md:pt-0 pt-6 justify-center w-full overflow-y-auto"
          :class="$route.query.card ? '' : 'hidden md:flex'"
        >
          <div class="w-full">
            <div class="ml-6 font-semibold md:hidden">
              <button
                v-if="$route.query.card"
                class="flex flex-row gap-x-1"
                @click="
                  $router.push({ query: { recipes: $route.query.recipes } })
                "
              >
                <i
                  class="fa-solid fa-chevron-left my-auto dark:text-sky-300 text-sky-700"
                ></i>
                <span class="my-auto dark:text-sky-300 text-sky-700"
                  >Recipes</span
                >
              </button>
            </div>
            <div class="w-full">
              <ContentDoc
                :path="`/${$route.query.recipes}/${$route.query.card}`"
              >
                <template #not-found>
                  <div
                    v-if="$route.query.recipes"
                    class="lg:mt-12 mt-20 hidden md:flex flex-row gap-x-4 ml-8"
                  >
                    <i
                      class="fa-solid fa-arrow-left text-lg animate-bounce-l mt-[0.15rem] -ml-1"
                    ></i>
                    <p class="font-light my-auto">
                      Click on any recipe on the left sidebar to start reading!
                    </p>
                  </div></template
                >
                <template v-slot="{ doc }">
                  <div class="p-4 pb-0" v-if="doc.img">
                    <img
                      :src="doc.img"
                      class="justify-center rounded-lg w-screen aspect-[3/1] object-cover md:flex dark:text-gray-400 text-gray-600 text-sm"
                    />
                  </div>
                  <div class="md:p-8 p-6 pt-4 min-w-full">
                    <h1
                      class="font-bold text-3xl dark:text-gray-100 text-gray-900"
                    >
                      {{ doc.title }}
                    </h1>

                    <div v-if="doc.description" class="mt-2 flex gap-x-3">
                      <span
                        class="justify-center w-full dark:text-gray-400 text-gray-600 my-auto"
                        >{{ doc.description }}</span
                      >
                    </div>
                    <ContentRenderer
                      :value="doc"
                      class="prose mt-6 min-w-full marker:text-gray-600 dark:marker:text-gray-400 dark:prose-li:text-gray-300 dark:prose-p:text-gray-300 dark:prose-marker:text-gray-400 prose-li:text-gray-700 prose-p:text-gray-700 dark:prose-invert prose-h1:text-3xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-a:font-normal"
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const recipesCompleteMeals = await queryContent("/complete-meals").find();
const recipesSideDishes = await queryContent("/side-dishes").find();
const recipesSaucesAndDressings = await queryContent(
  "/sauces-and-dressings"
).find();

const recipesList = await queryContent("/_recipes").find();

function checkAgreed() {
  if (process.client && window.localStorage.getItem("agree") == "true") {
    return false;
  } else {
    return true;
  }
}
</script>

<style>
h4 > a {
  font-weight: 500 !important;
  text-decoration-line: none !important;
  color: rgb(17 24 39) !important;
}

@media (prefers-color-scheme: dark) {
  h4 > a {
    font-weight: 500 !important;
    text-decoration-line: none !important;
    color: rgb(243 244 246) !important;
  }
}
</style>
