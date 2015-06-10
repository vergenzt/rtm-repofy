var GithubApi = require('github');
var github = new GithubApi({
  version: '3.0.0'
});

if (process.env.GITHUB_OAUTH_TOKEN) {
  github.authenticate({
    type: "oauth",
    token: process.env.GITHUB_OAUTH_TOKEN
  });
}

module.exports = github;

