const fs = require('fs')
let file=process.argv[2]
console.log(fs.readFileSync(file).toString().split('\n').length-1)