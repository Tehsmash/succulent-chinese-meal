'use strict';

var horizon = angular.module('horizon', [
    'ngRoute',
    'ngMessages',
    'horizon.ComputeController',
    'horizon.NetworksController'
])

horizon.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({ 
      redirectTo: '/' 
    });
}]);
