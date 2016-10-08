'use strict';

const Fs = require('fire-fs');

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    layout ( event, mode ) {
      let layoutInfo = JSON.parse(
        Fs.readFileSync(
          Editor.url(`app://layouts/${mode}.json`)
        )
      );

      Editor.Ipc.sendToMainWin( 'editor:reset-layout', layoutInfo);
    }
  },
};
