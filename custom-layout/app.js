'use strict';

const Editor = require('../../index');

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init({
      layout: 'app://layouts/default.json',
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
      width: 800,
      height: 600,
      show: false,
      resizable: true,
    });
  },
});
