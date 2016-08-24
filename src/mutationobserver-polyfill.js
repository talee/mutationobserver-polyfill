// Ignore non-browser environments
(function() {
  if (typeof navigator == 'undefined') {
    return
  }
  var parser = require('ua-parser-js')
  var browser = parser(navigator.userAgent).browser
  if (browser.name == 'IE' && browser.version == '11.0') {
    window.MutationObserver = null
    require('./../bower_components/webcomponentsjs/MutationObserver')
  }
})()
