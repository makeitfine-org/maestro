const chalk = require("chalk")
const path = require("path")

const serverStarted = (port) => {
    console.log(
        chalk.rgb(255, 127, 0)
        (`server is running (port: ${port}) ...`)
    )
}

let FAVICON = path.join(__dirname, 'public', 'favicon.ico')

module.exports = {
    serverStartedMes: serverStarted,
    FAVICON
}
