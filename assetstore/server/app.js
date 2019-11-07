var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
var api = require('./routers/api')
var upload = require('./routers/upload')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false}))
app.use('/api', api)
app.use('/upload', upload)
app.use('/script', express.static(__dirname +'/script'))

app.get('/',function(req, res){
    res.send("success")
})

app.listen(port,'0.0.0.0', () => {
    return console.log(`App listening on port ${port}!`);
})