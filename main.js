const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 750,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#0e0e0e',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: require('path').join(__dirname, 'preload.js')
    },
    title: 'JoshRCutz'
  })
  win.loadFile('index.html')
}

function createClientWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 780,
    minWidth: 380,
    minHeight: 600,
    backgroundColor: '#0e0e0e',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    title: 'JoshRCutz — Client View'
  })
  win.loadFile('client.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// Listen for client window open request from renderer
const { ipcMain } = require('electron')
ipcMain.on('open-client-window', () => createClientWindow())
