var fs = require('fs'),
    path = require('path'),
    base = path.resolve(__dirname+'/../'),
    pack = require('../package.json'),
    util = require('util');
module.exports = function(){
  var conf = pack.config.development;
  console.log('initializing development enviroment');
  var api_exec = require('child_process').exec;
  var api = api_exec('cd ./backend && forever app.js  -w & cd ./frontend/app && live-server --host=localhost --port='+conf.app_port+' --no-browser');
  api.stdout.on('data', function(data){
    util.print(data);
  });
  api.stderr.on('data', function(data){
      util.print(data);
  });
}
