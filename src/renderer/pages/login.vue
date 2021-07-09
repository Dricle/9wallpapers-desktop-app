<template>
  <div class="e-nuxt-container">
    <div class="e-nuxt-content">
      <button @click="setWallpaper">download</button>
    </div>
  </div>
</template>

<script>
const wallpaper = require('wallpaper')
const download = require('download')
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),

  methods: {
    async setWallpaper () {
      await download('https://9wallpapers.com/cdn/wallpapers/XRmddQQeRqE4bmQ5rHWZOBs6gBOFoNPHH30PRPnJ.jpg', 'dist')
      await wallpaper.set('dist/XRmddQQeRqE4bmQ5rHWZOBs6gBOFoNPHH30PRPnJ.jpg')
    }
  }
}
</script>
