'use strict';

var horizon = angular.module('horizon', [
    'ui.bootstrap',
    'ngRoute',
    'ngMessages',
    'horizon.compute',
    'horizon.networks',
    'networksServices',
])

horizon.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({ 
      redirectTo: '/' 
    });
}]);
