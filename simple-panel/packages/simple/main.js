'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    open () {
      Editor.Panel.open('simple');
    },

    open2 () {
      Editor.Panel.open('simple-02');
    },

    open3 () {
      Editor.Panel.open('simple-03');
    },

    'say-hello'(event, msg) {
      console.log(msg);
    }
  },
};
