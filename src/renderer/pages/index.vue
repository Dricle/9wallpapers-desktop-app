<template>
    <div>
        <section-heading>
            Your collection
            <div slot="header-right" class="hidden ml-6 bg-gray-600 p-0.5 rounded-lg items-center sm:flex">
                <button
                    class="p-1.5 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    :class="{
                        'bg-gray-200 shadow-sm': view === 'list',
                        'hover:shadow-sm hover:bg-white': view !== 'list',
                    }"
                    @click="view = 'list'"
                >
                    <svg
                        class="w-5 h-5"
                        x-description="Heroicon name: solid/view-list"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Use list view</span>
                </button>
                <button
                    class="ml-0.5 p-1.5 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    :class="{
                        'bg-gray-200 shadow-sm': view === 'grid',
                        'hover:shadow-sm hover:bg-white': view !== 'grid',
                    }"
                    @click="view = 'grid'"
                >
                    <svg
                        class="w-5 h-5"
                        x-description="Heroicon name: solid/view-grid"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span class="sr-only">Use grid view</span>
                </button>
            </div>
        </section-heading>

        <div v-if="view === 'grid'" class="grid grid-cols-4 gap-4">
            <wallpaper-square
                v-for="wallpaper in wallpapers"
                :key="'grid'+wallpaper.id"
                :wallpaper="wallpaper"
            />
        </div>
        <div v-if="view === 'list'" class="grid grid-cols-1 gap-4">
            <wallpaper-detail
                v-for="wallpaper in wallpapers"
                :key="'list'+wallpaper.id"
                :wallpaper="wallpaper"
            />
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',

    data () {
        return {
            wallpapers: [],
            view: 'grid'
        }
    },

    created () {
        this.getWallpapers()
    },

    methods: {
        getWallpapers () {
            this.$wallpaperRepository.liked()
                .then((response) => {
                    this.wallpapers = response.data
                })
        }
    }
}
</script>
