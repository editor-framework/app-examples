'use strict';

const Editor = require('../../index');

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init();

    cb ();
  },

  run () {
    // create main window
    Editor.run('app://index.html', {
      title: 'Native Mouse',
      width: 400,
      height: 300,
      show: false,
      resizable: false,
    });
  },
});
