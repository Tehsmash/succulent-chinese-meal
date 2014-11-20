'use strict';

angular.module('horizon', [
    'ui.bootstrap',
    'ngRoute',
    'ngMessages',
    'ComputeController',
    'NetworksController'
])

horizon.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/compute', {
      templateUrl: 'compute/compute.html',
      controller: 'ComputeController'
    })
    .when('/networks', {
      templateUrl: 'networks/networks.html',
      controller: 'NetworksController'
    })
    .otherwise({ 
      redirectTo: '/' 
    });
}]);


