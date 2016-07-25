'use strict';

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
  init ( opts, callback ) {
    Editor.init({
      // An object defining application-level configuration options for initialization will go here
      'package-search-path': [
        Editor.url('app://packages/'),
      ],
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
    let mainWin = new Editor.Window('main', {
      title: 'Editor Framework Basic Example',
      width: 900,
      height: 700,
      minWidth: 900,
      minHeight: 700,
      show: false,
      resizable: true,
    });

    // Tell Editor that that is our root window.
    Editor.Window.main = mainWin;

    // restore window size and position
    mainWin.restorePositionAndSize();

    // page-level test case
    mainWin.load( 'app://index.html' );

    // load and show main window
    mainWin.show();

    // open dev tools if needed
    if ( Editor.argv.showDevtools ) {
      // NOTE: open dev-tools before did-finish-load will make it insert an unused <style> in page-level
      mainWin.nativeWin.webContents.once('did-finish-load', function () {
        mainWin.openDevTools();
      });
    }

    mainWin.focus();

    Editor.success('main.js: call to run() completed successfully');
  },
});
