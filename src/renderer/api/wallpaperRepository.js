export default ({ app: { $axios } }) => ({

    liked () {
        return $axios.$get('/user/wallpapers')
    },

    random () {
        return $axios.$get('/user/wallpapers/random')
    },

    downloadUrl (wallpaperId) {
        return $axios.defaults.baseURL + '/wallpapers/' + wallpaperId + '/fullview'
    }

})
