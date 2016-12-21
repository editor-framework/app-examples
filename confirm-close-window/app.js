'use strict';

const Editor = require('../../index');

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init();

    cb ();
  },

  run () {
    // create main window
    let mainWin = new Editor.Window('win-02', {
      title: 'Window 1',
      width: 400,
      height: 300,
      minWidth: 400,
      minHeight: 300,
      show: true,
      resizable: true,
    });
    Editor.Window.main = mainWin;

    mainWin.load('app://index.html');
    mainWin.show();

    // create win2
    let win2 = new Editor.Window('main', {
      title: 'Window 2',
      width: 200,
      height: 200,
      minWidth: 200,
      minHeight: 200,
      show: false,
      resizable: true,
    });

    win2.nativeWin.on('close', event => {
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
    win2.load('http://electron.atom.io/');
    win2.show();
  },
});
