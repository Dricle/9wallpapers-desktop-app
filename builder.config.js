const ICONS_DIR = 'build/icons/'

const windowsOS = {
    win: {
        icon: ICONS_DIR + 'win-icon.ico',
        publisherName: '9wallpapers.com',
        target: 'nsis'
    },

    nsis: {
        differentialPackage: true
    }
}

const linuxOS = {
    linux: {
        icon: ICONS_DIR,
        target: 'deb'
    }
}

const macOS = {
    mac: {
        target: 'dmg',
        icon: ICONS_DIR + 'con.icns'
    },
    dmg: {
        contents: [
            {
                x: 410,
                y: 150,
                type: 'link',
                path: '/Applications'
            },
            {
                x: 130,
                y: 150,
                type: 'file'
            }
        ]
    }
}

module.exports = {
    productName: '9wallpapers-desktop',
    appId: 'com.9wallpapers.desktop',
    artifactName: '9wallpapers-app-${version}.${ext}',
    directories: {
        output: 'build'
    },
    // default files: https://www.electron.build/configuration/contents
    files: [
        'package.json',
        {
            from: 'dist/main/',
            to: 'dist/main/'
        },
        {
            from: 'dist/renderer',
            to: 'dist/renderer/'
        }
    ],
    extraResources: [
        {
            from: 'src/extraResources/',
            to: ''
        },
        {
            from: 'node_modules/wallpaper/source/',
            to: 'app.asar.unpacked/dist/main'
        }
    ],
    ...windowsOS,
    ...linuxOS,
    ...macOS
}
