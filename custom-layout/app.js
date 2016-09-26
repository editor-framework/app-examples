'use strict';

const Editor = require('../../index');

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init({
      layout: 'app://layout.json',
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
      width: 900,
      height: 700,
      minWidth: 900,
      minHeight: 700,
      show: false,
      resizable: true,
    });
  },
});
