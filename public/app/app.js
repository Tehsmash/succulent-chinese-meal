'use strict';

var horizon = angular.module('horizon', [
    'mm.foundation',
    'ngRoute',
    'ngMessages',
    'horizon.compute',
])

horizon.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({ 
      redirectTo: '/' 
    });
}]);
