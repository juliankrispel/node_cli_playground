var readline = require('readline');

var nc = require('ncurses'),
          win = new Window();

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.prompt();


process.stdin.setRawMode(true);    

process.stdin.on('keypress', function (chunk, key) {
  process.stdout.write('Get Chunk: ' + chunk + '\n');
  if (key && key.ctrl && key.name == 'c') process.exit();
});

