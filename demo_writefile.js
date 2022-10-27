var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'sameer is also my best friend', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});