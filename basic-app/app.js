'use strict';

/**
 * Entry point for our application.
 * *Note that this file is the "main" file in package.json!*
 */

const Editor = require('../../index');

Editor.App.extend({

  /**
   * init is called once Editor Framework has completed its internal initialization.
   * Here, you may want to define any application-level configuration or behavior.
   *
   * @param opts An object representing the command line options used to start this Application
   * @param callback function that signals the parent process that initialization is complete.
   *    You'll want to call manually this within your `init` function once you're ready for the application
   *    to run
   */
  init (opts, callback) {
    Editor.init({
      'package-search-path': [
        'app://package-doesnt-exist/'
      ]
      // An object defining application-level configuration options for initialization will go here  
    });


    Editor.success('main.js: call to init() completed successfully');

    // You'll need to call this directly to signal Editor-Framework that you're ready to run the application
    callback();
  },

  /**
   * Called by Editor-Framework after initialization is complete
   */
  run () {
    /** Create our main window. The two arguments below define the properties of this window and are required:
     *   - the name of the window ('main' in this case)
     *   - An object defining the parameters of the window
     */
    Editor.run('app://index.html', {
      title:     'Editor Framework Basic Example',
      width:     900,
      height:    700,
      minWidth:  900,
      minHeight: 700,
      show:      false,
      resizable: true,
    });

    Editor.success('main.js: call to run() completed successfully');
  },
});
