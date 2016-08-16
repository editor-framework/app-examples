'use strict';

const Editor = require('../../index');

Editor.App.extend({

  init (opts, callback) {
    Editor.init({
      selection: ['normal']
    });
    callback();
  },

  run () {
    let win1 = new Editor.Window('win1', {
      title:     'Window 01',
      width:     900,
      height:    700,
      show:      false,
      resizable: true,
    });
    win1.restorePositionAndSize();
    win1.load('app://win1.html');
    win1.show();

    let win2 = new Editor.Window('win2', {
      title:     'Window 02',
      width:     900,
      height:    700,
      show:      false,
      resizable: true,
    });
    win2.restorePositionAndSize();
    win2.load('app://win2.html');
    win2.show();

    //
    Editor.Window.main = win1;
    win1.focus();
  },
});
