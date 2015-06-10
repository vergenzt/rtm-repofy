var async = require('async');
var rtm = require('../services/rtm');

async.waterfall([
  function(next) {
    rtm.get('rtm.auth.getFrob', function(resp) {
      next(null, resp.rsp.frob);
    });
  },
  function(frob, next) {
    console.log('Please visit the following URL to authenticate:');
    console.log(rtm.getAuthUrl(frob));
    console.log();
    console.log('After authenticating, press any key to continue...');
    process.stdin.resume();
    process.stdin.on('data', function() {
      next(null, frob);
    });
  },
  function(frob, next) {
    rtm.get('rtm.auth.getToken', {frob: frob}, function(resp) {
      if (!resp.rsp.auth) {
        console.log('Auth token not found. Did you authenticate?');
        process.exit(1);
      }

      console.log('RTM auth token: ' + resp.rsp.auth.token);
      process.exit(0);
    });
  }
]);

