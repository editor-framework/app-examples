'use strict';

const Editor = require('../../index');
const Electron = require('electron');

let shouldQuit = Electron.app.makeSingleInstance(() => {
  if ( Editor.Window.main ) {
    Editor.Window.main.focus();
  }
});

if ( shouldQuit ) {
  Electron.app.quit();
  return;
}

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init();

    cb ();
  },

  run () {
    Editor.run('app://index.html', {
      title: 'Dashboard',
      width: 800,
      height: 600,
      show: false,
      resizable: false,
    });

    Editor.log('Dashboard Ready!');
  },
});

Electron.ipcMain.on('dashboard:open', (event, name) => {
  Electron.app.relaunch({
    args: [ `./example-apps/dashboard/${name}`]
  });
  Electron.app.exit(0);
});
