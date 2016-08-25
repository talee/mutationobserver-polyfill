// Ignore non-browser environments
(function() {
  if (typeof navigator == 'undefined') {
    return
  }
  /**
   * Regex from https://github.com/faisalman/ua-parser-js
   */
  var parts = navigator.userAgent.match(/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i)
  if (!parts) {
    return
  }
  var browserName = parts[1]
  var browserVersion = parts[2]
  if (browserName == 'Trident' && browserVersion == '11.0') {
    window.MutationObserver = null
  }
  require('./../bower_components/webcomponentsjs/MutationObserver')
})()
