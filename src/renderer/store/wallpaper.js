import { ipcRenderer } from 'electron'

export const state = () => ({
    wallpaper: undefined,
    settings: {
        interval: 10,
        allow_unliked: false,
        allow_layout_mobile: true,
    }
})

export const getters = {
    getWallpaper: state => state.wallpaper,
    getSettings: state => state.settings
}

export const mutations = {
    SET_WALLPAPER(state, wallpaper) {
        state.wallpaper = wallpaper
    },
    SET_SETTINGS(state, settings) {
        state.settings = settings
    },
    SET_SETTING(state, {key, value}) {
        state.settings[key] = value
    },
}

export const actions = {

    runWallpaperChanger({ getters, dispatch, commit }) {
        this.$wallpaperRepository.random(getters.getSettings)
            .then((response) => {
                commit('SET_WALLPAPER', response.data)
                dispatch('setWallpaper', response.data)
            })

        const interval = getters.getSettings.interval

        setTimeout(() => {
            dispatch('runWallpaperChanger')
        }, 1000 * 60 * interval) // 10 minutes
    },

    setWallpaper ({ dispatch }, wallpaperObject) {
        const fileName = wallpaperObject.url.substring(wallpaperObject.url.lastIndexOf('/') + 1)

        const downloadUrl = this.$wallpaperRepository.downloadUrl(wallpaperObject.id)

        ipcRenderer.send('set-wallpaper', {
            downloadUrl,
            fileName
        })
    },

    setSettings ({ commit }, settings) {
        commit('SET_SETTINGS', settings)
    },
    setSetting({ commit }, {key, value}) {
        commit('SET_SETTING', { key, value })
    }
}
