const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  controlWindow: (action) => ipcRenderer.send("window-controls", action),
  openExternal: (url) => ipcRenderer.invoke("open-external", url)
});