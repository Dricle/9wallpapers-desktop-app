export default ({ app: { $axios } }) => ({

    liked () {
        return $axios.$get('/user/wallpapers')
    },

    random () {
        return $axios.$get('/user/wallpapers/random')
    },

    like (id) {
        return $axios.$post(`/user/wallpapers/${id}/like`)
    },

    unlike (id) {
        return $axios.$post(`/user/wallpapers/${id}/unlike`)
    },

    downloadUrl (wallpaperId) {
        return $axios.defaults.baseURL + '/wallpapers/' + wallpaperId + '/fullview'
    }

})
