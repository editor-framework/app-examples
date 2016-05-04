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
                click: () => {
                  Editor.Window.main.forceClose();
                }
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
    let mainWin = new Editor.Window('main', {
      title: 'Editor Framework',
      width: 900,
      height: 700,
      minWidth: 900,
      minHeight: 700,
      show: false,
      resizable: true,
    });
    Editor.Window.main = mainWin;

    mainWin.nativeWin.on('close', event => {
      event.preventDefault();
      mainWin.closeDevTools();
      mainWin.hide();
    });

    // restore window size and position
    mainWin.restorePositionAndSize();

    // load and show main window
    mainWin.show();

    // page-level test case
    mainWin.load( 'app://index.html' );

    // open dev tools if needed
    if ( Editor.argv.showDevtools ) {
      // NOTE: open dev-tools before did-finish-load will make it insert an unused <style> in page-level
      mainWin.nativeWin.webContents.once('did-finish-load', function () {
        mainWin.openDevTools();
      });
    }
    mainWin.focus();
  },
});
