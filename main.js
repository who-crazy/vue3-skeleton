 
import { app, BrowserWindow, protocol  } from 'electron';
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = true;
// import path from 'node:path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.setAppUserModelId('数据包'); // 设置应用名称
let appIcon = 'public/favicon.ico'; // Windows图标路径

function createWindow() {
    process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webSecurity: false
            // preload: path.join(__dirname, 'preload.js')
        },
        // icon: appIcon
    })
    console.log(win)
    // Menu.setApplicationMenu(null); // 去掉默认菜单
    // win.loadFile('dist/index.html') // 加载 index.html
    win.loadURL("http://localhost:5173/");
    // win.webContents.openDevTools();// 打开开发工具
}
 
// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
    createWindow()
 
    // protocol.registerFileProtocol('atom', (request, callback) => {
    //     const url = request.url.substr(7)
    //     console.log("electronAppReady-------------------------============>atom url", decodeURI(path.normalize(url)))
    //     callback(decodeURI(path.normalize(url)))
    // })

    app.on('activate', () => {
        // 在 macOS 系统内, 如果没有已开启的应用窗口
        // 点击托盘图标时通常会重新创建一个新窗口
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
 
// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态, 
// 直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
 
// 在当前文件中你可以引入所有的主进程代码
// 也可以拆分成几个文件，然后用 require 导入。
