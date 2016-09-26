'use strict';

const Editor = require('../../index');

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init({
      'panel-window': 'app://window.html',
      'package-search-path': [
        'app://packages/',
      ],
    });

    cb ();
  },

  run () {
    // create main window
    Editor.run('app://index.html', {
      title: 'Editor Framework',
      width: 400,
      height: 300,
      show: false,
      resizable: true,
    });
  },
});
