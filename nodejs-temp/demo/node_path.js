const fs = require("fs");
const path = require("path");

let dir = path.join(__dirname, "test");

new Promise((resolved, rej) => {
  // setTimeout(() => {
  fs.mkdir(dir, (err) => {
    if (err && err.errno !== -17) {
      throw err;
    } else {
      console.log("mkdir: demo");
      resolved();
    }
  });
  // }, 1500)
}).then(() => {
  console.log("removing dir");
  // node_path.rmdir(dir, (err) => {
  //   if (err) throw err
  // })
});
