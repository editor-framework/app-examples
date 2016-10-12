'use strict';

const Editor = require('../../../index');
const Electron = require('electron');

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init();

    cb ();
  },

  run () {
    Editor.run('app://index.html', {
      title: 'Scene Editor',
      width: 400,
      height: 300,
      show: false,
      resizable: false,
    });

    Electron.app.on('quit', () => {
      Electron.app.relaunch({
        args: [`./example-apps/dashboard/`]
      });
    });

    Editor.log('Scene Editor Ready!');
  },
});
