module.exports = require('angular')
  .module('angular-notify', [])
  .service('notify', Notify)
  .name

Notify.$inject = [
  '$timeout',
  '$window'
]

function Notify ($timeout, $window) {
  // fallback for devices without the notification object, like Mobile Safari.
  if ($window.Notification) {
    $window.Notification.requestPermission()
  }

  var state = {
    show: show,
    close: close,
    notification: {}
  }

  function show (message, icon, timeout, clickFn) {
    if (!$window.Notification) return
    $window.Notification.requestPermission(function (result) {
      if (result !== 'granted') return

      if (icon) {
        state.notification = new $window.Notification(message, {icon:icon})
      } else {
        state.notification = new $window.Notification(message)
      }

      if (clickFn) {
        state.notification.onclick = function () {
          clickFn()
        }
      }

      $timeout(function () {
        state.notification.close()
      }, (timeout || 5000))
    })
  }

  function close () {
    return state.notification.close()
  }

  return state
}
