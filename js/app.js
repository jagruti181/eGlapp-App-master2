
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
	
    .state('app.emailupdate', {
        url: "/emailupdate/:id",
      views: {
        'menuContent' :{
            templateUrl: "templates/emailupdate.html",
            controller: 'EmailUpdateCtrl'
        }
      }
    })
    .state('app.mycontacts', {
        url: "/mycontacts",
      views: {
        'menuContent' :{
            templateUrl: "templates/mycontact.html",
            controller: 'MyContactCtrl'
        }
      }
    })
    .state('app.discover', {
        url: "/discover",
      views: {
        'menuContent' :{
            templateUrl: "templates/discover.html",
            controller: 'DiscoverCtrl'
        }
      }
    })
    .state('app.printticket', {
        url: "/printticket/:uid/:id",
      views: {
        'menuContent' :{
            templateUrl: "templates/printticket.html",
            controller: 'PrintticketCtrl'
        }
      }
    })
    .state('app.discover-inner', {
        url: "/discover/inner/:id",
      views: {
        'menuContent' :{
            templateUrl: "templates/discover-inner.html",
            controller: 'DiscoverinnerCtrl'
        }
      }
    })
    .state('app.savedevents', {
        url: "/savedevents",
      views: {
        'menuContent' :{
            templateUrl: "templates/savedevents.html",
            controller: 'SavedeventsCtrl'
        }
      }
    })
    .state('app.updateevent', {
        url: "/updateevent/:id",
      views: {
        'menuContent' :{
            templateUrl: "templates/updateevent.html",
            controller: 'UpdateeventCtrl'
        }
      }
    })
    .state('app.register', {
        url: "/register/:id/:uid",
      views: {
        'menuContent' :{
            templateUrl: "templates/register-event.html",
            controller: 'RegisterEvent'
        }
      }
    })
    .state('app.create-event', {
        url: "/createevent",
      views: {
        'menuContent' :{
            templateUrl: "templates/create-event.html",
            controller: 'CreateeventCtrl'
        }
      }
    })  
    .state('app.mytickets', {
        url: "/mytickets",
      views: {
        'menuContent' :{
            templateUrl: "templates/mytickets.html",
            controller: 'MyticketsCtrl'
        }
      }
    })  
    .state('app.myevents', {
        url: "/myevents",
      views: {
        'menuContent' :{
            templateUrl: "templates/myevents.html",
            controller: 'MyeventsCtrl'
        }
      }
    })  
    .state('app.myprofile', {
        url: "/myprofile",
      views: {
        'menuContent' :{
            templateUrl: "templates/myprofile.html",
            controller: 'MyprofileCtrl'
        }
      }
    })   
    .state('app.sponsore', {
        url: "/sponsore/:eid",
      views: {
        'menuContent' :{
            templateUrl: "templates/sponsor.html",
            controller: 'SponsorCtrl'
        }
      }
    })  
    .state('app.sponsor', {
        url: "/sponsor",
      views: {
        'menuContent' :{
            templateUrl: "templates/sponsor.html",
            controller: 'SponsorCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/discover');
})

.config(function($compileProvider){
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);
})

.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}])


