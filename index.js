var AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});
var firehose = new AWS.Firehose();

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN',
  access_token_secret: 'YOUR_TOKEN_SECRET'
});

var stream = client.stream('statuses/filter', {track: '#ifood'});

stream.on('data', function(event) {

  var params = {
    DeliveryStreamName: 'teste-twitter', /* required */
    Record: { /* required */
      Data: new Buffer(event.text) || 'STRING_VALUE' /* required */
    }
  };

   firehose.putRecord(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
   });

  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});
 
