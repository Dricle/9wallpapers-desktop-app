import { app, ipcMain } from 'electron'
const fs = require('fs')
const wallpaper = require('wallpaper')
const download = require('download')

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') { app.quit() }
})

ipcMain.on('set-wallpaper', async function (e, { downloadUrl, fileName }) {
    const storagePath = 'tmp/9wpp'

    if (!fs.existsSync(storagePath)) {
        fs.mkdirSync(storagePath, { recursive: true });
    }

    fs.writeFileSync(storagePath + '/' + fileName, await download(downloadUrl, storagePath))

    try {
        console.log('===========')
        console.log('TRY SET WPP')
        console.log('===========')
        await wallpaper.set(storagePath + '/' + fileName)
    } catch (error) {
        console.error(error)
    }


    fs.readdir(storagePath, (err, files) => {
        if (err) { throw err }

        for (const file of files) {
            if (file !== fileName) {
                fs.unlink(storagePath + '/' + file, (error) => {
                    if (error) { throw error }
                })
            }
        }
    })
})

// Load here all startup windows
require('./mainWindow')
