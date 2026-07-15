const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('electronAPI', {
  openClientWindow: () => ipcRenderer.send('open-client-window')
})
