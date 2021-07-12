const fs = require('fs')
const path = require('path')
const wallpaper = require('wallpaper')
const download = require('download')

const storagePath = 'dist/tmp'

export default {
    methods: {
        async setWallpaper (wallpaperObject) {
            const filename = wallpaperObject.url.substring(wallpaperObject.url.lastIndexOf('/') + 1)

            const downloadUrl = this.$wallpaperRepository.downloadUrl(wallpaperObject.id)

            fs.writeFileSync(storagePath + '/' + filename, await download(downloadUrl, storagePath))
            await wallpaper.set(storagePath + '/' + filename)

            this.cleanDir(filename)
        },

        cleanDir (except) {
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
}
