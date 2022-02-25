<template>
    <div>
        <app-navigation />
        <div class="p-10">
            <nuxt />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions({
            runWallpaperChanger: 'wallpaper/runWallpaperChanger'
        }),
    },

    created() {
        this.runWallpaperChanger()
    }
}
</script>
