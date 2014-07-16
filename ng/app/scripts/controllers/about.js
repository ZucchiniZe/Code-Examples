'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngApp
 */
angular.module('ngApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.about = [
      {
        name: 'Alex',
        bio: 'a 14 y/o who likes to program stuff',
        employer: 'Virtual Chemistry Inc.'
      }
    ];
  });