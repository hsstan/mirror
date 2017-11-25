const express = require('express')
const app = express()

app.get('/',(req,res) => {
	res.send('hello world!')
})

app.listen(8000, (err) => {
	if(err) console.log(err)
	else console.log('app in ascolto su porta 8000')
})
