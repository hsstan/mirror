const express = require('express')
const app = express()
const path = require('path') 

app.get('/',express.static(path.join(__dirname,'public')))

app.listen(8000, (err) => {
	if(err) console.log(err)
	else console.log('app in ascolto su porta 8000')
})
