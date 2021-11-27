const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.get('/js', (req, res) => {
    res.send('Hello World!')
})

app.get(['/', '/index', '/index.html'], function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
