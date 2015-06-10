var express = require('express');
var app = express();

// service dependencies
var github = require('./services/github');
var rtm = require('./services/rtm');

// configure middleware
app.use(require('body-parser').json());

// github endpoint
app.post('/github_changed', function(req, res) {
  console.log(req.body);
});

// rtm endpoint
app.post('/rtm_changed', function(req, res) {
  console.log(req.body);
});

