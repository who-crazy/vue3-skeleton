// 所有的 Node.js API接口 都可以在 preload 进程中被调用.
// 它拥有与Chrome扩展一样的沙盒。
// preload.js

// import { contextBridge, ipcRenderer } from 'electron';
 
// contextBridge.exposeInMainWorld('api', {
//   loadVideo: (path) => ipcRenderer.invoke('load-video', path)
// });

// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//       const element = document.getElementById(selector)
//       if (element) element.innerText = text
//   }

//   for (const type of ['chrome', 'node', 'electron']) {
//       replaceText(`${type}-version`, process.versions[type])
//   }
// })