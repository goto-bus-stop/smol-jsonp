var callbacks = {}
var bagName = '__jsonpCallbacks'
Object.defineProperty(window, bagName, { value: callbacks })

var jsonpIndex = 0
function jsonp (url, opts) {
  var callbackName = 'jsonp' + jsonpIndex

  var param = (opts && opts.param) || 'callback'
  var sigil = url.indexOf('?') !== -1 ? '&' : '?'

  var s = document.createElement('script')
  s.async = true
  s.src = url + sigil + param + '=' + encodeURIComponent(bagName + '.' + callbackName)
  document.head.appendChild(s)

  function cleanup () {
    delete callbacks[callbackName]
    document.head.removeChild(s)
  }

  return new Promise(function (resolve, reject) {
    callbacks[callbackName] = resolve
    s.onerror = reject

    jsonpIndex += 1
  }).then(function (result) {
    cleanup()
    return result
  }, function (err) {
    cleanup()
    throw err
  })
}

module.exports = jsonp
