apiKey = "eB8MBQ68gY/PPCjzioEUqQ==OruEx0QHdYMVlm6f";
const request = require('request');

var category = 'fooddrink'
request.get({
  url: 'https://api.api-ninjas.com/v1/trivia?category=' + category,
  headers: {
    'X-Api-Key': 'eB8MBQ68gY/PPCjzioEUqQ==OruEx0QHdYMVlm6f'
  },
}, function(error, response, body) {
  if(error) {
    return console.error('Request failed:', error);
  }
  else if(response.statusCode != 200) {
    return console.error('Error:', response.statusCode, body.toString('utf8'));
  }
  else {
    //document.getElementById("question").innerHTML = response[0].question;
    //document.getElementById("answer").innerHTML = response[0].answer;
    console.log(body)
  }
});