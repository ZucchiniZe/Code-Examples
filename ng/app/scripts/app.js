'use strict';

/**
 * @ngdoc overview
 * @name ngApp
 * @description
 * # ngApp
 *
 * Main module of the application.
 */

var app = angular.module('ngApp', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/family', {
      templateUrl: 'views/family.html',
      controller: 'FamilyCtrl'
    })
    .when('/404', {
      templateUrl: '404.html'
    })
    .otherwise({
      redirectTo: '/404'
    });
});

app.directive('enter', function() {
  return function(scope, element, attrs){
    element.bind('mouseenter', function() {
      scope.$apply(attrs.enter);
    });
  };
});

app.directive('leave', function () {
  return function (scope, element, attrs) {
    element.bind('mouseleave', function () {
      scope.$apply(attrs.enter);
    });
  };
});

app.directive('click', function() {
  return function (scope, element, attrs) {
    element.bind('click', function() {
      scope.$apply(attrs.enter);
    })
  }
});

var $name = $('.personName');
var $age = $('.personAge');
var $gender = $('.personGender');

$('#submit').click(function() {
  console.log('checking');
  var formData = {
    name: $name.val(),
    age: $age.val(),
    gender: $gender.val()
  };
  $.ajax({
    type: 'POST',
    url: 'http://famapi.herokuapp.com/api/people',
    data: formData,
    success: function (data) {
      console.log(data);
    },
    error: function (error1, error2, error3){
      console.log(error1, error2, error3);
    }
  })
});