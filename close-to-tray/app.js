'use strict';

const Electron = require('electron');
const Editor = require('../../index');

let _tray;

Editor.App.extend({
  init ( opts, cb ) {
    _tray = new Electron.Tray(Editor.url('app://tray.png'));
    _tray.setToolTip('Cocos Creator');
    _tray.on('click', () => {
      if ( Editor.Window.main ) {
        Editor.Window.main.show();
      }
    });

    Electron.app.on('activate', () => {
      if ( Editor.Window.main ) {
        Editor.Window.main.show();
      }
    });

    Editor.init({
      'main-menu': () => {
        return [
          // App
          {
            label: 'App',
            submenu: [
              {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                role: 'quit'
              },
            ]
          },

          // Window
          {
            label: 'Window',
            id: 'window',
            role: 'window',
            submenu: [
              {
                label: 'Close',
                accelerator: 'CmdOrCtrl+W',
                role: 'close',
              },
            ]
          }

        ];
      }
    });

    if ( cb ) {
      cb ();
    }
  },

  run () {
    // create main window
    Editor.run('app://index.html', {
      title: 'Editor Framework',
      width: 900,
      height: 700,
      minWidth: 900,
      minHeight: 700,
      show: false,
      resizable: true,
    });

    let mainWin = Editor.Window.main;
    mainWin.nativeWin.on('close', event => {
      event.preventDefault();
      mainWin.closeDevTools();
      mainWin.hide();
    });
  },
});
