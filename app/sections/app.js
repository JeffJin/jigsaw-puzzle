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
        templateUrl: 'sections/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/raster', {
        templateUrl: 'sections/image-raster/raster.html',
        controller: 'RasterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($window){

  });
