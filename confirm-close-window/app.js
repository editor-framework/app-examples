'use strict';

const Editor = require('../../index');

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init();

    cb ();
  },

  run () {
    // create main window
    let mainWin = new Editor.Window('main', {
      title: 'Main Window',
      width: 900,
      height: 700,
      minWidth: 900,
      minHeight: 700,
      show: false,
      resizable: true,
    });
    Editor.Window.main = mainWin;

    mainWin.nativeWin.on('close', event => {
      let res = Editor.Dialog.messageBox({
        type: 'info',
        buttons: ['Yes', 'No'],
        title: 'Do you want to close the window?',
        message: 'Do you want to close the window?',
        detail: '',
      });

      if ( res === 0 ) {
        Editor.log('Yes, I would like!');
      } else if ( res === 1 ) {
        Editor.log('Not this time!');
        event.preventDefault();
      }
    });
    mainWin.load('http://electron.atom.io/');
    mainWin.show();

    // create win2
    let win2 = new Editor.Window('win-02', {
      title: 'Window 2',
      width: 400,
      height: 300,
      minWidth: 400,
      minHeight: 300,
      show: true,
      resizable: true,
    });

    win2.load('app://index.html');
    win2.show();
  },
});
