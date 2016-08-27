var AWS = require('aws-sdk');

AWS.config.update({region:'us-west-2'});
//var kinesis = new AWS.Kinesis();
var firehose = new AWS.Firehose();
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'hl3HY5ESVj13XS07nWJhVnfGD',
  consumer_secret: 'FNbzfeeKShVXryuqJfKCuMXhbRyoLzOd9ewsdAtUUvOXol9WiS',
  access_token_key: '94481259-4F6xKU3N0x0PJRlBOWdSjCnhW159DqASXvgeIerGR',
  access_token_secret: 'vgpaOFA406ohLDiJnxgpUaulYLXJjN1gWaWx39IsyUDhd'
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
 
// You can also get the stream in a callback if you prefer. 
// client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
//   stream.on('data', function(event) {
//       console.log(event && event.text);
//         });
//          
//            stream.on('error', function(error) {
//                throw error;
//                  });
//                  });
