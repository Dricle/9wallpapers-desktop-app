module.exports = {
    ssr: false,
    target: 'static',
    head: {
        title: '9wallpapers.com desktop application',
        meta: [{ charset: 'utf-8' }]
    },
    loading: false,
    plugins: [
        '~/plugins/globals',
        '~/plugins/filters'
    ],
    build: {
        babel: {
            plugins: [
                ["@babel/plugin-proposal-class-properties", { "loose": true }],
                ["@babel/plugin-proposal-private-methods", { "loose": true }],
                ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
            ]
        }
    },
    buildModules: ['@nuxtjs/tailwindcss'],
    modules: [
        '@nuxtjs/auth',
        '@nuxtjs/axios'
    ],
    axios: {
        baseURL: 'https://9wallpapers.com/api'
    },
    tailwindcss: {
        cssPath: '~/assets/css/app.css'
    },
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
}
