// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngStorage', 'countrySelect', 'credit-cards', 'ngCardIO'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }



  });
})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.editorial', {
      url: '/editorial',
      views: {
        'menuContent': {
          templateUrl: 'templates/editorial.html',
          controller: 'MainCtrl'
        }
      }
    })
    .state('onboarding', {
      url: '/onboarding',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
    })
    .state('signin', {
      url: '/signin',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
    })
    .state('signup', {
      url: '/signup',
          templateUrl: 'templates/signup.html',
          controller: 'SignUpCtrl'
    })
    .state('forgot-password', {
      url: '/forgot-password',
          templateUrl: 'templates/forgot-password.html',
          controller: 'LoginCtrl'
    })
    .state('app.product-list', {
      url: '/product-list/:categoryId/:catagoryName',
      views: {
        'menuContent': {
          templateUrl: 'templates/product-list.html',
          controller: 'ProductListCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/single/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/single-product.html',
        controller: 'SingleProductCtrl'
      }
    }
  })

  .state('app.payment_step1', {
    url: '/payment_step1/:method',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment_step1.html',
        controller: 'OrderCtrl'
      }
    }
  })

  .state('app.payment_step2', {
    url: '/payment_step2/:orderId/:amount/:currency/:name/:phone/:method',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment_step2.html',
        controller: 'PaymentCtrl'
      }
    }
  })
  .state('app.payment_step3', {
    url: '/payment_step3/:orderId/:transactionId/:payByCash/:amount/:status',
    views: {
      'menuContent': {
        templateUrl: 'templates/payment_step3.html',
        controller: 'OrderConfirmCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/onboarding');
$ionicConfigProvider.backButton.previousTitleText(false).text('');
});


//ngMatch directive
(function () {
'use strict';
var directiveId = 'ngMatch';
angular.module('starter').directive(directiveId, ['$parse', function ($parse) {
 
var directive = {
link: link,
restrict: 'A',
require: '?ngModel'
};
return directive;
 
function link(scope, elem, attrs, ctrl) {
// if ngModel is not defined, we don't need to do anything
if (!ctrl) return;
if (!attrs[directiveId]) return;
 
var firstPassword = $parse(attrs[directiveId]);
 
var validator = function (value) {
var temp = firstPassword(scope),
v = value === temp;
ctrl.$setValidity('match', v);
return value;
}
 
ctrl.$parsers.unshift(validator);
ctrl.$formatters.push(validator);
attrs.$observe(directiveId, function () {
validator(ctrl.$viewValue);
});
 
}
}]);
})();
