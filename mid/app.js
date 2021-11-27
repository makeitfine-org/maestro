const express = require('express')
const app = express()
const path = require('path');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const port = 3000

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, '.'));

app.use(connectLivereload());

app.get('/js', (req, res) => {
    res.send('Hello World!')
})

app.get(['/', '/index', '/index.html'], function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
