const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const posts = require('./db/posts');
const downloads = require('./db/downloads');

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.send('index.html');
});

app.get('/posts', function (req, res) {
    res.send(posts);
});

app.get('/downloads', function (req, res) {
    res.send(downloads);
});

app.listen(port, function () {
    console.log(`app listening on port ${port}`);
});