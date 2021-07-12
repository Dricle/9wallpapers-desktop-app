<template>
    <button
        class="relative h-48 bg-center bg-cover"
        :style="{'background-image': 'url('+wallpaper.thumbnail_url+')'}"
        @click="setWallpaper(wallpaper)"
    />
</template>

<script>
import wallpaperSetter from '../mixins/wallpaperSetter'
export default {
    mixins: [wallpaperSetter],

    props: {
        wallpaper: {
            type: Object,
            required: true
        }
    }
}
</script>
