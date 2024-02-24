<template>
  <main class="bg-gradient-to-b from-[#0f1325] to-[#000000]">
    <AppHeader />
    <div class="flex flex-col gap-4 md:gap-6 text-gray-300 font-lg p-4 md:p-8">
      <div class="flex flex-col gap-4 rounded-3xl px-4 md:px-8 py-2">
        <h1 class="font-semibold text-xl md:text-5xl text-gray-200 font-sans">
          {{ post.title }}
        </h1>

        <p class="font-medium text-medium md:text-lg text-gray-600">{{ post.date }}</p>
      </div>

      <div class="flex flex-col gap-6 rounded-3xl px-6 md:px-12 text-gray-400" id="content">
        
      </div>
    </div>
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';

import type { BlogPost } from '~/server/types';

import {marked} from "marked"


const route = useRoute()
const id = route.params.id


const post: BlogPost = await $fetch("/api/blog?id=" + id)

marked.use(
  {
    renderer: {
      link: (href: string, title: string | null | undefined, text: string) => {

			return `<a class="text-blue-200 underline" href="${href}" target="_blank" rel="noopener noreferrer">${ title? title : text }</a>`
		},
		strong: (text: string) => {
			return `<span class="font-medium text-gray-300 text-lg md:text-xl">${text}</span>`
		},
        
		heading(text: string, level: number, raw: string) {
			return `<h1 class="text-3xl md:text-${ 4 - level }xl font-bold text-gray-300 mb-2 mt-4">${raw}</h1>`
		},
    paragraph(text: string) {
      return `<p class="text-xl md:text-2xl py-1 font-light text-gray-400">${text}</p>`
    },
    text(text: string) {
      return `<span class="text-xl md:text-2xl">${text}</span>`
    },
  }
  }
)


onMounted(async () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
        contentElement.innerHTML = await marked.parse(await $fetch(`/blogs/${post.id}.md`))
    }
})

</script>

