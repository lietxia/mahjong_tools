const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron/main');
const path = require('node:path');

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	win.loadFile('index.html');
}

ipcMain.handle('dark-mode:toggle', () => {
	nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';
	return nativeTheme.shouldUseDarkColors;
});

ipcMain.handle('dark-mode:system', () => {
	nativeTheme.themeSource = 'system';
});

app.whenReady().then(createWindow);

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});