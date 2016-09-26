'use strict';

const Editor = require('../../index');

Editor.App.extend({

  init (opts, callback) {
    Editor.init({
      selection: ['normal']
    });
    callback();
  },

  run () {
    let ipc = new Editor.IpcListener();

    ipc.on('run-command:exec', ( event, opts ) => {
      // node.js child_process module
      // you can use exec or spawn to run command
      const Exec = require('child_process').exec;
      let child = Exec(opts.cmd, {cwd: opts.cwd}, () => {
        Editor.success('Run command finished!');
      });

      // whenever child process' stdout receive data, use IPC message to
      // send the message to panel
      child.stdout.on('data', (data) => {
        console.log(data.toString());
        event.reply(null, data.toString());
      });
    });

    Editor.run('app://index.html', {
      title:     'Run Command',
      width:     400,
      height:    600,
      minWidth:  400,
      minHeight: 300,
      show:      false,
      resizable: true,
    });
  },
});
