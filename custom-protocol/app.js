'use strict';

const Editor = require('../../index');

function _initProtocol () {
  const Electron = require('electron');
  const protocol = Electron.protocol;
  const Sharp = require('sharp');
  const Url = require('fire-url');
  const Fs = require('fire-fs');
  const Path = require('fire-path');

  protocol.registerBufferProtocol('thumbnail', (request, cb) => {
    let url = decodeURIComponent(request.url);
    let uri = Url.parse(url);

    let relativePath = uri.hostname;
    if ( uri.pathname ) {
      relativePath = Path.join( relativePath, uri.pathname );
    }
    let file = Path.join( Editor.App.path, relativePath );

    if ( !Fs.existsSync(file) ) {
      cb(-6); // FILE NOT FOUND
      return;
    }

    let size = parseInt(uri.query) || 32;
    Sharp(file)
      .resize(size,size)
      // .background({r: 0, g: 0, b: 0, a: 0})
      .background({r: 0, g: 0, b: 0, a: 255})
      .embed()
      .toFormat(Sharp.format.png)
      .toBuffer()
      .then(buffer => {
        cb({
          mimeType: 'image/png',
          data: buffer,
        });
      })
      ;
  }, err => {
    if ( err ) {
      Editor.failed( `Failed to register protocol thumbnail, ${err.message}` );
      return;
    }
    Editor.success( 'protocol thumbnail registerred' );
  });
}

Editor.App.extend({
  init ( opts, cb ) {
    _initProtocol ();

    Editor.init();

    cb ();
  },

  run () {
    // create main window
    let mainWin = new Editor.Window('main', {
      title: 'Editor Framework',
      width: 800,
      height: 600,
      show: false,
      resizable: true,
    });
    Editor.Window.main = mainWin;

    // restore window size and position
    mainWin.restorePositionAndSize();

    // load and show main window
    mainWin.show();

    // page-level test case
    mainWin.load( 'app://index.html' );

    // open dev tools if needed
    if ( Editor.argv.showDevtools ) {
      // NOTE: open dev-tools before did-finish-load will make it insert an unused <style> in page-level
      mainWin.nativeWin.webContents.once('did-finish-load', function () {
        mainWin.openDevTools();
      });
    }
    mainWin.focus();
  },
});
