'use strict';

var compute = angular.module('horizon.compute', ['ngRoute'])

compute.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/compute', {
      templateUrl: 'compute/compute.html',
      controller: 'ComputeController'
    });
}])

compute.controller('ComputeController', function() {

});
