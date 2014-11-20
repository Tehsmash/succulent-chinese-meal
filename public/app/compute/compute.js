'use strict';

var compute = angular.module('horizon.compute', ['ngRoute'])

compute.config(['$routeProvider', function($routeProvider) {
  .when('/compute', {
    templateUrl: 'compute/compute.html',
    controller: 'ComputeController'
  });
}])

compute.controller('ComputeController', function($scope, instanceFactory) {

  $scope.instances = instanceFactory.getInstances();

  // Create a instance from the instance object
  $scope.createInstance = function() {
    var uuid = Math.random().toString(36).substring(7);
    var instance = {
      uuid: uuid, 
      name: $scope.instance.name || uuid,
    };
    instanceFactory.setInstance(instance);
    $scope.newInstance();
  }

  $scope.clearFilter = function(){
    $scope.filter = null;
  }

  // Delete a instance
  $scope.deleteInstance = function(index) {
    instanceFactory.deleteInstance(index);
  }

  // Initialise empty instance object. 
  $scope.newInstance = function() {
    $scope.instance = {
      uuid: null,
      name: null,
      adminState: true
    };  
  }

  $scope.newInstance();
});
