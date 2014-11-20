'use strict';

var horizon = angular.module('horizon', [
    'mm.foundation',
    'ngRoute',
    'ngMessages',
    'horizon.compute',
    'horizon.networks',
    'networksServices'
])

horizon.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({ 
      redirectTo: '/' 
    });
}]);

horizon.factory('instancesFactory', instancesFactory);
