import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions({
            setWallpaper: 'wallpaper/setWallpaper'
        })
    }
}
