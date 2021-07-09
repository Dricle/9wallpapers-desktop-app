module.exports = {
    ssr: false,
    target: 'static',
    head: {
        title: '9wallpapers.com desktop application',
        meta: [{ charset: 'utf-8' }]
    },
    loading: false,
    plugins: [

    ],
    buildModules: [

    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/auth',
        '@nuxtjs/axios'
    ],
    axios: {
        baseURL: 'https://9wallpapers.com/api'
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: 'authenticate', method: 'post', propertyName: 'access_token' },
                    user: { url: 'me', method: 'get', propertyName: 'data' },
                    logout: { url: '/logout', method: 'post' }
                }
            }
        }
    }
}
