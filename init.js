const fs = require('fs-extra')
require('dotenv').config()

var data = JSON.parse(process.env['CREDS'])
var writeObject = JSON.stringify(data)

fs.writeFile('server/config/keyFile.json', writeObject, function(err) {
  if(err) throw err;
  console.log('done');
});