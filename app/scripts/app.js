'use strict';

/**
 * @ngdoc overview
 * @name jigsawPuzzleApp
 * @description
 * # jigsawPuzzleApp
 *
 * Main module of the application.
 */
angular
  .module('jigsawPuzzleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
