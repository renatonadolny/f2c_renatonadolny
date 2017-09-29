// test.js

const f2c = require('./index.js')

const tempC=f2c(20)

if (tempC === -6.66){
	console.log('Teste OK!')
	process.exit(0)
}
console.log ('Test fail')
process.exit(1)
