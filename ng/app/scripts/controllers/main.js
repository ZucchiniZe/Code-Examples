'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngApp
 */
angular.module('ngApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.jQueryEnter = function() {
      $('p.lead').empty();
      $('p.lead').append('<img src="images/yeoman.png" alt="I\'m Yeoman"><br><strong>OMG</strong> a jQuery Function!');
    };
    $scope.leaveExit = function() {

    };
  });
