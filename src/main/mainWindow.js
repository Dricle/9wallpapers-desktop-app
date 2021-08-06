import BrowserWinHandler from './BrowserWinHandler'

const winHandler = new BrowserWinHandler({
    height: 600,
    width: 1000,
    enableRemoteModule: true
})

winHandler.onCreated((_browserWindow) => {
    winHandler.loadPage('/')
})

export default winHandler
