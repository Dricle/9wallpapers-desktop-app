import wallpaperRepository from '~/api/wallpaperRepository'

export default (app, inject) => {
    inject('wallpaperRepository', wallpaperRepository(app))
}
