const path = require("path")
const fs = require("fs")

let newFile = path.join(__dirname, "test", "new.txt")
fs.writeFile(newFile, "some content!!!", (err) => {
    if (err) {
        throw err
    }

    console.log("new.txt file create!")

    fs.appendFile(newFile, "\nGo go go!!!", (err) => {
        if (err) throw err
    })
})
