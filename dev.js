require('shelljs');
//load submodules
var develop = require('./scripts/develop');
var serve = require('./scripts/serve');

process.argv.forEach(function(val, index, array) {
  if(index>1){
    switch (val){
      case 'serve':
        serve();
      break;
      default:
        console.log('ERROR : undefined script');
      break;
    }
  }
});
