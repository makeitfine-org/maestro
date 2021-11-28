const path = require("path")
const fs = require("fs")

let newFile = path.join(__dirname, "test", "new.txt")
fs.readFile(newFile, 'utf8', (err, content) => {
    if (err) {
        throw err
    }

    // const data = Buffer.from( content)
    // console.log(data.toString())
    console.log(content.toString())
})
