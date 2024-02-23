<template>
    <main class="bg-[#0b1026]">
        <AppHeader />

        <div class="flex flex-col items-center justify-center gap-12 p-8 py-12 md:p-32">

            <p class="text-xl md:text-3xl font-semibold text-gray-200 text-center">
                Choose the version that best suits your needs.
            </p>
<div>
            <p class="text-lg md:text-xl font-light text-gray-200 text-center">
                - minApi21 (Android 5 and above): This version doesn't support producing AABs, kotlin, R8/D8 and is limited to compiling Java 1.7 code.
</p>
            <p class="text-md md:text-xl font-light text-gray-200 text-center">
                - minApi26 (Android 8 and above ONLY): This version supports producing AABs, kotlin, R8/D8 and can compile Java 1.8, 1.9, 10, and 11 code.
            </p>
</div>
            <div class="flex flex-col items-center justify-center gap-12">
            <div class="flex flex-col md:flex-row items-center justify-center gap-12">
                <a class="rounded-3xl p-6 border border-gray-600 md:border-0 md:bg-gradient-to-r from-[#232b4c] to-[#121521]" href="https://www.mediafire.com/file/989up6hj5i89kak/Sketchware_Pro_6.3.0_fix1.apk/file">
                    <h1 class="text-3xl md:text-5xl font-semibold text-white pb-4">Release Build</h1>
                    <p class="text-white font-light text-lg md:text-xl p-2">
                        Download the latest release of the application. This is the most stable version of the application.
                    </p>
                </a>
                <a class="rounded-3xl p-6 border border-gray-600 md:border-0 md:bg-gradient-to-l from-[#232b4c] to-[#00020c]" href="https://github.com/Sketchware-Pro/Sketchware-Pro/releases/tag/v6.4.0-rc05">
                    <h1 class="text-3xl md:text-5xl font-semibold text-white pb-4">Test Build</h1>
                    <p class="text-white font-light text-xl p-2">
                        Download the latest test build of the application. This version may contain bugs and is not recommended for production use.
                    </p>
                </a>
            </div>
            <a class="rounded-3xl p-6 md:p-16 border border-gray-600 md:border-0 md:bg-gradient-to-t from-[#232b4c] to-[#000000]" href=" https://nightly.link/Sketchware-Pro/Sketchware-Pro/workflows/android/main?status=completed">
                <h1 class="text-3xl md:text-5xl font-semibold text-white pb-4">Nightly Build</h1>
                <p class="text-white font-light text-xl p-2">
                    Download the latest nightly build of the application. This version is built for every commit and is highly unstable.
                </p>
            </a>
            </div>
        </div>

        <AppFooter />
    </main>
</template>

<script setup lang="ts">

import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

</script>

<style>
</style>