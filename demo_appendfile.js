var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'aateer is my best friend.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});