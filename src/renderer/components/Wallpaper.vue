<template>
    <button @click="setWallpaper">
        <img :src="wallpaper.thumbnail_url" alt="wallpaper">
    </button>
</template>

<script>
const wallpaper = require('wallpaper')
const download = require('download')
export default {
    props: {
        wallpaper: {
            type: Object,
            required: true
        }
    },
    methods: {
        async setWallpaper () {
            const filename = this.wallpaper.url.substring(this.wallpaper.url.lastIndexOf('/') + 1)

            await download(this.wallpaper.url, 'dist')
            await wallpaper.set('dist/' + filename)
        }
    }
}
</script>
