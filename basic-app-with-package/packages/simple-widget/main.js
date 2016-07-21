'use strict';



module.exports = {
  load () {
    Editor.success("Simple widget has loaded")
  },

  unload () {
    Editor.success("Simple widget has unloaded")
  },

  messages: {
    'say-hi'() {
      Editor.log("Hello!")
    },

    'notify-click'(event, msg) {
      Editor.log("Main: notify-click event received by main process with message: ", msg)
      Editor.log("Main: Sending 'Response from main!' to window...")
      Editor.Ipc.sendToMainWin('simple-widget:notify-click-response', 'Response from main!')

    },

    log(event, msg) {
      console.log(msg);
    }
  },
};
