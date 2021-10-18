const { app, BrowserWindow } = require('electron')

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

function createWindow () {
  try{
    for (const dependency of ['chrome', 'node', 'electron']) {
      console.log(`${dependency}-version : `, process.versions[dependency]);
    }
    const win = new BrowserWindow({
      width: 1100,
      height: 900,
    })
    win.loadFile('./frontend/views/index.html')
  } catch(error){
    console.log(error)
  }
}

// Cette méthode sera appelée quand Electron aura fini de s'initialiser
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    // Sur macOS il est d'usage de recréer une fenêtre dans l'application quand
    // l'icône du dock est cliquée et qu'il n'y a pas d'autre fenêtre ouverte.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

// Quitter quand toutes les fenêtres sont fermées, sauf sur macOS.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

