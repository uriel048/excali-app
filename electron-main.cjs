const { app, BrowserWindow, dialog, ipcMain, shell } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    frame: false,
    transparent: false,
    webPreferences: {
      preload: path.join(__dirname, "electron-preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true,
      allowRunningInsecureContent: false
    }
  });

  win.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Failed to load:', errorCode, errorDescription);
  });

  const indexPath = path.join(__dirname, "dist", "index.html");

  if (fs.existsSync(indexPath)) {
    win.loadFile(indexPath).catch(err => {
      console.error("Load error:", err);
    });
  } else {
    console.error("File not found: " + indexPath);
    dialog.showErrorBox("Error", `File not found: ${indexPath}\n\nRun 'npm run build' before starting the app.`);
  }
}

app.on("ready", createWindow);

ipcMain.handle("save-file", async (_, data) => {
  const { filePath } = await dialog.showSaveDialog({
    filters: [{ name: "Excalidraw", extensions: ["excalidraw"] }]
  });
  if (!filePath) return;
  fs.writeFileSync(filePath, data, "utf8");
  return filePath;
});

ipcMain.handle("open-file", async () => {
  const { filePaths } = await dialog.showOpenDialog({
    filters: [{ name: "Excalidraw", extensions: ["excalidraw"] }],
    properties: ["openFile"]
  });
  if (!filePaths || !filePaths.length) return null;
  return fs.readFileSync(filePaths[0], "utf8");
});

ipcMain.handle("open-external", async (_, url) => {
  await shell.openExternal(url);
});

ipcMain.on("window-controls", (event, action) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) {
    if (action === "close") win.close();
    if (action === "minimize") win.minimize();
    if (action === "maximize") {
      if (win.isMaximized()) win.unmaximize();
      else win.maximize();
    }
  }
});
