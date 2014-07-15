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
    .when('/404', {
      templateUrl: '404.html'
    })
    .when('/family', {
      templateUrl: 'views/family.html',
      controller: 'FamilyCtrl'
    })
    .otherwise({
      redirectTo: '/404'
    });
});

app.directive('enter', function() {
  return function(scope, element){
    element.bind('mouseenter', function() {
      console.log('I am inside you!');
    });
  };
});