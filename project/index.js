const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  // Créer la fenêtre de navigation.
  try{
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
      preload: path.join(__dirname, './preload.js')
      }
    })
    win.loadFile('./views/index.html')
  }
  catch(e){
    console.log(e)
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

//Quitter quand toutes les fenêtres sont fermées, sauf sur macOS.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

