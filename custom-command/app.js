'use strict';

const Editor = require('../../index');

Editor.App.extend({
  beforeInit: ( yargs ) => {
    yargs
      .usage('custom-command [option]')
      .options({
        'say-hello': { type: 'boolean', desc: 'Say hello at initialize.' },
      })
      ;

    yargs
      .command(
        'foo [option]', 'Run foo command',
        yargs => {
          return yargs.usage('Command: foo [option]')
          .options({
            'bar': { type: 'boolean', desc: 'Option bar' },
          });
        },
        argv => {
          argv._command = 'foo';
        }
      )
      ;
  },

  init ( opts, cb ) {
    // EXAMPLE: projectPath
    // let projectPath;
    // if ( opts.args.length > 0 ) {
    //   projectPath = opts.args[0];
    // }

    if ( opts['say-hello'] ) {
      console.log('Hello everyone!');
    }

    if ( opts._command === 'foo' ) {
      console.log(`Execute foo command: bar=${opts.bar}` );
      process.exit(0);

      return;
    }

    Editor.init();

    cb ();
  },
});
