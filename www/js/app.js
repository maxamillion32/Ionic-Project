// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.news', {
    url: '/news',
    views: {
      'tab-news': {
        templateUrl: 'templates/news.html',
      }
    }
  })

  .state('app.eventi', {
      url: '/eventi',
      views: {
        'tab-eventi': {
          templateUrl: 'templates/eventi.html',
          
        }
      }
    })


  .state('app.evento', {
      url: '/evento',
      views: {
        'tab-eventi': {
          templateUrl: 'templates/evento.html',
          
        }
      }
    })

    .state('app.corsi', {
      url: '/corsi',
      views: {
        'tab-corsi': {
          templateUrl: 'templates/corsi.html',
          
        }
      }
    })

    .state('app.orari', {
      url: '/orari',
      views: {
        'tab-orari': {
          templateUrl: 'templates/orari.html',
        }
      }
    })

    .state('app.sedi', {
      url: '/sedi',
      views: {
        'tab-sedi': {
          templateUrl: 'templates/sedi.html',
        }
      }
    })

    .state('app.sede', {
      url: '/sede',
      views: {
        'tab-sedi': {
          templateUrl: 'templates/sede.html',
          controller: 'MapCtrl'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/home.html',
        }
      }
    })
 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/news');
});
