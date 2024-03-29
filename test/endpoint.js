'use strict'

const http = require('http')
http.createServer(function (req, res) {
  const url = new URL(req.url, 'http://localhost/')
  const callback = url.searchParams.get('callback') || 'callback'

  res.setHeader('content-type', 'application/javascript')
  res.end(callback + ' && ' + callback + '({ok: true})')
}).listen(Number(process.env.PORT))
