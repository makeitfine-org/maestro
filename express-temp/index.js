import express from 'express'
import color from 'chalk'
import path from 'path'
import {log, reqTime} from './middleware.js'
import serverRouter from './router/index.js'

const addHtmlExt = (path) => [path, path + '.html']

const __dirname = path.resolve()

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))
console.log(app.get('view engine'))
console.log(app.get('views'))

app.use(express.static('public'))
app.use(reqTime)
app.use(log)
app.use(serverRouter)

app.get('/hi', (req, res) => {
    console.log(req.requestTime)
    res.send('<h1>Hi, there!</h1>')
})

// app.get(['/'].concat(addHtmlExt('/index')), (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

// app.get(addHtmlExt('/feature'), (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'feature.html'))
// })

app.get(['', '/', '/index', '/index.html'], (req, res) => {
    res.render('index', {title: 'Index page', active: 'index'})
})

app.get('/feature', (req, res) => {
    res.render('feature', {title: 'Feature page', active: 'feature'})
})

app.get('/other', (req, res) => {
    res.render('other', {title: 'Other page', active: 'other'})
})

app.get(addHtmlExt('/download'), (req, res) => {
    res.download(path.resolve(__dirname, 'public', 'data.txt'))
})

const port = process.env.PORT ?? '3000'
app.listen(port, () => {
    console.log(
        color.rgb(255, 32, 0)
        ('Server is running on port: ', port, '...')
    )
})
