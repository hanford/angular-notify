## angular-notify

[![NPM][notify-icon]][notify-url]

#### Installation  
Installation is super easy, simply add the dependencies to your angular module, and inject ```notify``` in your angular service, component, directive or controller.

```
# use npm
$ npm install angular-notify
```

Add angular-notify to your dependencies

```
angular
  .module('yourApp', ['angular-notify'])
  .controller('SampleController', function (notify) {
    function onClick () {
      console.log('clicked notification!')
    }

    notify.show('Example Notification', 'path/icon.jpg', 5000, onClick)
  })
```

#### API
##### *message*  

The first parameter is the message for the notification

##### *icon*  

The second parameter is the icon for the notification

##### *timeout*  

timeout determines how long to keep the notification, (default is 5000 milliseconds)

##### *callback*  

The function you want to call when the notification is clicked

[notify-icon]: https://nodei.co/npm/angular-notify.png?downloads=true
[notify-url]: https://npmjs.org/package/angular-notify
