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
    let main = new Editor.Window('main', {
      title:     'Custom Undo',
      width:     400,
      height:    600,
      minWidth:  400,
      minHeight: 300,
      show:      false,
      resizable: true,
    });
    main.restorePositionAndSize();
    main.load('app://index.html');
    main.show();

    //
    Editor.Window.main = main;
    main.focus();
  },
});
