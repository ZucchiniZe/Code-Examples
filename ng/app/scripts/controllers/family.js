'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:FamilyCtrl
 * @description
 * # FamilyCtrl
 * Controller of the ngApp
 */
angular.module('ngApp')
  .controller('FamilyCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.loadAPI = function() {
      $http({ method: 'GET', url: 'http://famapi.herokuapp.com/api/people'}).success(function(data){
        $scope.family = data;
      });
    };
    $scope.postAPI = function() {
      var $name = $('.personName');
      var $age = $('.personAge');
      var $gender = $('.personGender');
      var postData = {
        name: $name.val(),
        age: $age.val(),
        gender: $gender.val()
      };
      console.log(postData);
      $http({ method: 'POST', url: 'http://famapi.herokuapp.com/api/people', data: postData}).success(function(data){
        $scope.family.append = data;
      });
    }
  }]);
