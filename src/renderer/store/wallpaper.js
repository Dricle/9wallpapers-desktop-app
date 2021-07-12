const fs = require('fs')
const path = require('path')
const wallpaper = require('wallpaper')
const download = require('download')

const storagePath = 'dist/tmp'

export const state = () => ({
    wallpapers: [],
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
        }, 1000 * 60 * 15) // 15 minutes
    },

    async setWallpaper ({ dispatch }, wallpaperObject) {
        const filename = wallpaperObject.url.substring(wallpaperObject.url.lastIndexOf('/') + 1)

        const downloadUrl = this.$wallpaperRepository.downloadUrl(wallpaperObject.id)

        fs.writeFileSync(storagePath + '/' + filename, await download(downloadUrl, storagePath))
        await wallpaper.set(storagePath + '/' + filename)

        dispatch('cleanDir', filename)
    },

    cleanDir ({ dispatch }, except) {
        fs.readdir(storagePath, (err, files) => {
            if (err) { throw err }

            for (const file of files) {
                if (file !== except) {
                    fs.unlink(path.join(storagePath, file), (error) => {
                        if (error) { throw error }
                    })
                }
            }
        })
    }
}
