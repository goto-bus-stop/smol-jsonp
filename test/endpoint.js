var http = require('http')
http.createServer(function (req, res) {
  var url = new URL(req.url, 'http://localhost/')
  var callback = url.searchParams.get('callback') || 'callback'

  res.setHeader('content-type', 'application/javascript')
  res.end(callback + ' && ' + callback + '({ok: true})')
}).listen(process.env.PORT)
