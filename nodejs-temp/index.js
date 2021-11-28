const serverStarted = require("./serverStarted")

const path = require('path')
const fs = require('fs')
const http = require('http')

readPublicHtmlFile =
    (res, fileName, codeStatus = 200, contentType = 'text/html') => {
        fs.readFile(path.join(__dirname, 'public', fileName),
            (err, content) => {
                if (err) throw err
                res.writeHead(codeStatus, {
                    'Content-Type': contentType
                })
                res.end(content)
            })
    }

const server = http.createServer((req, res) => {
        console.log('meth/url:', req.method, req.url)

        if (req.method === 'GET') {
            switch (req.url.substr(1)) {
                case 'favicon.ico':
                    fs.createReadStream(serverStarted.FAVICON).pipe(res)
                    break

                case '':
                case 'index':
                case 'index.html':
                    readPublicHtmlFile(res, 'index.html')
                    break

                case 'contact':
                case 'contact.html':
                    readPublicHtmlFile(res, 'contact.html')
                    break

                case 'hi':
                    res.writeHead(202, {
                        'Content-Type': 'text/html',
                        'message1': 'hi!!!',
                        'message2': 'hi 2!!!'
                    })
                    res.end('Hi, from server!\n')
                    break

                case 'hello':
                    res.writeHead(202, {
                        'Content-Type': 'text/plain',
                        'message1': 'hello!!!',
                        'message2': 'hello 2!!!'
                    })
                    res.end('<h1>hello, from server!<h1>\n')
                    break

                case 'style.css':
                    readPublicHtmlFile(res, 'style.css', 200, 'text/css')
                    break

                default:
                    readPublicHtmlFile(res, 'error 404.html', 404)
            }
        }
    }
)

const port = parseInt(process.env.PORT) || 3000
server.listen(port, () => {
    serverStarted.serverStartedMes(port)
})
