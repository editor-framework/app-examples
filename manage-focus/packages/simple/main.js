'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    open() {
      Editor.Panel.open('simple');
    },

    'say-hello'(event, msg) {
      console.log(msg);
    }
  },
};
