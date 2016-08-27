# Example of Twitter API and AWS Kinesis Firehose on NodeJS

Example of Twitter streaming and Kinesis Firehose to store the data on a S3 bucket on AWS.
It is streaming #ifood hashtag tweets from Twitter.

1.  npm install
2.  configure your Twitter keys on 'index.js' (first create an App on twitter console, then generate these keys)
3.  configure your AWS keys in the file '~/.aws/credentials' on Linux or C:\Users\{USER_NAME}\.aws\credentials
    format: 
      [default]
      aws_access_key_id = "YOUR KEY ID"
      aws_secret_access_key = "YOUR SECRET ACCESS KEY"
4.  create your Firehose stream on AWS console as 'teste-twitter', or give it another name and change it on 'index.js' file (https://console.aws.amazon.com/firehose/home?region=us-west-2#/intro) 
5.  run it with 'node index.js'

