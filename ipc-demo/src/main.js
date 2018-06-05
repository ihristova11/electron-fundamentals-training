const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        heigh: 300, 
        width: 300
    })

    mainWindow.on('ready', _ => {
        console.log('çlosed');
        mainWindow = null
    })
})