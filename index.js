var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
