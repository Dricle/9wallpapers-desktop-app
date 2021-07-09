<template>
    <div class="grid grid-cols-4 gap-4">
        <wallpaper
            v-for="wallpaper in wallpapers"
            :key="wallpaper.id"
            :wallpaper="wallpaper"
        />
    </div>
</template>

<script>
export default {
    middleware: 'auth',

    data () {
        return {
            wallpapers: []
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
