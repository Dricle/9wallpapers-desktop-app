<template>
    <div class="flex space-x-6">
        <div class="flex-1 space-y-6">
            <img :src="wallpaper.url" alt="Wallpaper image">
        </div>
        <aside class="p-8 bg-gray-800 w-80">
            <div class="space-y-8">
                <div>
                    <h3 class="font-medium text-gray-100">
                        Information
                    </h3>
                    <dl class="mt-2 border-t border-b border-gray-400 divide-y divide-gray-400">
                        <div class="flex justify-between py-3 text-sm font-medium">
                            <dt class="text-gray-300">
                                Uploaded by
                            </dt>
                            <dd class="text-gray-400">
                                {{ wallpaper.user.name }}
                            </dd>
                        </div>

                        <div class="flex justify-between py-3 text-sm font-medium">
                            <dt class="text-gray-300">
                                Created
                            </dt>
                            <dd class="text-gray-400">
                                {{ wallpaper.created_at | format('DD MMM YYYY') }}
                            </dd>
                        </div>

                        <div class="flex justify-between py-3 text-sm font-medium">
                            <dt class="text-gray-300">
                                Dimensions
                            </dt>
                            <dd class="text-gray-400">
                                {{ wallpaper.file_dimension_width }} x {{ wallpaper.file_dimension_height }}
                            </dd>
                        </div>

                        <div class="flex justify-between py-3 text-sm font-medium">
                            <dt class="text-gray-300">
                                Size
                            </dt>
                            <dd class="text-gray-400">
                                {{ wallpaper.file_size }}
                            </dd>
                        </div>

                        <div class="flex justify-between py-3 text-sm font-medium">
                            <dt class="text-gray-300">
                                Total Download
                            </dt>
                            <dd class="text-gray-400">
                                {{ wallpaper.download_count }}
                            </dd>
                        </div>
                    </dl>
                </div>

                <div class="flex items-center space-x-2">
                    <like-button :wallpaper="wallpaper"></like-button>
                    <button @click="openInBrowser" class="px-3 py-2 text-center text-white bg-transparent border border-indigo-600 rounded-md hover:bg-indigo-900 ring-1 ring-transparent">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </button>
                    <button
                        class="block w-full px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="setWallpaper(wallpaper)"
                    >
                        Set as wallpaper
                    </button>
                </div>

                <ul class="mt-4 leading-8">
                    <li v-for="tag in wallpaper.tags" :key="tag.id" class="inline">
                        <span class="relative inline-flex items-center bg-gray-600 border border-gray-900 rounded-full ">
                            <span class="px-3 py-0.5">
                                <div class="text-sm font-medium text-white">
                                    {{ tag.name }}
                                </div>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>
import wallpaperSetter from '../mixins/wallpaperSetter'
import {shell} from 'electron'

export default {
    mixins: [wallpaperSetter],

    props: {
        wallpaper: {
            type: Object,
            required: true
        }
    },

    methods: {
        openInBrowser() {
            shell.openExternal("https://9wallpapers.com/w/" + this.wallpaper.id)
        }
    }
}
</script>
