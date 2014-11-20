'use strict';

angular.module('myApp.compute', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/compute', {
    templateUrl: 'compute/compute.html',
    controller: 'ComputeController'
  });
}])

.controller('ComputeController', [function() {

}]);
