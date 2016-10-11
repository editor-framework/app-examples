'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    layout ( event, mode ) {
      Editor.Window.main.resetLayout(`app://layouts/${mode}.json`);
    }
  },
};
