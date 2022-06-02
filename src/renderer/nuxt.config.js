module.exports = {
    ssr: false,
    target: 'static',
    head: {
        title: '9wallpapers-desktop',
        meta: [{ charset: "utf-8" }]
    },
    loading: false,
    plugins: [
        '~/plugins/globals',
        '~/plugins/filters'
    ],
    css: [
        '@/assets/css/app.css'
    ],
    buildModules: [
        '@nuxt/postcss8'
    ],
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {}
            }
        }
    },
    axios: {
        baseURL: 'https://9wallpapers.com/api'
    },
    modules: [
        '@nuxtjs/auth',
        '@nuxtjs/axios'
    ],
    auth: {
        plugins: [
            '~/plugins/repository'
        ],
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
};
