const lib = require('lib')({token: process.env.STDLIB_TOKEN});

// path.basename('C:\\stdlin\\edansneh\\slack-app\\jquery.js');
// const path = require('path');
// var filename = path.basename('/Users/edansneh/stdlib/edansneh/slack-app/jquery.js');
// console.log(filename);
// var $ = require('jquery');
// console.log($);
// var request = require('ajax-request');
// console.log(request);
// request({
//   method: "POST",
//   url: "~/scrapedictionry.py",
//   data: {param: "hello"}
// }).done(function(o) {
//    alert("sucess");
// });

/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = 'No Results Found', command = {}, botToken = null, callback) => {


  callback(null, {
    response_type: 'in_channel',    
    text: `${text}: `
  });

};
