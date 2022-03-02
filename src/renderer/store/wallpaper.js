import { ipcRenderer } from 'electron'

export const state = () => ({
    wallpaper: undefined,
    settings: {
        interval: 10,
        allow_unliked: false,
        allow_layout_mobile: true,
    },
    timeout: undefined,
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
    SET_TIMEOUT(state, timeout) {
        state.timeout = timeout
    }
}

export const actions = {

    runWallpaperChanger({ getters, dispatch, commit }) {
        this.$wallpaperRepository.random(getters.getSettings)
            .then((response) => {
                commit('SET_WALLPAPER', response.data)
                dispatch('setWallpaper', response.data)
            })

        const timeout = setTimeout(() => {
            dispatch('runWallpaperChanger')
        }, 1000 * 60 * getters.getSettings.interval) // 10 minutes
        commit('SET_TIMEOUT', timeout)
    },

    setWallpaper({ commit, dispatch, state, getters }, wallpaperObject) {
        clearTimeout(state.timeout)
        const timeout = setTimeout(() => {
            dispatch('runWallpaperChanger')
        }, 1000 * 60 * getters.getSettings.interval) // 10 minutes
        commit('SET_TIMEOUT', timeout)

        commit('SET_WALLPAPER', wallpaperObject)

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
