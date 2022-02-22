<template>
    <div>
        <wallpaper-detail :wallpaper="wallpaper"></wallpaper-detail>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters({
            wallpaper: 'wallpaper/getWallpaper'
        })
    },
    created() {
        if (!this.wallpaper) {
            this.$router.push('/')
        }
    }
}
</script>
