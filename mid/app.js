const express = require('express')
const app = express()
const path = require('path');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const port = 3000

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

app.use(connectLivereload());
app.use(express.static('public'));

app.get('/js', (req, res) => {
    res.send('Hello World!')
})

app.get(['/', '/index', '/index.html'], function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get(['/vm', '/vm.html', '/vm.htm'], function (req, res) {
    res.sendFile(path.join(__dirname, '/public/vm.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
