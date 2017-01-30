'use strict';

const electron = require('electron-prebuilt');
const spawn = require('child_process').spawn;

let args = [
  './demo',
  '--debug=3030',
  '--dev',
  '--show-devtools'
].concat(process.argv.slice(2));

let app = spawn(electron, args, {
  stdio: 'inherit'
});

process.chdir('tasks/foo');

// Gulp tasks that will be run.
var tasks = ['js:uglify', 'js:lint'];

// Run the `gulp` executable
var gulp_child = spawn('gulp', tasks);

// Print output from Gulpfile
child.stdout.on('data', function(data) {
  if (data) {
    console.log(data.toString());
  }
});

app.on('close', () => {
  // User closed the app. Kill the host process.
  process.exit();
});
