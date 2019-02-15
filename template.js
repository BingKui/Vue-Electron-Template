// electron 入口文件
import {
    app,
    BrowserWindow
} from 'electron';

const { port, host } = require('./config').server;

let mainWindow;
const isDev = process.env.ENV === 'dev';
const winURL = isDev ? `http://${host}:${port}` : `file://${__dirname}/dist/index.html`;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 700,
        useContentSize: false, // 不允许修改大小
        transparent: false, // 透明
        frame: true, // 不使用框架
        // show: false, // 禁止显示
        // titleBarStyle: 'hidden',
        backgroundColor: 'none',
        webPreferences: {
            scrollBounce: true,
        },
    });

    mainWindow.loadURL(winURL);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
