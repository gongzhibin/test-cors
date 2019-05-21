var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

// allow custom header and CORS
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.sendStatus(200) // 让options请求快速返回
  } else {
    next()
  }
})
app.post('/hello', function (req, res) {
  const { name } = req.body
  res.json({
    resMsg: `hello ${name}!`
  })
})

app.get('/jsonp', (req, res) => {
  const { query } = req
  const { name, age, callback } = query
  const response = {
    name,
    age
  }
  res.end(callback + '(' + JSON.stringify(response) + ')')
})

app.listen(8081, function () {
  console.log('App listening on port 8081!')
})
