'use strict';

const Editor = require('../../index');

Editor.App.extend({
  init ( opts, cb ) {
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

              {
                label: 'Undo',
                accelerator: 'CmdOrCtrl+Z',
                click () {
                  Editor.log('Undo');
                }
              },

              {
                label: 'Redo',
                accelerator: 'Shift+CmdOrCtrl+Z',
                click () {
                  Editor.log('Redo');
                }
              },
            ]
          }
        ];
      }
    });

    cb ();
  },

  run () {
    Editor.run('app://index.html', {
      title:     'Custom Undo',
      width:     400,
      height:    600,
      minWidth:  400,
      minHeight: 300,
      show:      false,
      resizable: true,
    });

    Editor.Window.main.nativeWin.webContents.on('before-input-event', (event, input) => {
      // NOTE: uncomment this to make the undo/redo work in Windows platform
      // event.preventDefault();
      // console.log(input);
    });
  },
});
