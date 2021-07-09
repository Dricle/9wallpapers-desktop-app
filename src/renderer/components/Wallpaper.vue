<template>
    <div>
        hello
    </div>
</template>

<script>
const wallpaper = require('wallpaper')
const download = require('download')
export default {
    methods: {
        async setWallpaper () {
            await download('https://9wallpapers.com/cdn/wallpapers/XRmddQQeRqE4bmQ5rHWZOBs6gBOFoNPHH30PRPnJ.jpg', 'dist')
            await wallpaper.set('dist/XRmddQQeRqE4bmQ5rHWZOBs6gBOFoNPHH30PRPnJ.jpg')
        }
    }
}
</script>
