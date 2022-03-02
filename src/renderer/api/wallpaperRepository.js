export default ({ app: { $axios } }) => ({

    liked (params = {}) {
        return $axios.$get('/user/wallpapers', { params })
    },

    random (params = {}) {
        return $axios.$get('/user/wallpapers/random', {params})
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
