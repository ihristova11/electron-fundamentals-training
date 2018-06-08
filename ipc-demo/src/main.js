const electron = require('electron')

const countdown = require('./countdown')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

let win

app.on('ready', _ => {
    win = new BrowserWindow({
      height: 400,
      width: 400
    })

    win.loadURL(`file://${__dirname}/countdown.html`)
    win.on('closed', _ => {
      win = null
    })
  })

ipc.on('countdown-start', _ => {
  console.log('starting!')
    
  countdown(count => {
    console.log("count", count)
      win.webContents.send('countdown', count)
    })
  })
