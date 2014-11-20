'use strict';

var compute = angular.module('compute', ['ngRoute'])

compute.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/compute', {
      templateUrl: 'compute/compute.html',
      controller: 'ComputeController'
    })
    .otherwise({ 
      redirectTo: '/' 
    });
}])

compute.controller('ComputeController', function() {

});

