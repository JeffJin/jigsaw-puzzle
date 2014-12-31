'use strict';

/**
 * @ngdoc function
 * @name jigsawPuzzleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jigsawPuzzleApp
 */
angular.module('jigsawPuzzleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
