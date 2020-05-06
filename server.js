const express = require('express');

const app = express();
const port = process.env.PORT || 4003;

app.get('/',(request,response) => {
  response.sendFile(__dirname + '/index.html');
});


app.get('/index.html',(request,response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/animal.html',(request,response) => {
  response.sendFile(__dirname + '/animal.html');
});

app.get('/fish.html',(request,response) => {
  response.sendFile(__dirname + '/fish.html');
});

app.get('/fruit.html',(request,response) => {
  response.sendFile(__dirname + '/fruit.html');
});

app.listen(port,() => console.log('Listening on port ' + port));
