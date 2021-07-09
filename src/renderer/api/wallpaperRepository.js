export default ({ app: { $axios } }) => ({

    liked () {
        return $axios.$get('/user/wallpapers')
    }

})
