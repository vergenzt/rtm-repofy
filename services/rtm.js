var RtmApi = require('rtm-js');
var rtm = new RtmApi(
  process.env.RTM_API_KEY,
  process.env.RTM_API_SECRET,
  'delete'
);

rtm.auth_token = process.env.RTM_AUTH_TOKEN;

module.exports = rtm;

