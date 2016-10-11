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
      title: 'Particle Editor',
      width: 400,
      height: 300,
      show: false,
      resizable: false,
    });

    let mainWin = Editor.Window.main;
    mainWin.nativeWin.on('close', event => {
      event.preventDefault();

      Electron.app.relaunch({
        args: [ `./example-apps/dashboard/`]
      });
      Electron.app.exit(0);
    });

    Editor.log('Particle Editor Ready!');
  },
});
