const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 850,
    autoHideMenuBar: true,
    title: 'gngs-sound-machine',
    webPreferences: { autoplayPolicy: 'no-user-gesture-required' }
  });
  win.loadFile(path.join(__dirname, 'GNGS-SOUND-MACHINE.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());