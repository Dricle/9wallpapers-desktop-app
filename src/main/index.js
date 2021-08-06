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
    const storagePath = 'tmp'

    fs.writeFileSync(storagePath + '/' + fileName, await download(downloadUrl, storagePath))

    await wallpaper.set(storagePath + '/' + fileName)

    fs.readdir(storagePath, (err, files) => {
        if (err) { throw err }
        console.log(files)
        for (const file of files) {
            if (file !== fileName) {
                console.log(storagePath + '/' + file, fileName)
                fs.unlink(storagePath + '/' + file, (error) => {
                    console.log(error)
                    if (error) { throw error }
                })
            }
        }
    })
})

// Load here all startup windows
require('./mainWindow')
