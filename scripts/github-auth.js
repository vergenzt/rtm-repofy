var prompt = require('prompt');
var github = require('../services/github');

prompt.message = 'Github auth';
prompt.start();
prompt.get([
  {
    name: 'username',
    required: true,
  },
  {
    name: 'password',
    required: true,
    hidden: true,
  }
], function(err, result) {

  github.authenticate({
    type: 'basic',
    username: result.username,
    password: result.password,
  });

  github.authorization.create({
    scopes: ['repo'],
    note: "Authorization for rtm-repofy to commit to user repository.",
  }, function(err, res) {
    if (res.token) {
      console.log('Github authorization token:', res.token);
    } else {
      console.log('No token returned!');
    }
  });
});

