'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:FamilyCtrl
 * @description
 * # FamilyCtrl
 * Controller of the ngApp
 */
angular.module('ngApp')
  .controller('FamilyCtrl', function ($scope) {
    $scope.family = [
      {
        name: 'Alex',
        age: '14',
        gender: 'Male'
      },
      {
        name: 'Umpa',
        age: '71',
        gender: 'Male'
      },
      {
        name: 'Colin',
        age: '11',
        gender: 'Llama'
      },
      {
        name: 'Baggie',
        age: '70',
        gender: 'Female'
      },
      {
        name: 'Laura',
        age: '45',
        gender: 'Female'
      }
    ];
  });
