const electron = require('electron')
const path = require('path')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const Tray = electron.Tray

app.on('ready', _ => {
  new BrowserWindow()    
  const tray = new Tray(path.join('src', 'icon.png'))
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Wow',
      click: _ => console.log('wow')
    },
    {
      label: 'Awesome',
      click: _ => console.log('awesome')
    }
  ])
  tray.setToolTip('Woweeee')
  tray.setContextMenu(contextMenu)
})
