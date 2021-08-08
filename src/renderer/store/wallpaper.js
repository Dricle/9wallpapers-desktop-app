import { ipcRenderer } from 'electron'

export const state = () => ({
    wallpaper: undefined
})

export const actions = {
    runWallpaperChanger ({ dispatch }) {
        this.$wallpaperRepository.random()
            .then((response) => {
                dispatch('setWallpaper', response.data)
            })

        setTimeout(() => {
            dispatch('runWallpaperChanger')
        }, 1000 * 60 * 10) // 10 minutes
    },

    setWallpaper ({ dispatch }, wallpaperObject) {
        const fileName = wallpaperObject.url.substring(wallpaperObject.url.lastIndexOf('/') + 1)

        const downloadUrl = this.$wallpaperRepository.downloadUrl(wallpaperObject.id)

        ipcRenderer.send('set-wallpaper', {
            downloadUrl,
            fileName
        })
    }
}
