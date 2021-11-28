const path = require('path')

// let file = '/home/ymalysh/dev/projects/my/maestro/nodejs-temp/index.js'
// console.log(file.toString())

let file = __filename

console.log("filename: ", path.basename(file))
console.log("dirname: ", path.dirname(file))
console.log("extname: ", path.extname(file))
console.log("parse res: ", path.parse(file))
