// readfile.js
const fs = require('fs') // Node.js 내장 모듈
fs.readFile('./calc.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})
console.log('done!')